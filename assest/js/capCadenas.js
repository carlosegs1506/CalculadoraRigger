// Función para calcular resistencia cadena
function calculoCadena() {
  // Manejador de eventos para el formulario
  let milimetroCadena = parseFloat(document.getElementById("milimetro").value);
  let grado = parseFloat(document.getElementById("grado").value);

  // Validamos los valores ingresados
  if (isNaN(milimetroCadena)) {
    mostrarError(
      milimetroError,
      "Por favor, ingresa un valor numerico valido."
    );
    return;
  }

  // Si no hay errores, ocultar los mensajes de error
  ocultarError(milimetroError);

  // Calculamos la resistencia de cadena según el valor del grado
  let resistencia = 0;
  if (grado == 8) {
    resistencia = Math.pow(milimetroCadena / 26, 2) * 21700;
  } else if (grado == 10) {
    resistencia = Math.pow(milimetroCadena / 26, 2) * 27060;
  }

  //Mostramos el resultado en pantalla
  document.getElementById("resistenciaCadena").innerHTML =
    resistencia.toFixed(1) + " Kg";

  // Mostramos el proceso y fórmulas utilizadas
  mostrarProceso(milimetroCadena, grado, resistencia);
}

// Función para mostrar el proceso y fórmulas utilizadas
function mostrarProceso(milimetroCadena, grado, resistencia) {
  const procesoDiv = document.getElementById("procesoCadenas");
  procesoDiv.innerHTML = `
    <h3>Proceso y Formulas:</h3>
    <p>1. Obtenemos los valores de milimetro cadena, grado cadena.</p>
    <p>2. Realizamos el calculo:</p>
    <p class="formula">Formula Grado 8 = (milimetro / 26)<sup>2</sup>  * 21700 </p>
    <p class="formula">Formula Grado 10 = (milimetro / 26)<sup>2</sup> * 27060 </p>
    <p class="formula">Capacidad ≈ ${resistencia.toFixed(2)} Kg
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
