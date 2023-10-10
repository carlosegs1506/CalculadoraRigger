//Calculo para el peso de un cilindro
function calcularCilindro() {
  // Obtenemos los valores de los campos del formulario
  let radio = parseFloat(document.getElementById("radio").value);
  let longitud = parseFloat(document.getElementById("longitud").value);
  let peso = parseFloat(document.getElementById("peso").value);

  // Validar los valores ingresados
  if (isNaN(radio)) {
    mostrarError(radioError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(longitud)) {
    mostrarError(longitudError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(peso)) {
    mostrarError(pesoError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  // Si no hay errores, ocultar los mensajes de error
  ocultarError(radioError);
  ocultarError(longitudError);
  ocultarError(pesoError);

  // Calculamos las variables necesarias
  const pi = Math.PI;
  const volumen = radio ** 2 * pi * longitud * peso;

  // Mostramos el resultado en pantalla
  document.getElementById("calcularC").innerHTML = volumen.toFixed(2) + " Kg";

  // Mostrar el proceso y fórmulas utilizadas
  mostrarProceso(radio, longitud, peso, volumen);
}

// Función para mostrar la fórmula y el desarrollo en pantalla
function mostrarProceso(radio, longitud, peso, volumen) {
  const formulaDiv = document.getElementById("procesoDesarrollo");

  formulaDiv.innerHTML = `
    <h3>Fórmula y Desarrollo:</h3>
    <p>1. Obtenemos los valores de radio, longitud, peso especifico.</p>
    <p>1. Realizamos el calculo:</p>
    <p class="formula">Formula = Radio<sup>2</sup> * PI * Longitud * Peso Especifico</p>
    <p class="formula"> = ${radio} * ${Math.PI.toFixed(
    2
  )} * ${longitud} * ${peso}</p>
    <p class="formula">Peso ≈ ${volumen.toFixed(2)} Kg</p>
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
