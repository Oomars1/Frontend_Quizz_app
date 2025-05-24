export const questions = [
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
