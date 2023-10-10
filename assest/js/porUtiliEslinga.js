//Funcion para el calculo de trabajo
function calcularAngulo() {
  //Obtenemos los valores ingresados
  let radio = parseFloat(document.getElementById("radio").value);
  let largo = parseFloat(document.getElementById("largo").value);

  // Validamos los valores ingresados
  if (isNaN(radio)) {
    mostrarError(radioError, "Por favor, ingresa un valor numérico válido.");
    return;
  }

  if (isNaN(largo)) {
    mostrarError(largoError, "Por favor, ingresa un valor numérico válido.");
    return;
  }

  // Si no hay errores, ocultamos el mensaje de error
  ocultarError(radioError);
  ocultarError(largoError);

  // Calculamos las variables necesarias
  const angulo = (Math.acos(radio / largo) * 180) / Math.PI;

  // Mostramos el resultado en la página
  document.getElementById("resultado").textContent = angulo.toFixed(2) + " °";
}

//Funcion para el calculo de tension de eslingas
function calcularTensionEslngas() {
  //Obtenemos los valores
  let pesoElemento = parseFloat(document.getElementById("peso").value);
  let numEslingas = parseFloat(document.getElementById("numero").value);
  let anguloGrados = parseFloat(document.getElementById("angulo").value);

  // Validamos los valores ingresados
  if (isNaN(pesoElemento)) {
    mostrarError(pesoError, "Por favor, ingresa un valor numérico válido.");
    return;
  }

  if (isNaN(numEslingas)) {
    mostrarError(numeroError, "Por favor, ingresa un valor numérico válido.");
    return;
  }

  if (isNaN(anguloGrados)) {
    mostrarError(anguloError, "Por favor, ingresa un valor numérico válido.");
    return;
  }

  // Si no hay errores, ocultamos el mensaje de error
  ocultarError(pesoError);
  ocultarError(numeroError);
  ocultarError(anguloError);

  // Calculamos las variables necesarias
  const anguloRadianes = anguloGrados * (Math.PI / 180);
  const tensionEslingas =
    pesoElemento / (numEslingas * Math.sin(anguloRadianes));

  // Mostramos el resultado en la página
  document.getElementById("tensionEslingas").innerHTML =
    tensionEslingas.toFixed(2) + " kg";
}

//Ejecutamos la funcion
function mostrarError(elemento, mensaje) {
  elemento.textContent = mensaje;
}

function ocultarError(elemento) {
  elemento.textContent = "";
  elemento.style.color = "initial";
}

//Funcion para el calculo de %utilizacion de eslingas
function calculoUtilizacionEslingas() {
  let tensionEslinga = parseFloat(document.getElementById("tension").value);
  let capacidadEslinga = parseFloat(document.getElementById("capacidad").value);

  // Validar los valores ingresados
  if (isNaN(tensionEslinga)) {
    mostrarError(tensionError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(capacidadEslinga)) {
    mostrarError(capacidadError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  // Si no hay errores, ocultar los mensajes de error
  ocultarError(tensionError);
  ocultarError(capacidadError);

  // Calculamos las variables necesarias
  const calculoPorcentajeUtilizacion =
    (tensionEslinga / capacidadEslinga) * 100; //perimetro 1.9

  // Mostramos el resultado en la página
  document.getElementById("utilizacionEslingas").innerHTML =
    calculoPorcentajeUtilizacion.toFixed(2);

  // Mostrar el proceso y fórmulas utilizadas
  mostrarProceso(
    tensionEslinga,
    capacidadEslinga,
    calculoPorcentajeUtilizacion
  );
}

// Función para mostrar la fórmula y el desarrollo en pantalla
function mostrarProceso(
  tensionEslinga,
  capacidadEslinga,
  calculoPorcentajeUtilizacion
) {
  const formulaDiv = document.getElementById("procesoDesarrollo");

  formulaDiv.innerHTML = `
    <h3>Fórmula y Desarrollo:</h3>
    <p>1. Obtenemos los valores de angulo, tension, capacidad.</p>
    <p>2. Realizamos el calculo:</p>
    <p class="formula">Formula = Tension / Capacidad * 100</p>
    <p class="formula"> = ${tensionEslinga} / ${capacidadEslinga} * ${100}</p>
    <p class="formula">% Utilizacion ≈ ${calculoPorcentajeUtilizacion.toFixed(
      2
    )}</p>
  `;
}

//Ejecutamos la funcion
function mostrarError(elemento, mensaje) {
  elemento.textContent = mensaje;
}

function ocultarError(elemento) {
  elemento.textContent = "";
  elemento.style.color = "initial";
}
