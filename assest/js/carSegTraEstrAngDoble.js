//Funcion para el calculo de capacidad de estrobo
function calcularCapacidad() {
  //Obtenemos los valores del campo del formulario
  const capacidadInput = document.getElementById("capacidad").value;
  const capacidad = parseCapacidad(capacidadInput);
  const tipoAmarre = document.getElementById("amarre").value;

  // Validamos los valores ingresados
  if (isNaN(capacidad)) {
    mostrarError(
      capacidadError,
      "Por favor, ingresa un valor numerico valido."
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

// Función para calcular la capacidad segura de trabajo en estrobos de canasta angulada doble
function capacidadSeguraVerticalAnguladaDoble() {
  // Obtenemos los valores de los campos del formulario
  let doble = parseFloat(document.getElementById("doble").value);
  let altura = parseFloat(document.getElementById("altura").value);
  let largo = parseFloat(document.getElementById("largo").value);

  // Validamos los valores ingresados
  if (isNaN(doble)) {
    mostrarError(dobleError, "Por favor, ingresa un valor numerico valido.");
    return;
  }

  if (isNaN(altura)) {
    mostrarError(alturaError, "Por favor, ingresa un valor numerico valido.");
    return;
  }

  if (isNaN(largo)) {
    mostrarError(largoError, "Por favor, ingresa un valor numerico valido.");
    return;
  }

  // Si no hay errores, ocultar los mensajes de error
  ocultarError(dobleError);
  ocultarError(alturaError);
  ocultarError(largoError);

  // Realizamos el cálculo
  const capacidadSeguraDoble = ((doble * altura) / largo) * 4;

  //Mostramos el resultado en pantalla
  document.getElementById("capacidadSeguraEstroboAnguladaDoble").innerHTML =
    capacidadSeguraDoble.toFixed(1) + " Ton";

  // Mostramos el proceso y fórmulas utilizadas
  mostrarProceso(doble, altura, largo, capacidadSeguraDoble);
}

// Función para mostrar el proceso y fórmulas utilizadas
function mostrarProceso(doble, altura, largo, capacidadSeguraDoble) {
  const procesoDiv = document.getElementById("procesoDoble");
  procesoDiv.innerHTML = `
    <h3>Proceso y Formula:</h3>
    <p>1. Obtenemos el valor de capacidad.</p>
    <p>2. Obtenemos los valores de capacidad, altura, largo.</p>
    <p>3. Realizamos el calculo:</p>
    <p class="formula">Formula = Capacidad * Altura / Largo * 4</p>
    <p class="formula"> = ${doble} * ${altura} / ${largo} * ${4}</p>
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
