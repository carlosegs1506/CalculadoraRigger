//Calculo de carga frontal
function calcularLineasCarga() {
    // Obtenemos los valores de los campos del formulario
    let cargaElemento = parseFloat(document.getElementById('carga').value);
    let capacidadCable = parseFloat(document.getElementById('capacidad').value);

    // Validamos los valores ingresados
    if (isNaN(cargaElemento)) {
        mostrarError(cargaError, "Por favor, ingresa un valor numerico valido");
        return;
      }
    
      if (isNaN(capacidadCable)) {
        mostrarError(capacidadError, "Por favor, ingresa un valor numerico valido");
        return;
      }
    
        // Si no hay errores, ocultamos el mensaje de error
      ocultarError(cargaError);
      ocultarError(capacidadError);

    // Cálculo de la presión dinámica en kg/m^2
    const lineasCarga = cargaElemento / capacidadCable;

    // Mostramos el resultado en la pantalla
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML =  '<p>Líneas de Carga: ' + lineasCarga.toFixed(2) + '</p>';

     // Mostrar el proceso y fórmulas utilizadas
  mostrarProceso(cargaElemento, capacidadCable, lineasCarga);
}

// Función para mostrar el proceso y fórmulas utilizadas
function mostrarProceso(cargaElemento, capacidadCable, lineasCarga) {
  const procesoDiv = document.getElementById("procesoPoleas");
  procesoDiv.innerHTML = `
      <h3>Proceso y Fórmulas:</h3>
      <p>1. Obtenemos los valores de carga, capacdad cable.</p>
      <p>2. Realizamos el calculo:</p>
      <p class="formula"> Formula = carga / capacidad cable</p>
      <p class="formula"> = ${cargaElemento} / ${capacidadCable}</p>
      <p class="formula">Lineas de carga ≈ ${lineasCarga.toFixed(2)}</p>
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