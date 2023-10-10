//Funcion para el calculo de factor angulo
function calcularFactorAngulo() {
  //Obtenemos los valores ingresados
  const anguloGrados = parseFloat(document.getElementById("angulo").value);

  // Validar los valores ingresados
  if (isNaN(anguloGrados)) {
    mostrarError(
      anguloError,
      "Por favor, ingrese un valor numérico válido para el ángulo."
    );
    return;
  }

  // Si no hay errores, ocultar los mensajes de error
  ocultarError(anguloError);

  // Convertir el ángulo de grados a radianes
  const anguloRadianes = (Math.PI / 180) * anguloGrados;

  // Calcular el seno del ángulo
  const senoAngulo = Math.sin(anguloRadianes);

  // Verificar si el seno es igual a 0 (para evitar divisiones por cero)
  if (Math.abs(senoAngulo) < Number.EPSILON) {
    mostrarError(
      anguloError,
      "El ángulo no es válido. El seno del ángulo es cero."
    );
    return;
  }

  // Calcular el factor ángulo utilizando la fórmula: 1 / seno del ángulo
  const factorAngulo = 1 / senoAngulo;

  // Mostrar el resultado en la página
  document.getElementById("resultado").innerText = ` ${factorAngulo.toFixed(
    3
  )}`;

  // Mostrar el proceso y fórmula utilizada
  mostrarProceso(anguloGrados, anguloRadianes, senoAngulo, factorAngulo);
}

// Función para mostrar el proceso y fórmula utilizada
function mostrarProceso(senoAngulo, factorAngulo) {
  const procesoDiv = document.getElementById("procesoFactorAngulo");
  procesoDiv.innerHTML = `
    <h3>Proceso y Fórmula:</h3>
    <p>1. Obtenemos el valor del ángulo en grados.</p>
    <p>2. Realizamos el calculo:</p>
    <p class="formula">Formula = 1 / seno del ángulo</p>
    <p class="formula"> = ${1} / ${senoAngulo}</p>
    <p class="formula">Factor Ángulo ≈ ${factorAngulo.toFixed(3)}</p>
  `;
}

//Ejecutamos la funcion
function mostrarError(elemento, mensaje) {
  elemento.textContent = mensaje;
}

function ocultarError(elemento) {
  elemento.textContent = "";
  elemento.style.color = "initial";
}
