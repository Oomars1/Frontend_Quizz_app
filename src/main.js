import "./css/style.css";
import javascriptLogo from "./assets/javascript.svg";
import cssLogo from "./assets/css.square.svg";
import htmlLogo from "./assets/html.svg";
import accesibilidadLogo from "./assets/accessibility.svg";
import { renderAccessibility } from "./accessibility.js";
import { updateSectionHeader } from "./updateHeader.js";
import { renderQuiz } from "./quiz.js";

const app = document.querySelector("#app");

export function renderHome(app) {
  document.body.className = "";

  app.innerHTML = `
  <div class="grid-container">

    <div class="theme-toggle">
      <div class="container-toggle">
        <span>🌜</span>
        <label class="switch">
          <input type="checkbox" id="toggle-theme" />
          <span class="slider"></span>
        </label>
        <span>🌞</span>
      </div>
    </div>

    <section class="presentacion">
      <h1>Welcome to the <b>Frontend Quizz!</b></h1>
      <h4>Pick a subject to get started</h4>
    </section>

    <section class="buttonsquizz">
      <section class="quizzHtml">
        <img src="${htmlLogo}" alt="HTML" />
        <a><b>HTML</b></a>   
      </section>
      <section class="quizzJs">
        <img src="${javascriptLogo}" alt="JavaScript" />
        <a><b>Javascript</b></a> 
      </section>
      <section class="quizzCss">
        <img src="${cssLogo}" alt="CSS" />
        <a><b>CSS</b></a> 
      </section>
      <section class="quizzAccesibilidad">
        <img src="${accesibilidadLogo}" alt="Accessibility" />
        <a><b>Accessibility</b></a> 
      </section>
    </section>
  </div>
`


  addHomeEventListeners();

  // Vuelve a asignar evento toggle tema en home
  const toggle = document.getElementById("toggle-theme");
  toggle.checked = document.body.classList.contains("light-theme");
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("light-theme");
  });
}

// Función para agregar los eventos de los botones del Home
function addHomeEventListeners() {
  document.querySelector(".quizzJs").addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("navigate", { detail: { page: "javascript" } }));
  });

  document.querySelector(".quizzCss").addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("navigate", { detail: { page: "css" } }));
  });

  document.querySelector(".quizzHtml").addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("navigate", { detail: { page: "html" } }));
  });

  document.querySelector(".quizzAccesibilidad").addEventListener("click", () => {
    document.dispatchEvent(
      new CustomEvent("navigate", { detail: { page: "accessibility" } })
    );
  });
}

// Renderizamos Home por primera vez
renderHome(app);

// Toggle de tema
const toggle = document.getElementById("toggle-theme");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("light-theme");
});

// Navegación entre secciones
document.addEventListener("navigate", (e) => {
  const page = e.detail.page;

  switch (page) {
    case "html":
    case "css":
    case "javascript":
      renderQuiz(app, page); // ← Aquí se renderiza el quiz según el tema
      break;
    case "accessibility":
      renderAccessibility(app);
      updateSectionHeader({
        title: "Accessibility",
        icon: "./src/assets/accessibility.svg"
      });
      break;
    case "home":
    default:
      renderHome(app);
      break;
  }
});
