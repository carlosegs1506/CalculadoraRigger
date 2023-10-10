//Funcion para el calculo de Volumen
function calcularVolumen() {
  //Obtenemos los valores de los campos del formulario
  let largo = parseFloat(document.getElementById("largo").value);
  let ancho = parseFloat(document.getElementById("ancho").value);
  let alto = parseFloat(document.getElementById("alto").value);

  // Validamos los valores ingresados
  if (isNaN(largo)) {
    mostrarError(largoError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(ancho)) {
    mostrarError(anchoError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(alto)) {
    mostrarError(altoError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  // Si no hay errores, ocultamos el mensaje de error
  ocultarError(largoError);
  ocultarError(anchoError);
  ocultarError(altoError);

  // Calculamos las variables necesarias
  const volumen = largo * ancho * alto;

  // Mostramos el resultado en la página
  document.getElementById("volumen").innerHTML = volumen + " mts <sup>3</sup> ";

  // Mostrar el proceso y fórmulas utilizadas
  mostrarProceso(largo, ancho, alto, volumen);
}

// Función para mostrar el proceso y fórmulas utilizadas
function mostrarProceso(largo, ancho, alto, volumen) {
  const procesoDiv = document.getElementById("procesoViento");
  procesoDiv.innerHTML = `
        <h3>Proceso y Fórmulas:</h3>
        <p>1. Obtenemos los valores de largo, ancho, alto.</p>
        <p>2.Realizamos el calculo:</p>
        <p class="formula">Formula = Largo * Ancho * Alto</p>
        <p class="formula"> = ${largo} * ${ancho} * ${alto}</p>
        <p class="formula">Volumen ≈ ${volumen.toFixed(2)} mts<sup>3</sup>
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
