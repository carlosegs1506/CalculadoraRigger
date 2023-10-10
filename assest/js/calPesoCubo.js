//Funcion para el calculo del peso de un cubo
function calcularPesoCubo() {
  // Obtenemos los valores de los campos del formulario
  let largo = parseFloat(document.getElementById("largo").value);
  let ancho = parseFloat(document.getElementById("ancho").value);
  let alto = parseFloat(document.getElementById("alto").value);
  let pesoEspecifico = parseFloat(
    document.getElementById("peso_especifico").value
  );

  // Validar los valores ingresados
  if (isNaN(largo)) {
    mostrarError(largoError, "Por favor, ingresa un valor numérico válido.");
    return;
  }

  if (isNaN(ancho)) {
    mostrarError(anchoError, "Por favor, ingresa un valor numérico válido.");
    return;
  }

  if (isNaN(alto)) {
    mostrarError(altoError, "Por favor, ingresa un valor numérico válido.");
    return;
  }

  if (isNaN(pesoEspecifico)) {
    mostrarError(
      peso_especificoError,
      "Por favor, ingresa un valor numérico válido."
    );
    return;
  }

  // Si no hay errores, ocultar los mensajes de error
  ocultarError(largoError);
  ocultarError(anchoError);
  ocultarError(altoError);
  ocultarError(peso_especificoError);

  // Realizar el cálculo
  const pesoCubo = largo * ancho * alto * pesoEspecifico;

  //Mostramos el resultado en pantalla
  document.getElementById("pesoCubo").innerHTML = pesoCubo.toFixed(1) + " Ton";

  // Mostramos el proceso y fórmulas utilizadas
  mostrarProceso(largo, ancho, alto, pesoEspecifico, pesoCubo);
}

// Función para mostrar el proceso y fórmulas utilizadas para la viga H
function mostrarProceso(largo, ancho, alto, pesoEspecifico, pesoCubo) {
  const procesoDiv = document.getElementById("procesoCubo");
  procesoDiv.innerHTML = `
    <h3>Fórmula y Proceso:</h3>
    <p>1. Obtenemos los valores de largo, ancho, alto, peso especifico.</p>
    <p>2.Realizamos el calculo:</p>
    <p class="formula">Formula = Largo * Ancho * Alto * Peso Especifico</p>
    <p class="formula"> = ${largo} * ${ancho} * ${alto} * ${pesoEspecifico}</p>
    <p class="formula">Peso = ${pesoCubo.toFixed(1)} Ton</p>
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
