//Funcion para el calculo de tension eslina lazo simple
function calculoTensionAhorcadoSimple() {
  // Obtenemos los valores de los campos del formulario
  let capacidadAhorcado = parseFloat(
    document.getElementById("capacidad").value
  );

  // Validamos los valores ingresados
  if (isNaN(capacidadAhorcado)) {
    mostrarError(
      capacidadError,
      "Por favor, ingresa un valor numerico valido."
    );
    return;
  }

  // Si no hay errores, ocultar los mensajes de error
  ocultarError(capacidadError);

  // Realizamos el cálculo
  const tensionAhorcadoSimple = capacidadAhorcado * 0.75;

  //Mostramos en resultado en pantalla
  document.getElementById("ahorcadoSimple").innerHTML =
    tensionAhorcadoSimple.toFixed(2) + " kg";

  // Mostramos el proceso y fórmulas utilizadas
  mostrarProceso(capacidadAhorcado, tensionAhorcadoSimple);
}

// Función para mostrar el proceso y fórmulas utilizadas
function mostrarProceso(capacidadAhorcado, tensionAhorcadoSimple) {
  const procesoDiv = document.getElementById("procesoSimple");
  procesoDiv.innerHTML = `
    <h3>Proceso y Formula:</h3>
    <p>1. Obtenemos el valor de capacidad.</p>
    <p class="formula"> Formula = Capacidad Maniobra * 0.75</p>
    <p class="formula"> = ${capacidadAhorcado} * ${0.75}</p>
    <p class="formula">Capacidad ≈ ${tensionAhorcadoSimple.toFixed(2)}
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
