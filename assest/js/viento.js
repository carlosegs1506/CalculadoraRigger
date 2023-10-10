//Funcion para el calculo de viento
function calculoViento() {
  //Obtenemos los valores ingresados
  let metrosSegundos = parseFloat(document.getElementById("mts_seg").value);

  // Validar los valores ingresados
  if (isNaN(metrosSegundos)) {
    mostrarError(mts_segError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  // Si no hay errores, ocultar los mensajes de error
  ocultarError(mts_segError);

  // Calculamos las variables necesarias
  const kilometroViento = metrosSegundos * 3.6;

  // Mostramos el resultado en la página
  document.getElementById("viento").innerHTML =
    kilometroViento.toFixed(2) + " km/hora";

  // Mostrar el proceso y fórmulas utilizadas
  mostrarProceso(metrosSegundos, kilometroViento);
}

// Función para mostrar el proceso y fórmulas utilizadas
function mostrarProceso(metrosSegundos, kilometroViento) {
  const procesoDiv = document.getElementById("procesoViento");
  procesoDiv.innerHTML = `
        <h3>Proceso y Fórmula:</h3>
        <p>1. Obtenemos el valor en metros/segundos.</p>
        <p>2. Realizamos el calculo:</p>
        <p class="formula">Formula = Metros / Segundos * 3.6</p>
        <p class="formula"> = ${metrosSegundos} * ${3.6}</p>
        <p class="formula">Velocidad ≈ ${kilometroViento.toFixed(2)} km/hora
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
