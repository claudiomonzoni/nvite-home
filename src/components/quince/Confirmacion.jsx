import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import stylesQuince from "../../estilos/temas/base/quince/confirmacion.module.scss";
import { shootConfetti } from "../../js/confetti";

export default function Confirmacion({ whatsapp, dias_antes, version, tipo = 'bodas' }) {
  // Seleccionar el objeto de estilos correcto según el tipo
  const styles = tipo === 'quince' ? stylesQuince : stylesBodas;
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
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

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
          `${window.location.origin}/api/getInvitado.json?id=${encodeURIComponent(
            idParam
          )}&uid=${encodeURIComponent(uidParam)}`
        );

        if (!response.ok) {
          throw new Error(`Error del servidor: ${response.status}`);
        }

        const json = await response.json();

        if (!json || !json[0]) {
          throw new Error("No se encontró la información del invitado");
        }

        setInvitado(json[0].nombre);
        setPases(Math.trunc(json[0].pases));
        setId(json[0].id);
        setAsistira(json[0].confirmado);
      } catch (error) {
        setError("La dirección de esta invitación es incorrecta y no podemos mostrar el formulario de confirmación, Por favor, inténtalo de nuevo con la dirección correcta de su invitación.");
        console.error("Error fetching invitado:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInvitado();
  }, []);

  const actualizarUrlWhatsapp = useCallback(
    (pasesValue, comentariosValue) => {
      if (!btnconfirmarRef.current) return;

      const pasesSeleccionados = pasesValue !== "0" ? pasesValue : "0";
      const personasNoAsistenMensaje =
        mostrarCampoNoAsisten && personasNoAsisten.trim()
          ? `%0aPersonas que no podrán asistir: ${encodeURIComponent(
              personasNoAsisten
            )}`
          : "";

      const mensaje = asistira
        ? `Hola,%20les%20confirmo%20la%20asistencia%20a%20los%20XV%20años:%20${encodeURIComponent(
            invitado
          )},%20y%20usaremos%20${encodeURIComponent(pasesSeleccionados)}%20pase(s).${personasNoAsistenMensaje}%0aComentarios:%20${encodeURIComponent(
            comentariosValue || "Sin comentarios"
          )}.`
        : `Hola,%20lamento%20informarles%20que%20no%20podré%20asistir%20a%20los%20XV%20años:%20${encodeURIComponent(
            invitado
          )}.%0aComentarios:%20${encodeURIComponent(
            comentariosValue || "Sin comentarios"
          )}.`;

      btnconfirmarRef.current.href = `${whatsappBase}${encodeURIComponent(whatsapp)}&text=${mensaje}`;
    },
    [
      whatsappBase,
      whatsapp,
      invitado,
      asistira,
      mostrarCampoNoAsisten,
      personasNoAsisten,
    ]
  );

  const handlePasesChange = useCallback(
    (e) => {
      const value = parseInt(e.target.value, 10);
      setSelectedPases(Math.trunc(value));

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
          btnconfirmarRef.current.classList.remove(`${styles.desactivado}`);
        } else {
          btnconfirmarRef.current.classList.add(`${styles.desactivado}`);
        }
      }

      actualizarUrlWhatsapp(value, comentarios);
    },
    [actualizarUrlWhatsapp, comentarios, pases]
  );

  const handlePersonasNoAsistenChange = useCallback(
    (e) => {
      const value = e.target.value;
      setPersonasNoAsisten(value);
      actualizarUrlWhatsapp(selectedPases, comentarios);
    },
    [actualizarUrlWhatsapp, selectedPases, comentarios]
  );

  const handleComentariosChange = useCallback(
    (e) => {
      const value = e.target.value;
      setComentarios(value);
      actualizarUrlWhatsapp(selectedPases, value);
    },
    [actualizarUrlWhatsapp, selectedPases]
  );

  const handleSwitchChange = useCallback((checked) => {
    setAsistira(checked);
    setSelectedPases(0);
    setMostrarCampoNoAsisten(false);
    setPersonasNoAsisten("");
    
    if (checked && typeof window !== 'undefined') {
      try {
        shootConfetti();
      } catch (error) {
        console.error('Error ejecutando confetti:', error);
      }
    }

    if (!checked && btnconfirmarRef.current) {
      btnconfirmarRef.current.classList.remove(`${styles.desactivado}`);
    }
  }, []);

  const actualizarBaseDatos = useCallback(
    async (checked) => {
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
            pases: checked ? Math.trunc(selectedPases) : 0,
            comentarios: comentarios.trim(),
            personasNoAsisten: personasNoAsisten.trim(),
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
    },
    [id, comentarios, selectedPases, personasNoAsisten]
  );

  const handleConfirmar = useCallback(
    async (e) => {
      e.preventDefault();
      if (e.target.classList.contains(`${styles.desactivado}`)) return;

      try {
        // Guardamos la URL de WhatsApp antes de cualquier operación
        const whatsappUrl = btnconfirmarRef.current?.href;

        // Actualizamos la base de datos
        await actualizarBaseDatos(asistira);

        // Si el usuario dejó un mensaje o nombres de personas que no asisten, abrimos WhatsApp
        if (comentarios.trim() !== "" || personasNoAsisten.trim() !== "") {
          if (whatsappUrl) {
            window.open(whatsappUrl, "_blank");
          }
        } else {
          // Si no hay mensaje ni nombres, mostramos agradecimiento según el caso
          setModalMessage(
            asistira 
              ? "¡Muchas gracias por confirmar su asistencia! Nos llena de alegría saber que podremos contar con su presencia en este día tan especial."
              : "Agradecemos mucho su pronta respuesta. Lamentamos que no pueda acompañarnos en esta ocasión tan especial."
          );
          setModalVisible(true);
        }
      } catch (err) {
        console.error("Error al procesar la confirmación:", err);
      }
    },
    [actualizarBaseDatos, asistira, comentarios, personasNoAsisten]
  );

  const renderPasesOptions = useMemo(() => {
    const options = [
      <option key="0" value="0">
        Selecciona el número de pases
      </option>,
    ];

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
    return <div className={styles.error}>Error: {error}</div>;
  }

  // Agregar verificación para invitados que ya confirmaron no asistencia
  if (pases === 0 && !asistira) {
    return (
      <div className="grid contenido">
        <div className={styles.confirmacion}>
          <div className={styles.bandeja}>
            <p className={styles.mensajeNoAsistencia}>
              Estimado invitado, agradecemos que nos haya notificado su imposibilidad de asistir. Si sus planes cambian, por favor no dude en contactar directamente con los anfitriones.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="grid contenido" id="Confirmacion-comun">
        <div
          className={`${styles.confirmacion} ${
            asistira ? styles.asistira : styles.noAsistira
          }`}
        >
          <div className={styles.bandeja}>
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

            <form
              id={styles["formulario"]}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className={styles.conteCheck}>
                <p>{asistira ? "¡Confirmo asistencia! 😄" : "Lo lamento, no podré asistir 😔"}</p>
               
                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    checked={asistira}
                    onChange={(e) => handleSwitchChange(e.target.checked)}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>

            <p id={styles["mueve"]}>
              Mueve el <span>switch a la derecha </span>para confirmar tu
              asistencia y despues completa el formulario de confirmación.
            </p>
              {asistira ? (
                // Formulario para confirmar asistencia
                <>
                  <label htmlFor="pases">¿Cuántos pases usarán?</label>
                  {/* <small>Selecciona el número de pases para activar el botón de confirmación</small> */}
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
                        ¿Nombre de las personas que no podrán acompañarnos? (opcional)
                      </label>
                      <textarea
                        name="personasNoAsisten"
                        id="personasNoAsisten"
                        value={personasNoAsisten}
                        onChange={handlePersonasNoAsistenChange}
                        placeholder="Escribe aquí los nombres..."
                        maxLength={500}
                      ></textarea>
                      <small>
                        Si cambian de opinión y pueden acompañarnos al evento,
                        no duden en{" "}
                        <u>contactarnos directamente {dias_antes} días antes</u>{" "}
                        del evento.
                      </small>
                    </>
                  )}

                  <label htmlFor="comentarios">
                    Envíanos algún saludo (opcional):
                  </label>
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
                    className={`${styles.btnConfirmar} ${styles.desactivado}`}
                    ref={btnconfirmarRef}
                    onClick={handleConfirmar}
                  >
                    Confirmar mi asistencia
                    {/* <img
                      src="/whatsapp.png"
                      alt="confirmar whatsapp"
                    /> */}
                  </a>
                </>
              ) : (
                // Formulario para confirmar inasistencia
                <>
                  <label htmlFor="comentarios">
                    ¿Deseas dejar un mensaje? (opcional):
                  </label>
                  <textarea
                    name="comentarios"
                    id="comentarios"
                    value={comentarios}
                    onChange={handleComentariosChange}
                    placeholder="Escribe aquí tu mensaje..."
                    maxLength={500}
                  ></textarea>
                  <small>
                    <span>IMPORTANTE:</span> En caso de que si puedan
                    acompañarnos, les pedimos amablemente que nos{" "}
                    <span>
                      confirmen directamente al menos {dias_antes} días antes
                    </span>{" "}
                    del evento.
                  </small>
                  <a
                    href="#"
                    className={styles.btnConfirmar}
                    ref={btnconfirmarRef}
                    onClick={handleConfirmar}
                  >
                    <img
                      src="/whatsapp.png"
                      alt="confirmar whatsapp"
                    />{" "}
                    No podré asistir
                  </a>
                </>
              )}
            </form>
          </div>
        </div>
      </div>

      {modalVisible && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p>{modalMessage}</p>
            <button onClick={() => setModalVisible(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
}
