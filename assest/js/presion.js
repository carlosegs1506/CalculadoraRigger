//Funcion para el calculo de peso de un cono
function calculoPresion() {
  // Obtenemos los valores de los campos del formulario
  let fuerzaCilindro = parseFloat(document.getElementById("fuerza").value);
  let alto = parseFloat(document.getElementById("alto").value);
  let ancho = parseFloat(document.getElementById("ancho").value);

  // Validamos los valores ingresados
  if (isNaN(fuerzaCilindro)) {
    mostrarError(fuerzaError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(alto)) {
    mostrarError(altoError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(ancho)) {
    mostrarError(anchoError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  // Si no hay errores, ocultar el mensaje de error
  ocultarError(fuerzaError);
  ocultarError(altoError);
  ocultarError(anchoError);

  // Calculamos las variables necesarias
  const area = alto * ancho;
  const presion = fuerzaCilindro / area;

  //Mostramos el resultado en pantalla
  document.getElementById("resultado").innerHTML = presion.toFixed(2) + " Ton";

  // Mostrar el proceso y fórmulas utilizadas
  mostrarProceso(fuerzaCilindro, alto, ancho, presion);
}

// Función para mostrar el proceso y fórmulas utilizadas
function mostrarProceso(fuerzaCilindro, alto, ancho, presion) {
  const procesoDiv = document.getElementById("procesoPresion");
  procesoDiv.innerHTML = `
        <h3>Proceso y Fórmula:</h3>
        <p>1. Obtenemos los valores de fuerza, alto y largo.</p>
        <p>2. Realizamos el calculo:</p>
        <p class="formula">Formula = Fuerza / Área</p>
        <p class="formula"> = ${fuerzaCilindro} / (${alto} * ${ancho})</p>
        <p class="formula">Presión ≈ ${presion.toFixed(2)} Ton/m²
      `;

  // Mostrar el div de la imagen
  const imagenProcesoDiv = document.getElementById("imagenProceso");
  imagenProcesoDiv.style.display = "block";
}

//Ejecutamos la funcion
function mostrarError(elemento, mensaje) {
  elemento.textContent = mensaje;
}

// Función para ocultar la imagen de proceso
function ocultarImagen() {
  const imagenProcesoDiv = document.getElementById("imagenProceso");
  imagenProcesoDiv.style.display = "none";
}

function ocultarError(elemento) {
  elemento.textContent = "";
  elemento.style.color = "initial";
}
