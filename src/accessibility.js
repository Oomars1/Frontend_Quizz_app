import "./css/accessibility.css";
import accesibilidadLogo from "./assets/accessibility.svg";

export function renderAccessibility(app) {
  app.innerHTML = `
  <div class="acc-wrapper">
    <header class="acc-header">
      <div class="acc-section-left">
        <img src="${accesibilidadLogo}" alt="img" class="section-icon" />
        <h2 class="section-title">Accessibility</h2>
      </div>

      <div class="acc-theme-toggle">
        <span>🌜</span>
        <label class="switch">
          <input type="checkbox" id="toggle-theme" />
          <span class="slider"></span>
        </label>
        <span>🌞</span>
      </div>
    </header>

    <div class="acc-grid-container">
      <section class="acc-presentacion">
        <i>Question 6 of 10</i>
        <h2 class="accAsk">Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?</h2>
        <input type="range" class="rangeAcc" value="60" id="rangeAcc" readonly/>
      </section>
        
      <section class="acc-buttonsquizz">
        <section class="quizzHtml">
          <span class="accOptionLet">A</span>
          <a><b class="accTxtOP">4.5 : 1</b></a>   
        </section>
        <section class="quizzJs">
          <span class="accOptionLet">B</span>
          <a><b class="accTxtOP">3 : 1</b></a> 
        </section>
        <section class="quizzCss">
          <span class="accOptionLet">C</span>
          <a><b class="accTxtOP">2.5 : 1</b></a> 
        </section>
        <section class="quizzCss">
          <span class="accOptionLet">D</span>
          <a><b class="accTxtOP">5 : 1</b></a> 
        </section>
        <button class="accNextQuestion">Siguiente</button> 
      </section>
    </div>
  </div>
  `;


  document.querySelector(".accNextQuestion").addEventListener("click", () => {
    document.dispatchEvent(
      new CustomEvent("navigate", { detail: { page: "home" } })
    );
  });
}

