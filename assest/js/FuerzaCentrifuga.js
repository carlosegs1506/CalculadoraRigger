//Funcion para el calculo de carga lateral
function calcularCargaLateral() {
     // Obtener valores de los campos de entrada
    let pesoCarga = parseFloat(document.getElementById('peso').value);
    let radio = parseFloat(document.getElementById('radio').value);
    let numeroCarga = parseFloat(document.getElementById('numero').value);
    let altura = parseFloat(document.getElementById('altura').value);

    // Verificar que se ingresaron valores válidos
    if (isNaN(pesoCarga)) {
        mostrarError(pesoError, "Por favor, ingresa un valor numérico válido.");
        return;
      }
    
      if (isNaN(radio)) {
        mostrarError(radioError, "Por favor, ingresa un valor numérico válido.");
        return;
      }
    
      if (isNaN(numeroCarga)) {
        mostrarError(numeroError, "Por favor, ingresa un valor numérico válido.");
        return;
      }
    
      if (isNaN(altura)) {
        mostrarError(alturaError, "Por favor, ingresa un valor numérico válido.");
        return;
      }
    
      // Si no hay errores, ocultar los mensajes de error
      ocultarError(pesoError);
      ocultarError(radioError);
      ocultarError(numeroError);
      ocultarError(alturaError);

      // Calculo fuerza centrifuga
    var cargaLateral = pesoCarga * radio / 9.8 * (Math.pow((Math.PI * numeroCarga / 30), 2));
    var w = pesoCarga + (cargaLateral * altura / radio);

    // Mostrar el resultado
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML =
        '<p>Fuerza: ' + cargaLateral.toFixed(2) + ' Kgf</p>' +
        '<p>Carga: ' + w.toFixed(2) + ' Kgf</p>';

        // Mostrar el proceso y fórmulas utilizadas
  mostrarProceso(pesoCarga, radio, numeroCarga, altura, cargaLateral, w);
}

// Función para mostrar el proceso y fórmulas utilizadas
function mostrarProceso(pesoCarga, radio, numeroCarga, altura, cargaLateral, w) {
  const procesoDiv = document.getElementById("procesoFuerza");
  procesoDiv.innerHTML = `
      <h3>Proceso y Fórmulas:</h3>
      <p>1. Obtenemos los valores de peso, radio, numero de carga, altura.</p>
      <p>2. Realizamos el calculo:</p>
      <p class="formula"> Formula = peso carga * radio / 9.8 * (3.1416 / 30)<sup>2</sup></p>
      <p class="formula"> = ${pesoCarga} * ${radio} / 9.8 * (${numeroCarga} / ${30})<sup>2</sup></p>
      <p class="formula"> = ${pesoCarga} + (${cargaLateral.toFixed(2)} * (${altura} / ${radio})</p>
      <p class="formula">Fuerza Centrifuga ≈ ${w.toFixed(2)} Kgf</p>
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