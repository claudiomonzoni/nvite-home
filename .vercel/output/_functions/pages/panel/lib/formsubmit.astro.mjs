export { renderers } from '../../../renderers.mjs';

const formSubmit = (form) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const isLogout = form.action.includes("salir.json");
    try {
      const response = await fetch(form.action, {
        method: "POST",
        ...isLogout ? {} : {
          body: JSON.stringify(Object.fromEntries(formData))
        },
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error?.code || data.message || "Error desconocido");
      }
      if (isLogout) {
        window.location.href = "/panel/ingresar";
      } else {
        window.location.reload();
      }
    } catch (error) {
      console.error("Error:", error);
      alert(error instanceof Error ? error.message : "Error desconocido, por favor intenta de nuevo");
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  formSubmit
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
