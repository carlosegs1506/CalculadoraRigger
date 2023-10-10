//Funcion para el calculo de capacidad de estrobo
function calcularCapacidad() {
  //Obtenemos los valores del campo del formulario
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

// Función para calcular la capacidad segura de trabajo en estrobos de canasta vertical doble
function capacidadSeguraVerticalDoble() {
  // Obtenemos los valores de los campos del formulario
  let capacidadAxialDoble = parseFloat(document.getElementById("doble").value);

  // Validar los valores ingresados
  if (isNaN(capacidadAxialDoble)) {
    mostrarError(
      document.getElementById("dobleError"),
      "Por favor, ingresa un valor numérico válido."
    );
    return;
  }

  // Si no hay errores, ocultar los mensajes de error
  ocultarError(document.getElementById("dobleError"));

  // Realizar el cálculo
  const capacidadSeguraDoble = capacidadAxialDoble * 4;

  //Mostramos el resultado en pantalla
  document.getElementById("capacidadSeguraEstroboVerticalDoble").innerHTML =
    capacidadSeguraDoble.toFixed(1) + " Ton";

  // Función para mostrar el proceso y fórmulas utilizadas
  mostrarProceso(capacidadAxialDoble, capacidadSeguraDoble);
}

// Función para mostrar el proceso y fórmulas utilizadas
function mostrarProceso(capacidadAxialDoble, capacidadSeguraDoble) {
  const procesoDiv = document.getElementById("procesoDoble");
  procesoDiv.innerHTML = `
    <h3>Proceso y Formula:</h3>
    <p>1. Obtenemos el valor de capacidad</p>
    <p>2. Realizamos el calculo:</p>
    <p class="formula">Formula = Capacidad * 4</p>
    <p class="formula"> = ${capacidadAxialDoble} * ${4}</p>
    <p class="formula">Capacidad ≈ ${capacidadSeguraDoble.toFixed(2)} Ton
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
