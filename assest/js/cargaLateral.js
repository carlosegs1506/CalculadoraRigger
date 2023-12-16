//Funcion para el calculo de carga lateral
function calcularCargaLateral() {
    // Obtener valores de los campos de entrada
    let densidadViento = parseFloat(document.getElementById('densidad').value);
    let areaReferencia = parseFloat(document.getElementById('area').value);
    let coeficienteArrastre = parseFloat(document.getElementById('coeficiente').value);
    let velocidadViento = parseFloat(document.getElementById('velocidad').value);

    // Verificar que se ingresaron valores válidos
  if (isNaN(densidadViento)) {
    mostrarError(densidadError, "Por favor, ingresa un valor numérico válido.");
    return;
  }

  if (isNaN(areaReferencia)) {
    mostrarError(areaError, "Por favor, ingresa un valor numérico válido.");
    return;
  }

  if (isNaN(coeficienteArrastre)) {
    mostrarError(coeficienteError, "Por favor, ingresa un valor numérico válido.");
    return;
  }

  if (isNaN(velocidadViento)) {
    mostrarError(velocidadError, "Por favor, ingresa un valor numérico válido.");
    return;
  }

  // Si no hay errores, ocultar los mensajes de error
  ocultarError(densidadError);
  ocultarError(areaError);
  ocultarError(coeficienteError);
  ocultarError(velocidadError);

    // Calcular la carga lateral
    const cargaLateral = 0.5 * densidadViento * areaReferencia * coeficienteArrastre * Math.pow(velocidadViento, 2);

    // Mostrar el resultado
    document.getElementById('result').innerText =  cargaLateral.toFixed(2) + " libras";

    // Mostrar el proceso y fórmulas utilizadas
  mostrarProceso(densidadViento, areaReferencia, coeficienteArrastre, velocidadViento, cargaLateral);
}

// Función para mostrar el proceso y fórmulas utilizadas
function mostrarProceso(densidadViento, areaReferencia, coeficienteArrastre, velocidadViento, cargaLateral) {
  const procesoDiv = document.getElementById("procesoLateral");
  procesoDiv.innerHTML = `
      <h3>Proceso y Fórmulas:</h3>
      <p>1. Obtenemos los valores de densidad viento, area de referencia, coeficiente arrastre, velocidad del viento, 
      .</p>
      <p>2. Realizamos el calculo:</p>
      <p class="formula"> Formula = 0.5 * densidad Viento * area Referencia * coeficiente Arrastre * velocidad Viento<sup>2</sup></p>
      <p class="formula"> = ${0.5} * ${densidadViento} * ${areaReferencia} * ${coeficienteArrastre} * ${velocidadViento}</p>
      <p class="formula">Carga ≈ ${cargaLateral.toFixed(2)} libras</p>
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