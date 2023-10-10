//Funcion para el calculo de capacidad de grillete
function calcularCapacidad() {
  //Obtenemos los valores ingresados
  const capacidadInput = document.getElementById("capacidad").value;
  const capacidad = parseCapacidad(capacidadInput);

  // Validar los valores ingresados
  if (isNaN(capacidad)) {
    mostrarError(
      capacidadError,
      "Por favor, ingresa un valor numérico válido."
    );
    return;
  }

  // Si no hay errores, ocultar los mensajes de error
  ocultarError(capacidadError);

  // Realizarmos el cálculo
  if (capacidad !== null) {
    const resultado = capacidad * capacidad * 8.5;

    //Mostramos el resultado en pantalla
    document.getElementById("resultado").innerText = `${resultado.toFixed(
      1
    )} Ton`;

    mostrarProceso(capacidad, resultado);
  } else {
    //En caso de introducir un valor no  numerico mostramos error
    document.getElementById("resultado").innerText =
      "Ingresa un valor numerico.";
  }
}

// Función para mostrar la fórmula y el desarrollo en pantalla
function mostrarProceso(capacidad, resultado) {
  const formulaDiv = document.getElementById("procesoDesarrollo");
  formulaDiv.innerHTML = `
    <h3>Fórmula y Desarrollo:</h3>
    <p>1. Obtenemos el valor de capacidad.</p>
    <p class="formula">Formula = Capacidad * Capacidad * 8.5</p>
    <p>2. Realizamos el calculo:</p>
    <p class="formula"> = ${capacidad} * ${capacidad} * ${8.5}</p>
  <p class="formula">Capacidad ≈ ${resultado.toFixed(2)} Ton</p>
  `;
}

//Ejecutamos la funcion
function parseCapacidad(capacidadInput) {
  try {
    // Intentamos evaluar la expresión para admitir cualquier formato numérico o fraccional
    return eval(capacidadInput);
  } catch (error) {
    return null;
  }
}

// Función para mostrar mensajes de error
function mostrarError(elemento, mensaje) {
  elemento.textContent = mensaje;
}

// Función para ocultar mensajes de error
function ocultarError(elemento) {
  elemento.textContent = "";
  elemento.style.color = "initial";
}
