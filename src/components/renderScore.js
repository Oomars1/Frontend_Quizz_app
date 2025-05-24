export function renderScore(app, score, questions) {
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
