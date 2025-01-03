export { renderers } from '../../../renderers.mjs';

const formSubmit = (form) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData))
      });
      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error.code);
      }
      form.reset();
      window.location.reload();
    } catch (error) {
      if (error instanceof Error) {
        return alert(error.message);
      }
      return alert("Error desconocido, por favor intenta de nuevo");
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  formSubmit
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
