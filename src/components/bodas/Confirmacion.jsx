import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import estilo from "../../estilos/temas/base/bodas/confirmacion.module.scss";
import { shootConfetti } from "../../js/confetti";
export default function Confirmacion({ whatsapp, dias_antes, version }) {
  const [invitado, setInvitado] = useState("sin datos");
  const [pases, setPases] = useState(0);
  const [id, setId] = useState(0);
  const [asistira, setAsistira] = useState(false);
  const [selectedPases, setSelectedPases] = useState("0");
  const [comentarios, setComentarios] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [personasNoAsisten, setPersonasNoAsisten] = useState("");
  const [mostrarCampoNoAsisten, setMostrarCampoNoAsisten] = useState(false);
  const [whatsappInvitado, setWhatsappInvitado] = useState("");
  
  const btnconfirmarRef = useRef(null);

  // Memoizar la URL base de WhatsApp
  const whatsappBase = useMemo(() => {
    const ua = navigator.userAgent;
    return /Mobile/i.test(ua)
      ? "https://api.whatsapp.com/send/?phone="
      : "https://web.whatsapp.com/send/?phone=";
  }, []);

  useEffect(() => {
    const fetchInvitado = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const valores = new URLSearchParams(window.location.search);
        const idParam = valores.get("id");
        const uidParam = valores.get("uid");

        // Validación de parámetros
        if (!idParam || !uidParam) {
          throw new Error("Parámetros de invitación inválidos");
        }

        const response = await fetch(
          `${window.location.origin}/api/getInvitado.json?id=${encodeURIComponent(idParam)}&uid=${encodeURIComponent(uidParam)}`
        );

        if (!response.ok) {
          throw new Error(`Error del servidor: ${response.status}`);
        }

        const json = await response.json();
        
        if (!json || !json[0]) {
          throw new Error("No se encontró la información del invitado");
        }
        
        setInvitado(json[0].nombre);
        setPases(Math.round(json[0].pases));
        setId(json[0].id);
        setAsistira(json[0].confirmado);
        // Guardar el número de WhatsApp del invitado
        if (json[0].numeroWhats) {
          setWhatsappInvitado(json[0].numeroWhats);
        }
        
      } catch (error) {
        setError(error.message);
        console.error("Error fetching invitado:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInvitado();
  }, []);

  const actualizarUrlWhatsapp = useCallback((pasesValue, comentariosValue) => {
    if (!btnconfirmarRef.current || !whatsappInvitado) return;

    const pasesSeleccionados = pasesValue !== "0" ? pasesValue : "0";
    const personasNoAsistenMensaje = mostrarCampoNoAsisten && personasNoAsisten.trim() 
      ? `%0aPersonas que no podrán asistir: ${encodeURIComponent(personasNoAsisten)}`
      : '';

    const mensaje = asistira 
      ? `Hola,%20les%20confirmo%20la%20asistencia%20a%20la%20boda:%20${encodeURIComponent(invitado)},%20y%20usaremos%20${pasesSeleccionados}%20pase(s).${personasNoAsistenMensaje}%0aComentarios:%20${encodeURIComponent(comentariosValue || 'Sin comentarios')}.`
      : `Hola,%20lamento%20informarles%20que%20no%20podré%20asistir%20a%20la%20boda:%20${encodeURIComponent(invitado)}.%0aComentarios:%20${encodeURIComponent(comentariosValue || 'Sin comentarios')}.`;

    btnconfirmarRef.current.href = `${whatsappBase}${whatsapp}&text=${mensaje}`;
  }, [whatsappBase, whatsapp, invitado, asistira, mostrarCampoNoAsisten, personasNoAsisten]);

  const handlePasesChange = useCallback((e) => {
    const value = e.target.value;
    setSelectedPases(value);
    
    if (value !== "0") {
      const pasesSeleccionados = parseInt(value);
      setMostrarCampoNoAsisten(pasesSeleccionados < pases);
      
      if (pasesSeleccionados >= pases) {
        setPersonasNoAsisten("");
      }
    } else {
      setMostrarCampoNoAsisten(false);
      setPersonasNoAsisten("");
    }
    
    if (btnconfirmarRef.current) {
      if (value && value !== "0") {
        btnconfirmarRef.current.classList.remove("desactivado");
      } else {
        btnconfirmarRef.current.classList.add("desactivado");
      }
    }

    actualizarUrlWhatsapp(value, comentarios);
  }, [actualizarUrlWhatsapp, comentarios, pases]);

  const handlePersonasNoAsistenChange = useCallback((e) => {
    const value = e.target.value;
    setPersonasNoAsisten(value);
    actualizarUrlWhatsapp(selectedPases, comentarios);
  }, [actualizarUrlWhatsapp, selectedPases, comentarios]);

  const handleComentariosChange = useCallback((e) => {
    const value = e.target.value;
    setComentarios(value);
    actualizarUrlWhatsapp(selectedPases, value);
  }, [actualizarUrlWhatsapp, selectedPases]);

  const handleSwitchChange = useCallback((checked) => {
    console.log('handleSwitchChange ejecutado, checked:', checked);
    setAsistira(checked);
    setSelectedPases("0");
    setMostrarCampoNoAsisten(false);
    setPersonasNoAsisten("");
    
    if (checked) {
      console.log('Intentando ejecutar confetti...');
      try {
        shootConfetti();
        console.log('Confetti ejecutado');
      } catch (error) {
        console.error('Error ejecutando confetti:', error);
      }
    }

    if (!checked && btnconfirmarRef.current) {
      btnconfirmarRef.current.classList.remove("desactivado");
    }
  }, []);

  const actualizarBaseDatos = useCallback(async (checked) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/${encodeURIComponent(id)}.json`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          confirmado: checked,
          noAsiste: !checked,
          comentarios: comentarios.trim(),
          pases: checked ? parseInt(Math.round(selectedPases)) : 0,
          personasNoAsisten: personasNoAsisten.trim()
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Error en la solicitud: ${response.status} ${response.statusText}. ${errorText}`
        );
      }
    } catch (error) {
      setError(error.message);
      console.error("Error actualizando asistencia:", error);
    } finally {
      setIsLoading(false);
    }
  }, [id, comentarios, selectedPases, personasNoAsisten]);

  const handleConfirmar = useCallback(async (e) => {
    e.preventDefault();
    if (e.target.classList.contains('desactivado')) return;
    
    try {
      // Guardamos la URL de WhatsApp antes de cualquier operación
      const whatsappUrl = btnconfirmarRef.current?.href;
      
      // Actualizamos la base de datos
      await actualizarBaseDatos(asistira);
      
      // Si todo salió bien, abrimos WhatsApp en una nueva ventana
      if (whatsappUrl) {
        window.open(whatsappUrl, '_blank');
      }
    } catch (err) {
      console.error('Error al procesar la confirmación:', err);
    }
  }, [actualizarBaseDatos, asistira]);

  const renderPasesOptions = useMemo(() => {
    const options = [<option key="0" value="0">Selecciona el número de pases</option>];
    
    for (let i = 1; i <= pases; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    
    return options;
  }, [pases]);

  if (isLoading) {
    return <div className="loading">Cargando...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <>
      <div className="grid contenido">
        <div className={`${estilo.confirmacion} ${asistira ? estilo.asistira : estilo.noAsistira}`}>
          <div className={estilo.bandeja}>
            <svg viewBox="0 0 41 31" fill="none">
              <path
                d="M41 6.3152H22.55V10.4293H41V6.3152ZM41 22.7717H22.55V26.8859H41V22.7717ZM7.257 14.5435L0 7.26145L2.8905 4.36098L7.2365 8.72196L15.9285 0L18.819 2.90046L7.257 14.5435ZM7.257 31L0 23.718L2.8905 20.8175L7.2365 25.1785L15.9285 16.4565L18.819 19.357L7.257 31Z"
                fill="white"
              ></path>
            </svg>
            <h2>¿Contamos con tu presencia?</h2>
            <p>
              Por favor <b>confírmanos</b> tu asistencia{" "}
              <b>al menos {dias_antes} días antes del evento</b>, nos ayudarás
              mucho con la organización al hacerlo.
            </p>

            <form id={estilo["formulario"]} onSubmit={(e) => e.preventDefault()}>
                      <div className={estilo.conteCheck}>
                <p>{asistira ? "¡Sí asistiré! 😄" : "No podré asistir 😭"}</p>
                        <label className={estilo.switch}>
                          <input
                            type="checkbox"
                    checked={asistira}
                    onChange={(e) => handleSwitchChange(e.target.checked)}
                          />
                          <span className={estilo.slider}></span>
                        </label>
                      </div>

              {asistira ? (
                // Formulario para confirmar asistencia
                version !== "basic" && (
                  <>
                    <label htmlFor="pases">¿Cuántos pases usarán?</label>
                    <select 
                      name="pases" 
                      id="Confipases" 
                      required 
                      value={selectedPases}
                      onChange={handlePasesChange}
                    >
                      {renderPasesOptions}
                      </select>

                    {mostrarCampoNoAsisten && (
                      <>
                        <label htmlFor="personasNoAsisten">
                          ¿Nombre de las personas que no podrán acompañarnos?
                        </label>
                        <textarea
                          name="personasNoAsisten"
                          id="personasNoAsisten"
                          value={personasNoAsisten}
                          onChange={handlePersonasNoAsistenChange}
                          placeholder="Escribe aquí los nombres..."
                          maxLength={500}
                        ></textarea>
                    </>
                  )}

                    <label htmlFor="comentarios">Envíanos algún saludo (opcional):</label>
                    <textarea 
                      name="comentarios" 
                      id="comentarios" 
                      value={comentarios}
                      onChange={handleComentariosChange}
                      placeholder="Escribe aquí tu mensaje..."
                      maxLength={500}
                    ></textarea>
                    <a 
                      href="#" 
                      className="btn redondo desactivado" 
                      ref={btnconfirmarRef}
                      onClick={handleConfirmar}
                    >
                      Confirmar mi asistencia
                    </a>
                  </>
                )
              ) : (
                // Formulario para confirmar inasistencia
                <>
                  <label htmlFor="comentarios">¿Deseas dejar un mensaje? (opcional):</label>
                  <textarea 
                    name="comentarios" 
                    id="comentarios" 
                    value={comentarios}
                    onChange={handleComentariosChange}
                    placeholder="Escribe aquí tu mensaje..."
                    maxLength={500}
                  ></textarea>
                  <a 
                    href="#" 
                    className="btn redondo" 
                    ref={btnconfirmarRef}
                    onClick={handleConfirmar}
                  >
                    Confirmar que no podré asistir
                  </a>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}