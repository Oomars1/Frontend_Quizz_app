import "./css/style.css";
import javascriptLogo from "./assets/javascript.svg";
import cssLogo from "./assets/css.square.svg";
import htmlLogo from "./assets/html.svg";
import accesibilidadLogo from "./assets/accessibility.svg";
import { renderAccessibility } from "./accessibility.js";
import { updateSectionHeader } from "./updateHeader.js";

const app = document.querySelector("#app");

function renderHome(app) {
  app.innerHTML = `
    <div class="grid-container">
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
}

renderHome(app);

document.querySelector(".quizzJs").addEventListener("click", () => {
  alert("¡Elegiste JavaScript!");
});

document.querySelector(".quizzCss").addEventListener("click", () => {
  alert("¡Elegiste CSS!");
});

document.querySelector(".quizzHtml").addEventListener("click", () => {
  alert("¡Elegiste HTML!");
});

document.querySelector(".quizzAccesibilidad").addEventListener("click", () => {
  document.dispatchEvent(
    new CustomEvent("navigate", { detail: { page: "accessibility" } })
  );
});

const toggle = document.getElementById("toggle-theme");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("light-theme");
});

document.addEventListener("navigate", (e) => {
  const page = e.detail.page;
  const containerSection = document.querySelector(".container-section");

  switch (page) {
    case "accessibility":
      renderAccessibility(app);
      updateSectionHeader({
        title: "Accessibility",
        icon: "./src/assets/accessibility.svg",
      });
      break;
    default:
      renderHome(app);
      containerSection.style.display = "none";
      break;
  }
});
