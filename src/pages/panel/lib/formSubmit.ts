export const formSubmit = (form: HTMLFormElement) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const formData = new FormData(form);
      const isLogout = form.action.includes('salir.json');
      
      try {
        const response = await fetch(form.action, {
          method: "POST",
          ...(isLogout ? {} : {
            body: JSON.stringify(Object.fromEntries(formData))
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error?.code || data.message || 'Error desconocido');
        }

        if (isLogout) {
          window.location.href = '/panel/ingresar';
        } else {
          window.location.reload();
        }
      } catch (error) {
        console.error('Error:', error);
        alert(error instanceof Error ? error.message : "Error desconocido, por favor intenta de nuevo");
      }
    });
  };