//Calculo de carga frontal
function calcularCapacidad() {
    // Obtener valores de los campos de entrada
    let cargaMaxima = parseFloat(document.getElementById('cargaMaxima').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let largo = parseFloat(document.getElementById('largo').value);
    let numEslingas = parseInt(document.getElementById('eslingas').value);

    // Verificar que se ingresaron valores válidos

    if (isNaN(cargaMaxima)) {
        mostrarError(cargaError, "Por favor, ingresa un valor numerico valido");
        return;
      }
    
      if (isNaN(altura)) {
        mostrarError(alturaError, "Por favor, ingresa un valor numerico valido");
        return;
      }

      if (isNaN(largo)) {
        mostrarError(largoError, "Por favor, ingresa un valor numerico valido");
        return;
      }
    
        // Si no hay errores, ocultamos el mensaje de error
      ocultarError(cargaError);
      ocultarError(alturaError);
      ocultarError(largoError);

    // Calcular la capacidad del ramal
    const capacidadRamal = cargaMaxima * (altura / largo) * numEslingas;

    // Mostrar el resultado
    document.getElementById('result').innerText = capacidadRamal.toFixed(2) + "Kg";

    // Mostrar el proceso y fórmulas utilizadas
  mostrarProceso(cargaMaxima, altura, largo, numEslingas, capacidadRamal);
}

// Función para mostrar el proceso y fórmulas utilizadas
function mostrarProceso(cargaMaxima, altura, largo, numEslingas, capacidadRamal) {
  const procesoDiv = document.getElementById("procesoCadenas");
  procesoDiv.innerHTML = `
      <h3>Proceso y Fórmulas:</h3>
      <p>1. Obtenemos los valores de carga, altura, largo ramal, numero de ramales.</p>
      <p>2. Realizamos el calculo:</p>
      <p class="formula"> Formula = Carga * (Altura / Largo) * Numero de Ramales</p>
      <p class="formula"> = ${cargaMaxima} * (${altura} / ${largo}) * ${numEslingas}</p>
      <p class="formula">Capacidad ≈ ${capacidadRamal.toFixed(2)} Kg</p>
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