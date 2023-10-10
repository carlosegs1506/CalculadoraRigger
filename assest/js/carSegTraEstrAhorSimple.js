//Funcion para el calculo de capacidad de estrobo
function calcularCapacidad() {
  //Obtenemos los valores del campo del formulario
  const capacidadInput = document.getElementById("capacidadEstrobos").value;
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
  } else {
    //En caso de introducir un valor no numerico mostramos un error
    document.getElementById("resultado").innerText =
      "Ingresa una capacidad válida.";
  }
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

// Función para calcular la capacidad segura de trabajo en estrobos lazo simple
function capacidadSeguraAxial() {
  // Obtenemos los valores de los campos del formulario
  let estrobo = parseFloat(document.getElementById("capacidadAxial").value);

  // Validamos los valores ingresados
  if (isNaN(estrobo)) {
    mostrarError(estroboError, "Por favor, ingresa un valor numerico valido.");
    return;
  }

  // Si no hay errores, ocultar los mensajes de error
  ocultarError(estroboError);

  // Realizamos el cálculo
  const capacidadSeguraA = (estrobo * 3) / 4;

  //Mostramos el resultado en pantalla
  document.getElementById("capacidadSeguraEstroboAxial").innerHTML =
    capacidadSeguraA.toFixed(1) + " Ton";

  // Mostramos el proceso y fórmulas utilizadas
  mostrarProceso(estrobo, capacidadSeguraA);
}

// Función para mostrar el proceso y fórmulas utilizadas
function mostrarProceso(estrobo, capacidadSeguraA) {
  const procesoDiv = document.getElementById("procesoSimple");
  procesoDiv.innerHTML = `
    <h3>Proceso y Formulas:</h3>
    <p>1. Obtenemos el valor de capacidad.</p>
    <p>2. Realizamos el calculo:</p>
    <p class="formula">Formula = Capacidad * 3 / 4</p>
    <p class="formula"> = ${estrobo} * ${3} / ${4}</p>
    <p class="formula">Capacidad ≈ ${capacidadSeguraA.toFixed(2)} Ton
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
