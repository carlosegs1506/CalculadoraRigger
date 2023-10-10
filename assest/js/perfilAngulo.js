// Función para el cálculo del peso de un perfil ángulo
function calculoPerfilAngulo() {
  // Obtenemos los valores de los campos del formulario
  let alto = parseFloat(document.getElementById("alto").value);
  let largo = parseFloat(document.getElementById("largo").value);
  let espesor = parseFloat(document.getElementById("espesor").value);
  let especifico = parseFloat(document.getElementById("especifico").value);

  // Validamos los valores ingresados
  if (isNaN(alto) || isNaN(largo) || isNaN(espesor) || isNaN(especifico)) {
    mostrarError(
      "altoError",
      "Por favor, ingrese valores numéricos válidos en todos los campos."
    );
    return;
  }

  // Si no hay errores, ocultamos el mensaje de error
  ocultarError("altoError");
  ocultarError("largoError");
  ocultarError("espesorError");
  ocultarError("especificoError");

  // Realizamos el cálculo
  const volumen = (alto * largo * espesor * 2) / 1000000; // Convertir a metros cúbicos
  const peso = volumen * especifico;

  // Mostramos el resultado en pantalla
  document.getElementById("perfilA").innerHTML = peso.toFixed(2) + " kg";

  // Mostrar la fórmula y el desarrollo en pantalla
  mostrarProceso(alto, largo, espesor, especifico, peso);
}

// Función para mostrar la fórmula y el desarrollo en pantalla
function mostrarProceso(alto, largo, espesor, especifico, peso) {
  const formulaDiv = document.getElementById("procesoDesarrollo");

  formulaDiv.innerHTML = `
    <h3>Proceso y Fórmula:</h3>
    <p>1. Obtenemos los valores de alto, largo, espesor y peso específico.</p>
    <p>2. Realizamos el cálculo:</p>
    <p class="formula">Fórmula = Alto * Largo * Espesor * Peso Específico * 2</p>
    <p class="formula"> = ${alto} * ${largo} * ${espesor} * ${especifico} * ${2}</p>
    <p class="formula">Peso ≈ ${peso.toFixed(2)} kg</p>
  `;

  // Mostrar el div de la imagen
  const imagenProcesoDiv = document.getElementById("imagenProceso");
  imagenProcesoDiv.style.display = "block";
}

// Ejecutamos la función cuando se hace clic en el botón
document
  .querySelector(".enviar")
  .addEventListener("click", calculoPerfilAngulo);

// Función para mostrar un mensaje de error en un elemento
function mostrarError(elemento, mensaje) {
  document.getElementById(elemento).textContent = mensaje;
}

// Función para ocultar la imagen de proceso
function ocultarImagen() {
  const imagenProcesoDiv = document.getElementById("imagenProceso");
  imagenProcesoDiv.style.display = "none";
}

// Función para ocultar un mensaje de error
function ocultarError(elemento) {
  document.getElementById(elemento).textContent = "";
}
