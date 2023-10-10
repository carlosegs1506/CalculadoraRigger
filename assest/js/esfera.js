//Calculo peso de una esfera
function calculoEsfera() {
  // Obtenemos los valores de los campos del formulario
  let dEsfera = parseFloat(document.getElementById("diametro").value);
  let pesoEsfera = parseFloat(document.getElementById("peso").value);

  // Validamos los valores ingresados
  if (isNaN(dEsfera)) {
    mostrarError(diametroError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(pesoEsfera)) {
    mostrarError(pesoError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  // Si no hay errores, ocultamos el mensaje de error
  ocultarError(diametroError);
  ocultarError(pesoError);

  // Calculamos las variables necesarias
  const esfera = ((dEsfera * dEsfera * dEsfera * Math.PI) / 6) * pesoEsfera;
  const resultadoFinal = esfera * 1000;

  //Mostramos en pantalla
  document.getElementById("esfera").innerHTML =
    resultadoFinal.toFixed(2) + " Kg";

  // Mostrar el proceso y fórmulas utilizadas
  mostrarProceso(dEsfera, pesoEsfera, resultadoFinal);
}

// Función para mostrar el proceso y fórmulas utilizadas
function mostrarProceso(dEsfera, pesoEsfera, resultadoFinal) {
  const procesoDiv = document.getElementById("procesoEsfera");
  procesoDiv.innerHTML = `
        <h3>Proceso y Fórmula:</h3>
        <p>1. Obtenemos los valores de diametro, peso especifico.</p>
        <p>2. Realizamos el calculo:</p>
        <p class="formula">Formula = diametro<sup>3</sup> * PI / 6 * Peso especifico</p>
        <p class="formula"> = ${dEsfera}<sup>3</sup> * ${Math.PI.toFixed(
    2
  )} / ${6} * ${pesoEsfera}</p>
        <p class="formula">Peso ≈ ${resultadoFinal.toFixed(2)} Kg</p>
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
