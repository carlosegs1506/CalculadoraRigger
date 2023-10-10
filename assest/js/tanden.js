function calcularTension() {
  // Obtener los valores ingresados
  const peso = parseFloat(document.getElementById("peso").value);
  const d1 = parseFloat(document.getElementById("d1").value);
  const d2 = parseFloat(document.getElementById("d2").value);
  const d3 = parseFloat(document.getElementById("d3").value);
  const angulo = parseFloat(document.getElementById("angulo").value);

  // Validamos los valores ingresados
  if (isNaN(peso) || isNaN(d1) || isNaN(d2) || isNaN(d3) || isNaN(angulo)) {
    mostrarError(
      document.getElementById("pesoError"),
      "Por favor, ingresa valores numéricos válidos en todos los campos."
    );
    return;
  }

  // Si no hay errores, ocultamos el mensaje de error
  ocultarError(document.getElementById("pesoError"));
  ocultarError(document.getElementById("d1Error"));
  ocultarError(document.getElementById("d2Error"));
  ocultarError(document.getElementById("d3Error"));
  ocultarError(document.getElementById("anguloError"));

  // Calcular las tensiones utilizando la fórmula en lugar de tangenteAngulo
  const tension1 =
    (peso * (d2 + d3 * Math.tan((angulo * Math.PI) / 180))) / (d1 + d2);
  const tension2 = peso - tension1;

  // Mostrar el resultado en pantalla
  document.getElementById(
    "resultado"
  ).innerHTML = `Tensión 1: ${tension1.toFixed(
    2
  )} Ton <br>Tensión 2: ${tension2.toFixed(2)} Ton`;

  // Mostrar la fórmula y el desarrollo en pantalla
  mostrarProceso(peso, d1, d2, d3, angulo, tension1, tension2);
}

// Función para mostrar la fórmula y el desarrollo en pantalla
function mostrarProceso(peso, d1, d2, d3, angulo, tension1, tension2) {
  const formulaDiv = document.getElementById("procesoDesarrollo");

  formulaDiv.innerHTML = `
        <h3>Fórmula y Desarrollo:</h3>
        <p>1. Obtenemos los valores de peso, diferencia 1, diferencia 2, diferencia 3 y ángulo.</p>
        <p>2. Realizamos el calculo.</p>
        <p class="formula">Tensión 1 = Peso * (d2 + d3 * Tangente Angulo) / (d1 + d2)</p>
        <p class="formula">  = ${peso} * (${d2} + ${d3} * ${Math.tan(
    (angulo * Math.PI) / 180
  )}) / (${d1} + ${d2}) <br> = ${tension1.toFixed(2)} Ton </p>
        <p class="formula">Tensión 2 = Peso - Tensión 1</p>
        <p class="formula"> = ${peso} - ${tension1.toFixed(
    2
  )} <br> = ${tension2.toFixed(2)} Ton</p>
    `;

  // Mostrar el div de la imagen
  const imagenProcesoDiv = document.getElementById("imagenProceso");
  imagenProcesoDiv.style.display = "block";
}

// Función para mostrar errores
function mostrarError(elemento, mensaje) {
  elemento.textContent = mensaje;
}

// Función para ocultar la imagen de proceso
function ocultarImagen() {
  const imagenProcesoDiv = document.getElementById("imagenProceso");
  imagenProcesoDiv.style.display = "none";
}

// Función para ocultar errores
function ocultarError(elemento) {
  elemento.textContent = "";
  elemento.style.color = "initial";
}
