export const formSubmit = (form: HTMLFormElement) => {
    const errorMessage = form.querySelector<HTMLElement>("[data-form-error]");
    const submitButton = form.querySelector<HTMLButtonElement>("button[type='submit'], button:not([type])");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      form.querySelectorAll<HTMLInputElement>("input").forEach((input) => {
        input.removeAttribute("aria-invalid");
      });
      if (errorMessage) {
        errorMessage.textContent = "";
        errorMessage.hidden = true;
      }
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.setAttribute("aria-busy", "true");
      }

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
          const field = data.field && form.elements.namedItem(data.field);
          if (field instanceof HTMLInputElement) {
            field.setAttribute("aria-invalid", "true");
            field.focus();
          }
          throw new Error(data.error || data.message || 'No pudimos iniciar sesión. Inténtalo de nuevo.');
        }

        if (isLogout) {
          window.location.href = '/panel/ingresar';
        } else {
          window.location.reload();
        }
      } catch (error) {
        console.error('Error:', error);
        if (errorMessage) {
          errorMessage.textContent = error instanceof Error
            ? error.message
            : "No pudimos iniciar sesión. Inténtalo de nuevo.";
          errorMessage.hidden = false;
        } else {
          alert(error instanceof Error ? error.message : "No pudimos iniciar sesión. Inténtalo de nuevo.");
        }
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.removeAttribute("aria-busy");
        }
      }
    });
  };