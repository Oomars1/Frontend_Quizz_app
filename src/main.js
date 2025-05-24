import "./css/style.css";
import javascriptLogo from "./assets/javascript.svg";
import cssLogo from "./assets/css.square.svg";
import htmlLogo from "./assets/html.svg";
import accesibilidadLogo from "./assets/accessibility.svg";
import { renderQuiz } from "./quiz.js";

const app = document.querySelector("#app");

// Función para aplicar tema guardado o por defecto
// Función para aplicar tema guardado o por defecto
function applyThemeFromStorage() {
  const savedTheme = localStorage.getItem("theme"); // "light" o "dark" o null
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
  } else {
    document.body.classList.remove("light-theme");
  }
}

export function renderHome(app) {
  // No borrar la clase del body aquí porque puede borrar el tema activo
  // document.body.className = ""; // <-- elimina esta línea para mantener el tema activo

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
`;

  addHomeEventListeners();

  // Asignar el estado actual del toggle según el tema activo
  const toggle = document.getElementById("toggle-theme");
  toggle.checked = document.body.classList.contains("light-theme");

  // Evento toggle que además guarda la preferencia en localStorage
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  });
}

function addHomeEventListeners() {
  document.querySelector(".quizzJs").addEventListener("click", () => {
    document.dispatchEvent(
      new CustomEvent("navigate", { detail: { page: "javascript" } })
    );
  });

  document.querySelector(".quizzCss").addEventListener("click", () => {
    document.dispatchEvent(
      new CustomEvent("navigate", { detail: { page: "css" } })
    );
  });

  document.querySelector(".quizzHtml").addEventListener("click", () => {
    document.dispatchEvent(
      new CustomEvent("navigate", { detail: { page: "html" } })
    );
  });

  document
    .querySelector(".quizzAccesibilidad")
    .addEventListener("click", () => {
      document.dispatchEvent(
        new CustomEvent("navigate", { detail: { page: "accessibility" } })
      );
    });
}

// Al iniciar la app, aplicar tema guardado
applyThemeFromStorage();

// Renderizar home inicialmente
renderHome(app);

// Nota: ya no necesitas el listener global aquí porque cada renderHome vuelve a asignar el toggle
// Eliminar estas líneas para evitar duplicados:
// const toggle = document.getElementById("toggle-theme");
// toggle.addEventListener("change", () => {
//   document.body.classList.toggle("light-theme");
// });

document.addEventListener("navigate", (e) => {
  const page = e.detail.page;

  switch (page) {
    case "html":
    case "css":
    case "javascript":
    case "accessibility":
      renderQuiz(app, page);
      break;
    // case "accessibility":
    //   renderAccessibility(app);
    //   updateSectionHeader({
    //     title: "Accessibility",
    //     icon: "./src/assets/accessibility.svg",
    //   });
    //   break;
    case "home":
    default:
      renderHome(app);
      break;
  }
});
