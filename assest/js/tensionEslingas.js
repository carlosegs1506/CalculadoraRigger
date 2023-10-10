//Funcionm para el calculo de angulo de trabajo o maniobra
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
  const angulo = (Math.acos(radio / largo) * 180) / Math.PI;

  //Mostramos el resultado en pantalla
  document.getElementById("resultado").textContent = angulo.toFixed(2) + " °";
}

//Ejecutamos la funcion
function mostrarError(elemento, mensaje) {
  elemento.textContent = mensaje;
}

function ocultarError(elemento) {
  elemento.textContent = "";
  elemento.style.color = "initial";
}

//Funcion para el calculo de tension de eslingas
function calcularTensionEslngas() {
  // Obtenemos los valores de los campos del formulario
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

  // Mostrar el proceso y fórmulas utilizadas
  mostrarProceso(pesoElemento, numEslingas, anguloGrados, tensionEslingas);
}

// Función para mostrar la fórmula y el desarrollo en pantalla
function mostrarProceso(
  pesoElemento,
  numEslingas,
  anguloGrados,
  tensionEslingas
) {
  const formulaDiv = document.getElementById("procesoDesarrollo");

  formulaDiv.innerHTML = `
    <h3>Fórmula y Desarrollo:</h3>
    <p>1. Obtenemos los valores de peso, numero de eslingas, angulo.</p>
    <p>1. Realizamos el calculo:</p>
    <p class="formula">Formula 1 = Peso / Numero Eslingas * Largo / Altura</p>
    <p class="formula">Formula 2 = Peso / (Numero Eslingas * Seno Angulo)</p>
    <p class="formula">Formula 3 = Peso / Numero Eslingas * Factor Angulo</p>
    <p>2. Realizamos el caculo:</p>
    <p class="formula"> = ${pesoElemento} / ${numEslingas} * ${anguloGrados}</p>
    <p class="formula">Tension ≈ ${tensionEslingas.toFixed(2)} Kg</p>
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
