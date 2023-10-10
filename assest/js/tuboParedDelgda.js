//Funcio para el calculo de un tubo de pared delgada.
function calcularPesoTubo() {
  // Obtenemos los valores de los campos del formulario
  let diametro = parseFloat(document.getElementById("diametro").value);
  let largo = parseFloat(document.getElementById("largo").value);
  let espesor = parseFloat(document.getElementById("espesor").value);
  let pesoMaterial = parseFloat(document.getElementById("peso").value);

  // Validamos los valores ingresados
  if (isNaN(diametro)) {
    mostrarError(diametroError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(largo)) {
    mostrarError(largoError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(espesor)) {
    mostrarError(espesorError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(pesoMaterial)) {
    mostrarError(pesoError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  // Si no hay errores, ocultamos el mensaje de error
  ocultarError(diametroError);
  ocultarError(largoError);
  ocultarError(espesorError);
  ocultarError(pesoError);

  // Calculamos las variables necesarias
  const pi = Math.PI;
  const pesoTubo = pi * diametro * largo * espesor * pesoMaterial;

  // Mostramos el resultado en la página
  document.getElementById("calcularTubo").innerHTML =
    pesoTubo.toFixed(2) + " Ton";

  // Mostrar el proceso y fórmulas utilizadas
  mostrarProceso(diametro, largo, espesor, pesoMaterial, pesoTubo);
}

// Función para mostrar la fórmula y el desarrollo en pantalla
function mostrarProceso(diametro, largo, espesor, pesoMaterial, pesoTubo) {
  const formulaDiv = document.getElementById("procesoDesarrollo");

  formulaDiv.innerHTML = `
    <h3>Fórmula y Desarrollo:</h3>
    <p>1. Obtenemos los valores de diametro, longitud, espesor, peso especifico.</p>
    <p>2. Realizamos el calculo:</p>
    <p class="formula">Formula = Diametro * PI * Longitud * Espesor * Peso especifico </p>
    <p class="formula"> = ${diametro} * ${Math.PI.toFixed(
    2
  )} * ${largo} * ${espesor} * ${pesoMaterial}</p>
    <p class="formula">Peso ≈ ${pesoTubo.toFixed(2)} Ton</p>
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
