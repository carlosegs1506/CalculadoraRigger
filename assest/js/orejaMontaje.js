// Función para calcular la capacidad grillete
function capacidadOrejaMontaje() {
  // Manejador de eventos para el formulario
  let gramilOreja = parseFloat(document.getElementById("gramil").value);
  let espesorOreja = parseFloat(document.getElementById("espesor").value);

  // Validamos los valores ingresados
  if (isNaN(gramilOreja)) {
    mostrarError(gramilError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(espesorOreja)) {
    mostrarError(espesorError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  // Si no hay errores, ocultamos el mensaje de error
  ocultarError(gramilError);
  ocultarError(espesorError);

  // Calculamos las variables necesarias
  const resultadoOreja = gramilOreja * espesorOreja * 12.5;

  // Mostramos el resultado en la página
  document.getElementById("capacidadOreja").innerHTML = resultadoOreja + " Kg";

  // Mostrar la fórmula y el desarrollo en pantalla
  mostrarFormulaDesarrollo(gramilOreja, espesorOreja, resultadoOreja);
}

// Función para mostrar la fórmula y el desarrollo en pantalla
function mostrarFormulaDesarrollo(gramilOreja, espesorOreja, resultadoOreja) {
  const procesoDiv = document.getElementById("procesoDesarrollo");

  procesoDiv.innerHTML = `
    <h3>Proceso y Formula:</h3>
    <p>1. Obtenemos los valores de gramil y espesor.</p>
    <p>2. Realizamos el calculo:</p>
    <p class="formula">Formula = Gramil * Espesor * Constante(12.5)</p>
    <p class="formula"> = ${gramilOreja} * ${espesorOreja} * ${12.5}</p>
    <p class="formula">Capacidad ≈ ${resultadoOreja.toFixed(1)} Kg</p>
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
