//Funcion para el calculo de un peso en caida libre
function calculoCaidaLibre() {
  // Obtenemos los valores de los campos del formulario
  let pesoMaterialCaida = parseFloat(document.getElementById("peso").value);
  let alturaCaida = parseFloat(document.getElementById("altura").value);

  // Validamos los valores ingresados
  if (isNaN(pesoMaterialCaida)) {
    mostrarError(pesoError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(alturaCaida)) {
    mostrarError(alturaError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  // Si no hay errores, ocultamos el mensaje de error
  ocultarError(pesoError);
  ocultarError(alturaError);

  // Calculamos las variables necesarias
  const resultadoPesoCaida = pesoMaterialCaida * alturaCaida * 9.8;

  // Mostramos el resultado en la página
  document.getElementById("caidaLibre").innerHTML =
    resultadoPesoCaida.toFixed(1) + " Kg";

  // Mostrar el proceso y fórmulas utilizadas
  mostrarProceso(pesoMaterialCaida, alturaCaida, resultadoPesoCaida);
}

// Función para mostrar la fórmula y el desarrollo en pantalla
function mostrarProceso(pesoMaterialCaida, alturaCaida, resultadoPesoCaida) {
  const formulaDiv = document.getElementById("procesoDesarrollo");

  formulaDiv.innerHTML = `
    <h3>Fórmula y Desarrollo:</h3>
    <p>1. Obtenemos los valores de peso, altura.</p>
    <p>2. Realizamos el calculo:</p>
    <p class="formula">Formula = Peso * Altura * Constante(9.8)</p>
    <p class="formula"> = ${pesoMaterialCaida} * ${alturaCaida} * ${9.8}</p>
    <p class="formula">Peso ≈ ${resultadoPesoCaida.toFixed(2)} kg</p>
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
