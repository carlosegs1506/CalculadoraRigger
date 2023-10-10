// Función para calcular el peso de una barra de construcción
function calculoBarraFierro() {
  // Obtenemos los valores de los campos del formulario
  let diametroBarra = parseFloat(document.getElementById("diametro").value);
  let largoBarra = parseFloat(document.getElementById("largo").value);

  // Validar los valores ingresados
  if (isNaN(diametroBarra)) {
    mostrarError(diametroError, "Por favor, ingresa un valor numérico válido.");
    return;
  }

  if (isNaN(largoBarra)) {
    mostrarError(largoError, "Por favor, ingresa un valor numérico válido.");
    return;
  }

  // Si no hay errores, ocultar los mensajes de error
  ocultarError(diametroError);
  ocultarError(largoError);

  // Realizamos el cálculo
  const resultadoPesoBarra = Math.pow(diametroBarra, 2) * 6.17 * largoBarra;
  const resultadoFinal = resultadoPesoBarra / 1000000;

  // Mostramos el resultado en pantalla
  document.getElementById("barraFierro").innerHTML =
    resultadoFinal.toFixed(1) + " Kg";

  // Mostrar el proceso y fórmulas utilizadas
  mostrarProceso(diametroBarra, largoBarra, resultadoPesoBarra, resultadoFinal);
}

// Función para mostrar el proceso y fórmulas utilizadas
function mostrarProceso(
  diametroBarra,
  largoBarra,
  resultadoPesoBarra,
  resultadoFinal
) {
  const procesoDiv = document.getElementById("procesoBarra");
  procesoDiv.innerHTML = `
    <h3>Fórmula y Proceso:</h3>
    <p>1. Obtenemos los valores de diámetro, largo.</p>
    <p>2. Realizamos el calculo:</p>
    <p class="formula">Formula = Diámetro<sup>2</sup> * Constante (6.17) * Largo</p>
    <p class="formula"> = ${diametroBarra}<sup>2</sup> * 6.17 * ${largoBarra}</p>
    <p class="formula">Peso ≈ ${resultadoFinal.toFixed(1)} Kg</p>
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
