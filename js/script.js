// Interações do site GreenBox (HTML + CSS + JavaScript puro)

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menu");
    });
  });

  document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !menuButton.contains(event.target)) {
      navLinks.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menu");
    }
  });
}

// Ano automático no rodapé.
const yearElement = document.querySelector("#current-year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

// GitHub Pages é hospedagem estática. Sem um serviço externo, o formulário
// não grava dados em banco: ele prepara uma mensagem no aplicativo de e-mail.
const contactForm = document.querySelector("#contact-form");
const feedback = document.querySelector("#form-feedback");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      if (feedback) feedback.textContent = "Preencha todos os campos antes de continuar.";
      return;
    }

    // Troque o endereço abaixo pelo e-mail oficial do projeto.
    const destinationEmail = "SEU_EMAIL_AQUI";
    if (destinationEmail === "SEU_EMAIL_AQUI") {
      if (feedback) {
        feedback.textContent = "O formulário está visualmente pronto. Para receber mensagens, configure o e-mail de destino no arquivo js/script.js.";
      }
      return;
    }

    const subject = encodeURIComponent(`Contato GreenBox — ${name}`);
    const body = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`);
    window.location.href = `mailto:${destinationEmail}?subject=${subject}&body=${body}`;
  });
}
