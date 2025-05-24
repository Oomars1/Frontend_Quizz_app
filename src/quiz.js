import "./css/quiz.css";
import accesibilidadLogo from "./assets/accessibility.svg";

const questionsByCategory = {
  html: [
    {
      question: "¿Cuál es el elemento principal de un documento HTML?",
      options: ["html", "main", "head", "body"],
      answer: "html",
    },
    {
        question: "¿Cuál es el elemento principal de un documento HTML?",
      options: ["html", "main", "head", "body"],
      answer: "html",
    },
    {
        question: "¿Cuál es el elemento principal de un documento HTML?",
      options: ["html", "main", "head", "body"],
      answer: "html",
    },
    {
        question: "¿Cuál es el elemento principal de un documento HTML?",
      options: ["html", "main", "head", "body"],
      answer: "html",
    },
  ],
  css: [
    {
      question: "¿Qué propiedad se usa para cambiar el color del texto?",
      options: ["background-color", "text-color", "color", "font-color"],
      answer: "color",
    },
  ],
  javascript: [
    {
      question: "¿Cómo se declara una variable en JavaScript?",
      options: ["var", "let", "const", "todas las anteriores"],
      answer: "todas las anteriores",
    },
  ],
};

export function renderQuiz(app, category) {
  const questions = questionsByCategory[category];
  if (!questions) {
    app.innerHTML = "<p>No hay preguntas disponibles para esta categoría.</p>";
    return;
  }

  let current = 0;
  let score = 0;

  function renderQuestion() {
    const q = questions[current];
    document.body.classList.add("quiz-body");

    app.innerHTML = `
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

      <div class="quiz-card">
        <section>
          <h2>Pregunta ${current + 1} de ${questions.length}</h2>
          <p>${q.question}</p>
        </section>

        <section>
          <div class="options">
            ${q.options
              .map(
                (option) => `
                <button class="option-btn">${option}</button>
              `
              )
              .join("")}
          </div>
        </section>
      </div>
    `;

    // Asignar evento toggle tema
    const toggle = document.getElementById("toggle-theme");
    toggle.checked = document.body.classList.contains("light-theme");
    toggle.addEventListener("change", () => {
      document.body.classList.toggle("light-theme");
    });

    // Eventos botones opciones
    document.querySelectorAll(".option-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.textContent === q.answer) score++;
        current++;
        if (current < questions.length) {
          renderQuestion();
        } else {
          renderScore();
        }
      });
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