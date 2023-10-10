//Funcion para el calculo de un tubo de pared gruesa
function calcularTuboParedConcreto() {
  //Obtenemos los valores de los campos del formulario
  let diametroExterior = parseFloat(document.getElementById("diametro1").value);
  let diametroInterior = parseFloat(document.getElementById("diametro2").value);
  let largo = parseFloat(document.getElementById("largo").value);
  let pesoEspecifico = parseFloat(document.getElementById("peso").value);
  let radioExterior = Math.pow(diametroExterior, 2) / 4;
  let radioInterior = Math.pow(diametroInterior, 2) / 4;

  // Validamos los valores ingresados
  if (isNaN(diametroExterior)) {
    mostrarError(diametro1Error, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(diametroInterior)) {
    mostrarError(diametro2Error, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(largo)) {
    mostrarError(largoError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(pesoEspecifico)) {
    mostrarError(pesoError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  // Si no hay errores, ocultar el mensaje de error
  ocultarError(diametro1Error);
  ocultarError(diametro2Error);
  ocultarError(largoError);
  ocultarError(pesoError);

  // Calculamos las variables necesarias
  const volumenExterior = radioExterior * Math.PI * largo;
  const volumenInterior = radioInterior * Math.PI * largo;
  const volumenTotal = volumenExterior - volumenInterior;
  const pesoTubo = volumenTotal * pesoEspecifico;

  // Mostramos el resultado en la página
  document.getElementById("calcularTuboConcreto").innerHTML =
    pesoTubo.toFixed(1) + " Ton";

  // Mostrar el proceso y fórmulas utilizadas
  mostrarProceso(
    largo,
    pesoEspecifico,
    radioExterior,
    radioInterior,
    volumenExterior,
    volumenInterior,
    volumenTotal,
    pesoTubo
  );
}

function mostrarProceso(
  largo,
  pesoEspecifico,
  radioExterior,
  radioInterior,
  volumenExterior,
  volumenInterior,
  volumenTotal,
  pesoTubo
) {
  const formulaDiv = document.getElementById("procesoDesarrollo");

  formulaDiv.innerHTML = `
    <h3>Fórmula y Desarrollo:</h3>
    <p>1. Obtenemos los valores de diametro exterior, diametro interior, longitud, peso especifico.</p>
    <p>2. Realizamos el calculo:</p>
    <p class="formula">Formula Volumen Exterior = Diametro Exterior * PI * largo</p>
    <p class="formula"> = ${radioExterior.toFixed(2)} * ${Math.PI.toFixed(
    2
  )} * ${largo} = ${volumenExterior.toFixed(2)}</p>
    <p class="formula">Formula Volumen Interior = Diametro Interior * PI * largo</p>
    <p class="formula"> = ${radioInterior.toFixed(2)} * ${Math.PI.toFixed(
    2
  )} * ${largo} = ${volumenInterior.toFixed(2)}</p>
    <p class="formula">Volumen total = Volomen Exterior - Volumen Interior</p>
    <p class="formula"> = ${volumenExterior.toFixed(
      2
    )} - ${volumenInterior.toFixed(2)} = ${volumenTotal.toFixed(2)}</p>
    <p class="formula">Peso = Volomen Total * Peso Especifico</p>
    <p class="formula"> = ${volumenTotal.toFixed(2)} * ${pesoEspecifico.toFixed(
    2
  )} = ${pesoTubo.toFixed(2)} Ton</p>
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
