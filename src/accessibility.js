import "./css/accessibility.css";
import accesibilidadLogo from "./assets/accessibility.svg";
import { questions } from "./utils/questionsAcc";
import { renderScore } from "./components/renderScore";

let currentQuestion = 0;
let score = 0;
let answers = [];

export function renderAccessibility(app) {
  // Reiniciar variables cuando se inicia el quiz
  currentQuestion = 0;
  score = 0;
  answers = [];

  renderQuestion(app);
}

function renderQuestion(app) {
  const question = questions[currentQuestion];
  const progress = (currentQuestion / questions.length) * 100;

  app.innerHTML = `
  <div class="acc-wrapper">
      <header class="acc-header">
        <div class="acc-section-left">
          <img src="${accesibilidadLogo}" alt="Icono de accesibilidad" class="section-icon" />
          <h2 class="section-title">Accesibilidad</h2>
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
          <i>Pregunta ${currentQuestion + 1} de ${questions.length}</i>
          <h4 class="accAsk">${question.question}</h4>
          <input type="range" class="rangeAcc" value="${progress}" id="rangeAcc" readonly min="0" max="100"/>
        </section>
          
        <section class="acc-buttonsquizz">
          ${question.options
            .map(
              (option) => `
            <section class="quizzCss" data-correct="${option.correct}">
              <span class="accOptionLet">${option.letter}</span>
              <a><b class="accTxtOP">${option.text}</b></a>   
            </section>
          `
            )
            .join("")}
        </section>
      </div>
    </div>
  `;

  // Agregar event listeners a las opciones
  document.querySelectorAll(".quizzCss").forEach((option) => {
    option.addEventListener("click", () => {
      const isCorrect = option.dataset.correct === "true";

      // Guardar la respuesta
      answers.push({
        question: currentQuestion + 1,
        correct: isCorrect,
      });

      // Incrementar score si es correcta
      if (isCorrect) {
        score++;
      }

      // Mostrar feedback visual
      option.classList.add(isCorrect ? "correct" : "incorrect");

      // Deshabilitar todas las opciones
      document.querySelectorAll(".quizzCss").forEach((opt) => {
        opt.style.pointerEvents = "none";
      });

      // Avanzar a la siguiente pregunta después de un breve delay
      setTimeout(() => {
        currentQuestion++;

        if (currentQuestion < questions.length) {
          renderQuestion(app, score, questions);
        } else {
          renderScore(app, score, questions);
        }
      }, 500);
    });
  });

  const rangeElement = document.getElementById("rangeAcc");
  if (rangeElement) {
    const progressColor = "#d000ff";
    const backgroundTrack = "#2c3e50";
    rangeElement.style.background = `linear-gradient(to right, ${progressColor} ${progress}%, ${backgroundTrack} ${progress}%)`;
  }

  // Manejar el toggle del tema si existe
  const themeToggle = document.getElementById("toggle-theme");
  if (themeToggle) {
    themeToggle.addEventListener("change", (e) => {
      document.body.classList.toggle("dark-theme", e.target.checked);
    });
  }
}

renderQuestion(app);
