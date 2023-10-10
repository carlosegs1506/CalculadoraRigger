// Función para calcular calculo cubo vacio
function calculoCubo() {
  // Manejador de eventos para el formulario
  let largoExterior = parseFloat(document.getElementById("largo1").value);
  let largoInterior = parseFloat(document.getElementById("largo2").value);
  let anchoExterior = parseFloat(document.getElementById("ancho1").value);
  let anchoInterior = parseFloat(document.getElementById("ancho2").value);
  let altoCubo = parseFloat(document.getElementById("alto").value);
  let peso_material = parseFloat(document.getElementById("peso").value);

  // Validamos los valores ingresados
  if (isNaN(largoExterior)) {
    mostrarError(largo1Error, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(largoInterior)) {
    mostrarError(largo2Error, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(anchoExterior)) {
    mostrarError(ancho1Error, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(anchoInterior)) {
    mostrarError(ancho2Error, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(altoCubo)) {
    mostrarError(altoError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(peso_material)) {
    mostrarError(pesoError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  // Si no hay errores, ocultar los mensajes de error
  ocultarError(largo1Error);
  ocultarError(largo2Error);
  ocultarError(ancho1Error);
  ocultarError(ancho2Error);
  ocultarError(altoError);
  ocultarError(pesoError);

  // Calculamos las variables necesarias
  const volumenExterior = largoExterior * anchoExterior * altoCubo;
  const volumenInterior = largoInterior * anchoInterior * altoCubo;
  const resultadoVolumen = volumenExterior - volumenInterior;
  const pesoTotalCubo = resultadoVolumen * peso_material;

  //Mostramos en pantalla el resultado
  document.getElementById("cubo").innerHTML = pesoTotalCubo.toFixed(1) + " Ton";

  // Mostrar el proceso y fórmulas utilizadas
  mostrarProceso(
    largoExterior,
    largoInterior,
    anchoExterior,
    anchoInterior,
    altoCubo,
    volumenExterior,
    volumenInterior,
    pesoTotalCubo
  );
}

// Función para mostrar el proceso y fórmulas utilizadas
function mostrarProceso(
  largoExterior,
  largoInterior,
  anchoExterior,
  anchoInterior,
  altoCubo,
  volumenExterior,
  volumenInterior,
  pesoTotalCubo
) {
  const procesoDiv = document.getElementById("procesoCubo");
  procesoDiv.innerHTML = `
        <h3>Proceso y Fórmulas:</h3>
        <p>1. Obtenemos los valores de largo exterior, largo interior, ancho exterior, ancho interior, alto, peso especifico.</p>
        <p>2. Realizamos el calculo:</p>
        <p class="formula"> Volumen Exterior = Largo Exterior * Ancho Exterior * Alto</p>
        <p class="formula"> = ${largoExterior} * ${anchoExterior} * ${altoCubo}</p>
        <p class="formula"> Volumen Interior = Largo Interior * Ancho Interior * Alto</p>
        <p class="formula"> = ${largoInterior} * ${anchoInterior} * ${altoCubo}</p>
        <p class="formula"> Volumen = Volumen Exterior - Volumen Interior</p>
        <p class="formula"> = ${volumenExterior} - ${volumenInterior}</p>
        <p class="formula"> Peso = Volumen * Peso Especifico</p>
        <p class="formula">Peso ≈ ${pesoTotalCubo.toFixed(2)} Ton
      `;

  // Mostrar el div de la imagen
  const imagenProcesoDiv = document.getElementById("imagenProceso");
  imagenProcesoDiv.style.display = "block";
}

//Ejecutamos la funcionS
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
