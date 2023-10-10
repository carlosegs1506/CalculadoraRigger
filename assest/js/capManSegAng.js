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
  elemento.style.color = "red";
}

function ocultarError(elemento) {
  elemento.textContent = "";
  elemento.style.color = "initial";
}

//Funcion para el calculo de capacidad de maniobra segun su angulo
function calcularCapacidadManiobra() {
  // Obtenemos los valores de los campos del formulario
  let capacidad = parseFloat(document.getElementById("capacidad").value);
  let angulo = parseFloat(document.getElementById("angulo").value);
  let cantidadRamal = parseFloat(document.getElementById("cantidad").value);

  // Validamos los valores ingresados
  if (isNaN(capacidad)) {
    mostrarError(
      capacidadError,
      "Por favor, ingresa un valor numérico válido."
    );
    return;
  }

  if (isNaN(angulo)) {
    mostrarError(anguloError, "Por favor, ingresa un valor numérico válido.");
    return;
  }

  if (isNaN(cantidadRamal)) {
    mostrarError(cantidadError, "Por favor, ingresa un valor numérico válido.");
    return;
  }

  //Si no hay errores, ocultar los mensajes de error
  ocultarError(capacidadError);
  ocultarError(anguloError);
  ocultarError(cantidadError);

  // Realizamos el cálculo
  const sinAngulo = Math.sin((angulo * Math.PI) / 180); // Convertimos de grados a radianes
  const capacidadManiobra = capacidad * cantidadRamal * sinAngulo;

  //Mostramos el resultado en pantalla
  document.getElementById(
    "capacidadManiobra"
  ).innerHTML = `${capacidadManiobra.toFixed(1)} kg`;

  // Mostramos el proceso y fórmulas utilizadas
  mostrarProceso(capacidad, angulo, cantidadRamal, capacidadManiobra);
}

// Función para mostrar el proceso y fórmulas utilizadas
function mostrarProceso(capacidad, angulo, cantidadRamal, capacidadManiobra) {
  const procesoDiv = document.getElementById("procesoManiobra");
  procesoDiv.innerHTML = `
    <h3>Proceso y Formulas:</h3>
    <p>1. Obtenemos los valores de capacidad,  angulo, cantidad ramales.</p>
    <p>2. Realizamos el calculo:</p>
    <p class="formula">Formula = Capacidad * Cantidad Ramales * Angulo</p>
    <p class="formula"> = ${capacidad} * ${cantidadRamal} * ${angulo}</p>
    <p class="formula">Capacidad ≈ ${capacidadManiobra.toFixed(2)} Ton
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
