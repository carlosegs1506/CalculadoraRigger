//Funcion para el calculo de capacidad de estrobo
function calcularCapacidad() {
  //Obtenemos los valores del campo del formulario
  const capacidadInput = document.getElementById("capacidadEstrobo").value;
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

// Función para calcular la capacidad segura de trabajo en estrobos
function capacidadSegura() {
  //Obtenemos los valores ingresados
  let angulada = parseFloat(document.getElementById("angulada").value);
  let largoSeguro = parseFloat(document.getElementById("largo").value);
  let alturaSegura = parseFloat(document.getElementById("altura").value);

  // Validamos los valores ingresados
  if (isNaN(angulada)) {
    mostrarError(anguladaError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(largoSeguro)) {
    mostrarError(largoError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(alturaSegura)) {
    mostrarError(alturaError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  // Si no hay errores, ocultar los mensajes de error
  ocultarError(anguladaError);
  ocultarError(largoError);
  ocultarError(alturaError);

  // Calculamos las variables necesarias
  const capacidadSegura = (angulada * largoSeguro) / alturaSegura;

  // Mostramos el resultado en la página
  document.getElementById("capacidadSeguraEstrobo").innerHTML =
    capacidadSegura.toFixed(1) + " Ton";

  // Mostramos el proceso y fórmulas utilizadas
  proceso45(angulada, largoSeguro, alturaSegura, capacidadSegura);
}

// Función para mostrar el proceso y fórmulas utilizadas
function proceso45(angulada, largoSeguro, alturaSegura, capacidadSegura) {
  const procesoDiv = document.getElementById("proceso45");
  procesoDiv.innerHTML = `
    <h3>Proceso y Formula:</h3>
    <p>1. Obtenemos el valor de capacidad estrobo.</p>
    <p>2. Obtenemos los valores de capacidad, largo, altura.</p>
    <p>2. Realizamos el calculo:</p>
    <p class="formula">Formula = Capacidad * Largo / Altura </p>
    <p class="formula"> = ${angulada} * ${largoSeguro} / ${alturaSegura}</p>
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
