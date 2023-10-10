// Función para calcular diagonalidad
function calculoDiagonalidad() {
  // Manejador de eventos para el formulario
  let radio = parseFloat(document.getElementById("radio").value);
  let altura = parseFloat(document.getElementById("altura").value);

  // Validamos los valores ingresados
  if (isNaN(radio)) {
    mostrarError(radioError, "Por favor, ingresa un valor numerico valido.");
    return;
  }

  if (isNaN(altura)) {
    mostrarError(alturaError, "Por favor, ingresa un valor numerico valido.");
    return;
  }

  // Si no hay errores, ocultamos el mensaje de error
  ocultarError(radioError);
  ocultarError(alturaError);

  // Calculamos las variables necesarias
  const resultadoDiagonalidad = Math.sqrt(
    Math.pow(radio, 2) + Math.pow(altura, 2)
  );

  //Mostramos el resultado en pantalla
  document.getElementById("diagonalidad").innerHTML =
    resultadoDiagonalidad.toFixed(1) + " mts";

  // Mostrar el proceso y fórmulas utilizadas
  mostrarProceso(radio, altura, resultadoDiagonalidad);
}

// Función para mostrar el proceso y fórmulas utilizadas
function mostrarProceso(radio, altura, resultadoDiagonalidad) {
  const procesoDiv = document.getElementById("procesoDiagonalidad");
  procesoDiv.innerHTML = `
        <h3>Proceso y Fórmula:</h3>
        <p>1. Obtenemos los valores de radio y altura.</p>
        <p>2. Realizamos el calculo:</p>
        <p class="formula">Formula = √(Radio<sup>2</sup> + Altura<sup>2</sup>)</p>
        <p class="formula"> = √(${radio}<sup>2</sup> + ${altura}<sup>2</sup>)</p>
        <p class="formula">Diagonalidad ≈ ${resultadoDiagonalidad.toFixed(
          2
        )} mts</p>
      `;

  // Mostrar el div de la imagen
  const imagenProcesoDiv = document.getElementById("imagenProceso");
  imagenProcesoDiv.style.display = "block";
}

//Ejecutamos la funcion
function mostrarError(elemento, mensaje) {
  elemento.textContent = mensaje;
}

// Función para ocultar la imagen de proceso
function ocultarImagen() {
  const imagenProcesoDiv = document.getElementById("imagenProceso");
  imagenProcesoDiv.style.display = "none";
}

function ocultarError(elemento) {
  elemento.textContent = "";
  elemento.style.color = "initial";
}
