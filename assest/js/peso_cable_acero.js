//Funcion para el calculo del peso de un cable de acero
function calcularPesoCable() {
  // Obtenemos los valores de los campos del formulario
  let radio = parseFloat(document.getElementById("radio").value);
  let largo = parseFloat(document.getElementById("largo").value);
  let pesoEspecifico = parseFloat(document.getElementById("peso").value);

  // Validamos los valores ingresados
  if (isNaN(radio)) {
    mostrarError(radioError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(largo)) {
    mostrarError(largoError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(pesoEspecifico)) {
    mostrarError(pesoError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  // Si no hay errores, ocultar los mensajes de error
  ocultarError(radioError);
  ocultarError(largoError);
  ocultarError(pesoError);

  // Calculamos las variables necesarias
  const resultadoPesoCable =
    Math.pow(radio, 2) * Math.PI * largo * pesoEspecifico;
  const resultadoTotal = resultadoPesoCable / 1000;

  // Mostramos el resultado en la página
  document.getElementById("cableAcero").innerHTML =
    resultadoTotal.toFixed(1) + " Kg";

  // Mostrar el proceso y fórmulas utilizadas
  mostrarProceso(radio, largo, pesoEspecifico, resultadoTotal);
}

// Función para mostrar la fórmula y el desarrollo en pantalla
function mostrarProceso(radio, largo, pesoEspecifico, resultadoTotal) {
  const formulaDiv = document.getElementById("procesoDesarrollo");

  formulaDiv.innerHTML = `
    <h3>Fórmula y Desarrollo:</h3>
    <p>1. Obtenemos los valores de radio, largo, peso especifico.</p>
    <p>2. Realizamos el calculo:</p>
    <p class="formula">Formula = Radio<sup>2</sup> * PI * Largo * Peso Especifico</p>
    <p class="formula"> = ${radio}<sup>2</sup> * ${Math.PI.toFixed(
    2
  )} * ${largo} * ${pesoEspecifico}</p>
    <p class="formula">Peso ≈ ${resultadoTotal.toFixed(2)} kg</p>
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
