const quizForm = document.getElementById("quiz-form");
const resultsDiv = document.getElementById("results");

function verificarRespuesta(pregunta, respuestaCorrecta, resultDivId) {
  const selectedAnswer = quizForm.elements[pregunta].value;
  const isCorrect = selectedAnswer === respuestaCorrecta;

  const resultMessage = isCorrect
    ? "¡Respuesta correcta!"
    : "Respuesta incorrecta";

  const resultDiv = document.getElementById(resultDivId);
  resultDiv.textContent = resultMessage;
}
