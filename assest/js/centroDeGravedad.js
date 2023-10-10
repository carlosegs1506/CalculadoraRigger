//Funcion para el calculo de centro de gravedad.
function calcularCentroGravedad() {
  // Obtenemos los valores de los campos del formulario
  let peso1 = parseFloat(document.getElementById("peso1").value);
  let distancia1 = parseFloat(document.getElementById("distancia_1").value);
  let peso2 = parseFloat(document.getElementById("peso2").value);
  let distancia2 = parseFloat(document.getElementById("distancia_2").value);

  // Validamos los valores ingresados
  if (isNaN(peso1)) {
    mostrarError(peso1Error, "Por favor, ingresa un valor numerico valido.");
    return;
  }

  if (isNaN(distancia1)) {
    mostrarError(
      distancia_1Error,
      "Por favor, ingresa un valor numerico valido."
    );
    return;
  }

  if (isNaN(peso2)) {
    mostrarError(peso2Error, "Por favor, ingresa un valor numerico valido.");
    return;
  }

  if (isNaN(distancia2)) {
    mostrarError(
      distancia_2Error,
      "Por favor, ingresa un valor numerico valido."
    );
    return;
  }

  // Si no hay errores, ocultar los mensajes de error
  mostrarError(peso1Error);
  mostrarError(distancia_1Error);
  mostrarError(peso2Error);
  mostrarError(distancia_2Error);

  // Calculamos las variables necesarias
  const momento1 = peso1 * distancia1;
  const momento2 = peso2 * distancia2;
  const pesoTotal = peso1 + peso2;
  const momentoTotal = momento1 + momento2;
  const centroGravedad = momentoTotal / pesoTotal;

  // Mostramos el resultado en la página
  document.getElementById("calcularGravedad").innerHTML =
    centroGravedad.toFixed(1) + " mts";

  // Mostrar el proceso y fórmulas utilizadas
  mostrarProceso(momento1, momento2, momentoTotal, pesoTotal, centroGravedad);
}

// Función para mostrar el proceso y fórmulas utilizadas
function mostrarProceso(
  momento1,
  momento2,
  momentoTotal,
  pesoTotal,
  centroGravedad
) {
  const procesoDiv = document.getElementById("procesoGravedad");
  procesoDiv.innerHTML = `
    <h3>Proceso y Fórmulas:</h3>
    <p>1. Obtenemos los valores de peso 1, distancia 1, peso 2, distancia 2.</p>
    <p>2. Realizamos el calculo:</p>
    <p class="formula">Paso 1 = Peso 1 * Distancia 1</p>
    <p class="formula">Momento 1 = ${momento1.toFixed(2)} Kg</p><br>
    <p class="formula">Paso 2 = Peso 2 * distancia 2 </p>
    <p class="formula">Momento 2 = ${momento2.toFixed(2)} Kg</p><br>
    <p class="formula">Peso total = Peso 1 + Peso 2 = ${pesoTotal.toFixed(
      2
    )}</p><br>
    <p class="formula">Momento total = Momento 1 + Momento 2 = ${momentoTotal.toFixed(
      2
    )}</p><br>
    <p class="formula">Centro de Gravedad = Momento Total / Peso Total = ${centroGravedad.toFixed(
      2
    )} mts</p>
  `;

  // Mostrar el div de la imagen
  const imagenProcesoDiv = document.getElementById("imagenProceso");
  imagenProcesoDiv.style.display = "block";
}

// Función para ocultar el div de la imagen
function ocultarImagen() {
  const imagenProcesoDiv = document.getElementById("imagenProceso");
  imagenProcesoDiv.style.display = "none";
}

//Ejecutamos la funcion
function mostrarError(elemento, mensaje) {
  elemento.textContent = mensaje;

  // Ocultar el div de la imagen en caso de error
  ocultarImagen();
}

function ocultarError(elemento) {
  elemento.textContent = "";
  elemento.style.color = "initial";
}
