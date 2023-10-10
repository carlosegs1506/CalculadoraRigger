//Funcion para el calculo de capacidad de estrobo
function calcularCapacidad() {
  //Obtenemos los valores del campo del formulario
  const capacidadInput = document.getElementById("capacidad").value;
  const capacidad = parseCapacidad(capacidadInput);
  const tipoAmarre = document.getElementById("amarre").value;

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

  // Calculamos la capacidad segun su tipo de amarre
  if (capacidad !== null) {
    let resultado;
    if (tipoAmarre === "lazo") {
      resultado = capacidad * capacidad * 9.72 * 0.75;
    } else if (tipoAmarre === "canasta") {
      resultado = capacidad * capacidad * 9.72 * 2;
    } else {
      resultado = capacidad * capacidad * 9.72;
    }

    //Mostramos los resultados en pantalla
    document.getElementById("resultado").innerText = `${resultado.toFixed(
      2
    )} Ton`;
    // Mostramos el proceso y fórmulas utilizadas
    mostrarProceso(capacidadInput, capacidad, resultado);
  } else {
    //En caso de introducir un valor no numerico mostramos un error
    document.getElementById("resultado").innerText =
      "Ingresa una capacidad válida.";
  }
}

// Función para mostrar el proceso y fórmulas utilizadas
function mostrarProceso(capacidadInput, capacidad, resultado) {
  const procesoDiv = document.getElementById("procesoEstrobo");
  procesoDiv.innerHTML = `
    <h3>Proceso y Formula:</h3>
    <p>1. Obtenemos los valores de capacidad, tipo de amarre.</p>
    <p>2. Realizamos el calculo:</p>
    <p class="formula">Formula = Capacidad * Capacidad * 9.72 </p>
    <p class="formula"> = ${capacidadInput} * ${capacidad} *  ${9.72} </p>
    <p class="formula">Capacidad ≈ ${resultado.toFixed(2)} Ton
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
