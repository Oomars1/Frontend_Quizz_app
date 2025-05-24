import "./css/quiz.css";
import javascriptLogo from "./assets/javascript.svg";
import cssLogo from "./assets/css.square.svg";
import htmlLogo from "./assets/html.svg";
import accesibilidadLogo from "./assets/accessibility.svg";
import { questionsByCategory } from "./utils/questionsByCategory.js";

export function renderQuiz(app, category) {
  function getlogo(category) {
    switch (category) {
      case "html":
        return { title: "HTML", icon: htmlLogo };
      case "css":
        return { title: "Css", icon: cssLogo };

      case "javascript":
        return { title: "Javascript", icon: javascriptLogo };

      case "accessibility":
        return { title: "Accessibility", icon: accesibilidadLogo };
    }
  }

  const questions = questionsByCategory[category];
  if (!questions) {
    app.innerHTML = "<p>No hay preguntas disponibles para esta categoría.</p>";
    return;
  }

  let current = 0;
  let score = 0;

  function renderQuestion() {
    let selected = null;
    const q = questions[current];

    let progress = (current / questions.length) * 100;

    document.body.classList.add("quiz-body");

    app.innerHTML = `
    <div class="acc-wrapper">
      <header class="acc-header">
        <div class="acc-section-left">
          <img src="${getlogo(category).icon}" alt="img" class="section-icon" />
          <h2 class="section-title">${getlogo(category).title}</h2>
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
          <i>Pregunta ${current + 1} de ${questions.length}</i>
          <h4 class="accAsk">${q.question}</h4>
          <input type="range" class="rangeAcc" value="${progress}" id="rangeAcc" readonly min="0" max="100"/>
        </section>

        <section class="acc-buttonsquizz">
          ${q.options
            .map(
              (option, i) =>
                `
              <section class="quizzOption" data-index="${i}" data-correct="${option.correct}">
                <span class="accOptionLet">${q.letter[i]}</span>
                <a><b class="accTxtOP">${option}</b></a>   
              </section>
              `
            )
            .join("")}
        </section>
      </div>
    </div>`;

    // Range dinamico
    const rangeElement = document.getElementById("rangeAcc");
    if (rangeElement) {
      const progressColor = "#d000ff";
      const backgroundTrack = "#2c3e50";
      rangeElement.style.background = `linear-gradient(to right, ${progressColor} ${progress}%, ${backgroundTrack} ${progress}%)`;
    }

    document.querySelectorAll(".quizzOption").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        selected = parseInt(e.target.dataset.index);
      });
    });

    // Eventos botones opciones
    document.querySelectorAll(".quizzOption").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (selected === q.answer) score++;
        current++;
        if (current < questions.length) {
          renderQuestion();
        } else {
          renderScore();
        }
      });
    });

    // Asignar evento toggle tema
    const toggle = document.getElementById("toggle-theme");
    toggle.checked = document.body.classList.contains("light-theme");
    toggle.addEventListener("change", () => {
      document.body.classList.toggle("light-theme");
    });
  }

  function renderScore() {
    app.innerHTML = `
      <div class="result">
        <h2>¡Cuestionario terminado!</h2>
        <p>Obtuviste ${score} de ${questions.length} correctas.</p>
        <button id="go-home">Volver al inicio</button>
      </div>
    `;
    document.getElementById("go-home").addEventListener("click", () => {
      document.dispatchEvent(
        new CustomEvent("navigate", { detail: { page: "home" } })
      );
      document.body.classList.remove("quiz-body");
    });
  }

  renderQuestion();
}
