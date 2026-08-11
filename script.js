const form = document.querySelector(".contact-form");
const note = document.querySelector(".form-note");

if (form && note) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get("name") || "there";
    note.textContent = `Thanks, ${name}. Memoirz will follow up about your care journey automation needs.`;
    form.reset();
  });
}
