// Funcion para el calculo de capacidad de estrobo
function calcularCapacidad() {
  // Obtenemos los valores del campo del formulario
  const capacidadInput = document.getElementById("capacidad").value;
  const capacidad = parseCapacidad(capacidadInput);
  const tipoAmarre = document.getElementById("amarre").value;

  // Validar los valores ingresados
  if (isNaN(capacidad)) {
    mostrarError(
      document.getElementById("capacidadError"),
      "Por favor, ingresa un valor numérico válido."
    );
    return;
  }

  // Si no hay errores, ocultar los mensajes de error
  ocultarError(document.getElementById("capacidadError"));

  // Calculamos la capacidad según su tipo de amarre
  if (capacidad !== null) {
    let resultado;
    if (tipoAmarre === "lazo") {
      resultado = capacidad * capacidad * 9.72 * 0.75;
    } else if (tipoAmarre === "canasta") {
      resultado = capacidad * capacidad * 9.72 * 2;
    } else {
      resultado = capacidad * capacidad * 9.72;
    }

    // Mostramos los resultados en pantalla
    document.getElementById("resultado").innerText = `${resultado.toFixed(
      2
    )} Ton`;
  } else {
    // En caso de introducir un valor no numérico, mostramos un error
    document.getElementById("resultado").innerText =
      "Ingresa una capacidad válida.";
  }
}

// Ejecutamos la función
function parseCapacidad(capacidadInput) {
  try {
    // Intentamos evaluar la expresión para admitir cualquier formato numérico o fraccional
    return eval(capacidadInput);
  } catch (error) {
    return null;
  }
}

// Función para calcular la capacidad segura de trabajo en estrobos de canasta vertical simple
function capacidadSeguraVerticalSimple() {
  // Obtenemos los valores de los campos del formulario
  let simple = parseFloat(document.getElementById("axial").value);

  // Validar los valores ingresados
  if (isNaN(simple)) {
    mostrarError(
      document.getElementById("axialError"),
      "Por favor, ingresa un valor numérico válido."
    );
    return;
  }

  // Si no hay errores, ocultar los mensajes de error
  ocultarError(document.getElementById("axialError"));

  // Realizar el cálculo
  const capacidadSeguraVertical = simple * 2;

  // Mostramos el resultado en pantalla
  document.getElementById("capacidadSeguraEstroboVerticalSimple").innerHTML =
    capacidadSeguraVertical.toFixed(1) + " Ton";

  // Mostramos el proceso y fórmulas utilizadas
  mostrarProceso(simple, capacidadSeguraVertical);
}

// Función para mostrar el proceso y fórmulas utilizadas
function mostrarProceso(simple, capacidadSeguraVertical) {
  const procesoDiv = document.getElementById("procesoDesarrollo");
  procesoDiv.innerHTML = `
    <h3>Proceso y Fórmula:</h3>
    <p>1. Obtenemos el valor de capacidad.</p>
    <p>2. Realizamos el cálculo:</p>
    <p class="formula">Fórmula = Capacidad * 2;</p>
    <p class="formula"> = ${simple} * ${2}</p>
    <p class="formula">Capacidad ≈ ${capacidadSeguraVertical.toFixed(2)} Ton</p>
  `;
}

// Función para mostrar un mensaje de error
function mostrarError(elemento, mensaje) {
  elemento.textContent = mensaje;
}

function ocultarError(elemento) {
  elemento.textContent = "";
  elemento.style.color = "initial";
}
