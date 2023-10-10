// Función para calcular el ángulo de trabajo
function calcularAngulo() {
  // Obtenemos los valores de los campos del formulario
  let radio = parseFloat(document.getElementById("radio").value);
  let largo = parseFloat(document.getElementById("largo").value);

  // Validar los valores ingresados
  if (isNaN(radio)) {
    mostrarError(radioError, "Por favor, ingresa un valor numérico válido.");
    return;
  }

  if (isNaN(largo)) {
    mostrarError(largoError, "Por favor, ingresa un valor numérico válido.");
    return;
  }

  // Validación adicional de radio < largoPluma
  if (radio >= largo) {
    mostrarError(radioError, "El radio debe ser menor que el largo.");
    return;
  }

  // Si no hay errores, ocultar los mensajes de error
  ocultarError(radioError);
  ocultarError(largoError);

  // Realizar el cálculo
  const anguloRadianes = Math.acos(radio / largo);
  const anguloGrados = (anguloRadianes * 180) / Math.PI;

  // Mostrar el resultado en pantalla
  document.getElementById("resultado").textContent =
    anguloGrados.toFixed(2) + " °";

  // Mostrar el proceso y fórmulas utilizadas
  mostrarProceso(radio, largo, anguloRadianes, anguloGrados);
}

// Función para mostrar el proceso y fórmulas utilizadas
function mostrarProceso(radio, largo, anguloRadianes, anguloGrados) {
  const procesoDiv = document.getElementById("proceso");
  procesoDiv.innerHTML = `
    <h3>Fórmula y Proceso:</h3>
    <p>1. Obtenemos los valores de radio, largo.</p>
    <p>2. Realizamos el calculo:</p>
    <p class="formula">Formula = Cos<sup>-1</sup></sub>(Radio / Largo)</p>
    <p class="formula"> = cos<sup>-1</sup>(${radio} / ${largo})</p>
    <p class="formula">Ángulo ≈ ${anguloGrados.toFixed(2)} °</p>
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
