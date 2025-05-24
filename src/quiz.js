import "./css/quiz.css";
import javascriptLogo from "./assets/javascript.svg";
import cssLogo from "./assets/css.square.svg";
import htmlLogo from "./assets/html.svg";
import accesibilidadLogo from "./assets/accessibility.svg";


const questionsByCategory = {
html: [
  {
    question: "¿Qué etiqueta define una tabla?",
    options: ["&lt;table&gt;", "&lt;tab&gt;", "&lt;tb&gt;"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta define una lista desordenada?",
    options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;li&gt;"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta se usa para insertar una imagen?",
    options: ["&lt;image&gt;", "&lt;img&gt;", "&lt;src&gt;"],
    answer: 1
  },
  {
    question: "¿Qué atributo define un texto alternativo en una imagen?",
    options: ["alt", "title", "src"],
    answer: 0
  },
  {
    question: "¿Cómo se define un comentario en HTML?",
    options: ["// comentario", "/* comentario */", "&lt;!-- comentario --&gt;"],
    answer: 2
  },
  {
    question: "¿Qué etiqueta representa una división genérica?",
    options: ["&lt;section&gt;", "&lt;div&gt;", "&lt;span&gt;"],
    answer: 1
  },
  {
    question: "¿Qué significa HTML?",
    options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta se usa para crear un enlace?",
    options: ["&lt;link&gt;", "&lt;a&gt;", "&lt;href&gt;"],
    answer: 1
  },
  {
    question: "¿Cuál es el atributo correcto para una imagen?",
    options: ["src", "href", "link"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta define una lista ordenada?",
    options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;li&gt;"],
    answer: 1
  }
],
css: [
  {
    question: "¿Qué propiedad se usa para cambiar el color del texto?",
    options: ["background-color", "text-color", "color", "font-color"],
    answer: 2
  },
  {
    question: "¿Cuál es la propiedad para cambiar el tamaño de la fuente?",
    options: ["font-size", "text-size", "font-style", "text-style"],
    answer: 0
  },
  {
    question: "¿Cómo se aplica un margen externo en CSS?",
    options: ["padding", "border", "margin", "spacing"],
    answer: 2
  },
  {
    question: "¿Qué propiedad controla el color de fondo?",
    options: ["background-color", "color", "bg-color", "background"],
    answer: 0
  },
  {
    question: "¿Cuál es la propiedad para alinear texto al centro?",
    options: ["text-align", "align-text", "text-center", "align"],
    answer: 0
  },
  {
    question: "¿Qué propiedad cambia la fuente de un texto?",
    options: ["font-family", "font-style", "font-weight", "text-font"],
    answer: 0
  },
  {
    question: "¿Cómo se hace un borde sólido de 2 píxeles?",
    options: ["border: 2px solid;", "border-style: solid 2px;", "border-width: 2px solid;", "border: solid 2px;"],
    answer: 0
  },
  {
    question: "¿Qué propiedad se usa para ocultar un elemento?",
    options: ["visibility: hidden;", "display: none;", "opacity: 0;", "hidden: true;"],
    answer: 1
  },
  {
    question: "¿Cómo se define un color en formato hexadecimal?",
    options: ["color: #FF0000;", "color: rgb(255,0,0);", "color: red;", "color: hsl(0, 100%, 50%);"],
    answer: 0
  },
  {
    question: "¿Qué propiedad controla el espacio interno entre contenido y borde?",
    options: ["margin", "border", "padding", "spacing"],
    answer: 2
  }
],
  javascript: [
  {
    question: "¿Cómo se declara una constante en JavaScript?",
    options: ["var", "let", "const", "todas las anteriores"],
    answer: 2,
  },
  {
    question: "¿Cuál de estos tipos de datos no es primitivo en JavaScript?",
    options: ["string", "boolean", "object", "number"],
    answer: 2,
  },
  {
    question: "¿Qué método se usa para imprimir algo en la consola?",
    options: ["print()", "echo()", "console.log()", "log.console()"],
    answer: 2,
  },
  {
    question: "¿Qué palabra clave se usa para definir una función?",
    options: ["func", "function", "define", "method"],
    answer: 1,
  },
  {
    question: "¿Qué operador se usa para comparar valor y tipo?",
    options: ["==", "!=", "===", "="],
    answer: 2,
  },
  {
    question: "¿Cuál es el resultado de typeof null en JavaScript?",
    options: ["null", "undefined", "object", "boolean"],
    answer: 2,
  },
  {
    question: "¿Qué método convierte un string en número?",
    options: ["Number()", "parseInt()", "parseFloat()", "todas las anteriores"],
    answer: 3,
  },
  {
    question: "¿Qué estructura se usa para repetir un bloque de código mientras se cumple una condición?",
    options: ["if", "while", "switch", "function"],
    answer: 1,
  },
  {
    question: "¿Qué significa NaN?",
    options: ["No es un número", "Nuevo arreglo de números", "Número absoluto nulo", "Número aleatorio negativo"],
    answer: 0,
  },
  {
    question: "¿Qué método se usa para recorrer un arreglo?",
    options: ["map()", "forEach()", "filter()", "todas las anteriores"],
    answer: 3,
  }
],accessibility: [
  {
    question: "¿Qué atributo proporciona una descripción de una imagen para los lectores de pantalla?",
    options: ["alt", "src", "title", "aria-label"],
    answer: 0,
  },
  {
    question: "¿Qué etiqueta HTML define la estructura principal del contenido de una página?",
    options: ["&lt;main&gt;", "&lt;section&gt;", "&lt;article&gt;", "&lt;body&gt;"],
    answer: 0,
  },
  {
    question: "¿Qué atributo ARIA se usa para etiquetar un elemento?",
    options: ["aria-label", "aria-hidden", "aria-role", "aria-describedby"],
    answer: 0,
  },
  {
    question: "¿Qué elemento HTML se recomienda para agrupar contenido de navegación?",
    options: ["&lt;menu&gt;", "&lt;nav&gt;", "&lt;aside&gt;", "&lt;section&gt;"],
    answer: 1,
  },
  {
    question: "¿Qué propiedad CSS afecta el orden de tabulación?",
    options: ["z-index", "tab-index", "outline", "tabindex"],
    answer: 3,
  },
  {
    question: "¿Qué herramienta ayuda a verificar problemas de accesibilidad en una web?",
    options: ["Lighthouse", "Web Vitals", "React DevTools", "Google Search Console"],
    answer: 0,
  },
  {
    question: "¿Qué significa WCAG?",
    options: [
      "Web Content Accessibility Guidelines",
      "World Coding Accessibility Group",
      "Web Code and Accessibility Guide",
      "World Class Accessible Guidelines"
    ],
    answer: 0,
  },
  {
    question: "¿Cuál es el propósito del atributo `role`?",
    options: [
      "Cambiar el estilo de un elemento",
      "Dar semántica a elementos no semánticos",
      "Validar formularios",
      "Modificar accesos directos"
    ],
    answer: 1,
  },
  {
    question: "¿Qué elemento se debe usar para crear subtítulos en un video?",
    options: ["&lt;track&gt;", "&lt;caption&gt;", "&lt;subtitle&gt;", "&lt;legend&gt;"],
    answer: 0,
  },
  {
    question: "¿Qué atributo ARIA se usa para ocultar un elemento a los lectores de pantalla?",
    options: ["aria-disabled", "aria-hidden", "aria-invisible", "aria-hide"],
    answer: 1,
  }
]
};

export function renderQuiz(app, category) {

  function getlogo(category){
    switch (category){
      case  "html":
        return {title:"HTML",icon: htmlLogo};
      case  "css":
        return {title:"Css",icon: cssLogo};

      case  "javascript":
        return {title:"Javascript",icon: javascriptLogo};

      case  "accessibility":
        return {title:"Accessibility",icon: accesibilidadLogo};
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
    document.body.classList.add("quiz-body");


    app.innerHTML = `
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

      <div class="quiz-card">
        <section>
          <h2>Pregunta ${current + 1} de ${questions.length}</h2>
          <p>${q.question}</p>
        </section>

        <section>
          <div class="options">
            ${q.options.map((option,i) => `<button class="option-btn" data-index="${i}">${option}</button>`).join("")}
          </div>
        </section>
      </div>
    `;

    document.querySelectorAll('.option-btn').forEach(btn =>{
      btn.addEventListener('click',(e)=>{
        selected=parseInt(e.target.dataset.index);
      })
    })

    // Eventos botones opciones
    document.querySelectorAll(".option-btn").forEach((btn) => {
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