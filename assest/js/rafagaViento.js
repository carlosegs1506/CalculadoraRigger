//Calculo de rafaga de viento
function calcularRafaga() {
    // Obtenemos valores de los campos de entrada
    let viento10m = parseFloat(document.getElementById('viento').value);
    let alturaTrabajo = parseFloat(document.getElementById('altura').value);

    // Verificar que se ingresaron valores válidos
    if (isNaN(viento10m)) {
        mostrarError(vientoError, "Por favor, ingresa un valor numerico valido");
        return;
      }
    
      if (isNaN(alturaTrabajo)) {
        mostrarError(alturaError, "Por favor, ingresa un valor numerico valido");
        return;
      }
    
        // Si no hay errores, ocultamos el mensaje de error
      ocultarError(vientoError);
      ocultarError(alturaError);

    // Definir factores de velocidad según la altura de trabajo
    let factoresVelocidad = {
        10: 1.000,
        20: 1.073,
        30: 1.119,
        40: 1.153,
        50: 1.181,
        60: 1.204,
        70: 1.224,
        80: 1.241,
        90: 1.257,
        100: 1.272,
        110: 1.285,
        120: 1.297,
        130: 1.309,
        140: 1.329,
        150: 1.329,
        160: 1.339,
        170: 1.348,
        180: 1.356,
        190: 1.364,
        200: 1.372
    };

    // Obtener el factor de velocidad correspondiente a la altura de trabajo
    const factorVelocidad = factoresVelocidad[alturaTrabajo] || 1.000;

    // Calcular la velocidad de la ráfaga de viento
    const velocidadRafaga = viento10m * factorVelocidad;

    // Mostrar el resultado
    document.getElementById('result').innerText = velocidadRafaga.toFixed(2) + " m/s";

    // Mostrar el proceso y fórmulas utilizadas
  mostrarProceso(viento10m, factorVelocidad, velocidadRafaga);
}

// Función para mostrar el proceso y fórmulas utilizadas
function mostrarProceso(viento10m, factoresVelocidad, velocidadRafaga) {
  const procesoDiv = document.getElementById("procesoViento");
  procesoDiv.innerHTML = `
      <h3>Proceso y Fórmulas:</h3>
      <p>1. Obtenemos los valores de velocidad viento, altura de trabajo.</p>
      <p>2. Realizamos el calculo:</p>
      <p class="formula"> Formula = Velocidad Viento * Factor Velocidad</p>
      <p class="formula"> = ${viento10m} * ${factoresVelocidad}</p>
      <p class="formula">Rafaga de viento ≈ ${velocidadRafaga.toFixed(2)} "m/s"</p>
    `;
}

// Función para mostrar mensajes de error
function mostrarError(elemento, mensaje) {
  elemento.textContent = mensaje;
}

function ocultarError(elemento) {
    elemento.textContent = "";
    elemento.style.color = "initial";
  }