//Funcion para el calculo de capacidad de estrobo
function calcularCapacidad() {
  //Obtenemos los valores del campo del formulario
  const capacidadInput = document.getElementById("capacidad").value;
  const capacidad = parseCapacidad(capacidadInput);
  const tipoAmarre = document.getElementById("amarre").value;

  // Validamos los valores ingresados
  if (isNaN(capacidad)) {
    mostrarError(capacidadError, "Por favor, ingresa un valor numerico valido");
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

// Función para calcular la capacidad segura de trabajo en estrobos lazo doble
function capacidadSeguraAxialDoble() {
  // Obtenemos los valores de los campos del formulario
  let lazo = parseFloat(document.getElementById("capacidad").value);
  let altura = parseFloat(document.getElementById("altura").value);
  let largo = parseFloat(document.getElementById("largo").value);

  // Validamos los valores ingresados
  if (isNaN(lazo)) {
    mostrarError(lazoError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(altura)) {
    mostrarError(alturaError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(largo)) {
    mostrarError(largoError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  // Si no hay errores, ocultar los mensajes de error
  ocultarError(lazoError);
  ocultarError(alturaError);
  ocultarError(largoError);

  // Realizamos el cálculo
  const capacidadSegura = ((((lazo * 3) / 4) * altura) / largo) * 2;

  //Mostramos el resultado en pantalla
  document.getElementById("capacidadSeguraEstroboAxialAmarreDoble").innerHTML =
    capacidadSegura.toFixed(1) + " Ton";

  // Mostramos el proceso y fórmulas utilizadas
  mostrarProceso(lazo, altura, largo, capacidadSegura);
}

// Función para mostrar el proceso y fórmulas utilizadas
function mostrarProceso(lazo, altura, largo, capacidadSegura) {
  const procesoDiv = document.getElementById("procesoDoble");
  procesoDiv.innerHTML = `
    <h3>Proceso y Formula:</h3>
    <p>1. Obtenemos el valor de capacidad estrobo.</p>
    <p>2. Obtenemos los valores de capacidad, altura, largo.</p>
    <p>3. Realizamos el calculo:</p>
    <p class="formula">Formula = Capacidad * 3 / 4 * Altura / Largo * 2</p>
    <p class="formula"> = ${lazo} * ${3} / ${4} * ${altura} / ${largo} * ${2}</p>
    <p class="formula">Capacidad ≈ ${capacidadSegura.toFixed(2)} Ton
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
