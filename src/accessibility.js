import "./css/accessibility.css";
import accesibilidadLogo from "./assets/accessibility.svg";

// Preguntas del quiz de accesibilidad
const questions = [
  {
    question: "¿Contraste mínimo WCAG AA para texto normal?",
    options: [
      { letter: "A", text: "3:1", correct: false },
      { letter: "B", text: "4.5:1", correct: true },
      { letter: "C", text: "5:1", correct: false },
      { letter: "D", text: "7:1", correct: false },
    ],
  },
  {
    question: "¿Atributo para texto alternativo en imágenes?",
    options: [
      { letter: "A", text: "title", correct: false },
      { letter: "B", text: "alt", correct: true },
      { letter: "C", text: "caption", correct: false },
      { letter: "D", text: "desc", correct: false },
    ],
  },
  {
    question: "¿Orden correcto de encabezados HTML?",
    options: [
      { letter: "A", text: "h1, h3, h2", correct: false },
      { letter: "B", text: "h1, h2, h3", correct: true },
      { letter: "C", text: "h3, h2, h1", correct: false },
      { letter: "D", text: "Solo h1", correct: false },
    ],
  },
  {
    question: "¿Tamaño mínimo para botones táctiles?",
    options: [
      { letter: "A", text: "32px", correct: false },
      { letter: "B", text: "40px", correct: false },
      { letter: "C", text: "44px", correct: true },
      { letter: "D", text: "48px", correct: false },
    ],
  },
  {
    question: "¿Atributo para describir botones sin texto?",
    options: [
      { letter: "A", text: "title", correct: false },
      { letter: "B", text: "aria-label", correct: true },
      { letter: "C", text: "placeholder", correct: false },
      { letter: "D", text: "name", correct: false },
    ],
  },
  {
    question: "¿ARIA para anunciar cambios dinámicos?",
    options: [
      { letter: "A", text: "aria-hidden", correct: false },
      { letter: "B", text: "aria-live", correct: true },
      { letter: "C", text: "aria-update", correct: false },
      { letter: "D", text: "aria-change", correct: false },
    ],
  },
  {
    question: "¿Tecla principal para navegación web?",
    options: [
      { letter: "A", text: "Enter", correct: false },
      { letter: "B", text: "Tab", correct: true },
      { letter: "C", text: "Space", correct: false },
      { letter: "D", text: "Arrow", correct: false },
    ],
  },
  {
    question: "¿ARIA role para navegación principal?",
    options: [
      { letter: "A", text: "menu", correct: false },
      { letter: "B", text: "navigation", correct: true },
      { letter: "C", text: "banner", correct: false },
      { letter: "D", text: "main", correct: false },
    ],
  },
  {
    question: "¿Elemento semántico para contenido principal?",
    options: [
      { letter: "A", text: "&lt;div&gt;", correct: false },
      { letter: "B", text: "&lt;main&gt;", correct: true },
      { letter: "C", text: "&lt;section&gt;", correct: false },
      { letter: "D", text: "&lt;article&gt;", correct: false },
    ],
  },
  {
    question: "¿Límite de destellos por segundo para evitar convulsiones?",
    options: [
      { letter: "A", text: "2 veces", correct: false },
      { letter: "B", text: "3 veces", correct: true },
      { letter: "C", text: "4 veces", correct: false },
      { letter: "D", text: "5 veces", correct: false },
    ],
  },
];

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
          renderQuestion(app);
        } else {
          renderScore(app);
        }
      }, 1000);
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

function renderScore(app) {
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

renderQuestion(app);
