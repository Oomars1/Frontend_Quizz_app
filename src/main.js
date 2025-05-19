import "./css/style.css";
import javascriptLogo from "./assets/javascript.svg";
import cssLogo from "./assets/css.square.svg"
import htmlLogo from "./assets/html.svg"
import accesibilidadLogo from "./assets/accessibility.svg";


document.querySelector("#app").innerHTML = `
  <div class="grid-container">
    <section class="presentacion">
     <h1>Welcome to the <b>Frontend Quizz!</b></h1>
      <h4>Pick a subject to get started</h4>
    </section>
 
    <section class="buttonsquizz">
      <section class="quizzHtml">
        <img src="${htmlLogo}" alt="JavaScript" />
        <a><b>HTML</b></a>   
      </section>
      <section class="quizzJs">
        <img src="${javascriptLogo}" alt="JavaScript" />
        <a><b>Javascript</b></a> 
      </section>
      <section class="quizzCss">
        <img 
          src="${cssLogo}" 
          alt="JavaScript" 
          id="js-btn"
          style="cursor: pointer;" 
        /> <a><b>CSS</b></a> 
      </section>
      <section class="quizzAccesibilidad">
        <img 
          src="${accesibilidadLogo}" 
          alt="JavaScript" 
          id="js-btn"
          style="cursor: pointer;" 
        /> <a><b>Accessibility</b></a> 
      </section>
    </section>
    
  </div>
`;

document.querySelector(".quizzJs").addEventListener("click", () => {
  alert("¡Elegiste JavaScript!");
});

document.querySelector(".quizzCss").addEventListener("click", () => {
  alert("¡Elegiste css!");
});

document.querySelector(".quizzHtml").addEventListener("click", () => {
  alert("¡Elegiste html!");
});

document.querySelector(".quizzAccesibilidad").addEventListener("click", () => {
  alert("¡Elegiste accesibilidad!");
});

const toggle = document.getElementById("toggle-theme");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("light-theme");
});