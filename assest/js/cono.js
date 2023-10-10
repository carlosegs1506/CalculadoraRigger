//Funcion para el calculo de peso de un cono
function calculoCono() {
  // Obtenemos los valores de los campos del formulario
  let altoCono = parseFloat(document.getElementById("alto").value);
  let dInferior = parseFloat(
    document.getElementById("diametro_inferior").value
  );
  let dSuperior = parseFloat(
    document.getElementById("diametro_superior").value
  );
  let pesoEspecificoCono = parseFloat(
    document.getElementById("peso_material").value
  );

  // Validamos los valores ingresados
  if (isNaN(altoCono)) {
    mostrarError(altoError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(dInferior)) {
    mostrarError(
      diametro_inferiorError,
      "Por favor, ingresa un valor numerico valido"
    );
    return;
  }

  if (isNaN(dSuperior)) {
    mostrarError(
      diametro_superiorError,
      "Por favor, ingresa un valor numerico valido"
    );
    return;
  }

  if (isNaN(pesoEspecificoCono)) {
    mostrarError(
      peso_materialError,
      "Por favor, ingresa un valor numerico valido"
    );
    return;
  }

  // Si no hay errores, ocultar el mensaje de error
  ocultarError(altoError);
  ocultarError(diametro_inferiorError);
  ocultarError(diametro_superiorError);
  ocultarError(peso_materialError);

  // Calculamos las variables necesarias
  const cono1 = ((altoCono / 3) * Math.PI) / 4;
  const cono2 =
    cono1 * (Math.pow(dInferior, 2) + dSuperior ** 2 * dInferior * dSuperior);
  const resultadoCono = cono2 * pesoEspecificoCono;

  //Mostramos el resultado en pantalla
  document.getElementById("cono").innerHTML = resultadoCono.toFixed(2) + " Ton";

  // Mostrar el proceso y fórmulas utilizadas
  mostrarProceso(
    altoCono,
    dInferior,
    dSuperior,
    pesoEspecificoCono,
    resultadoCono
  );
}

// Función para mostrar el proceso y fórmulas utilizadas
function mostrarProceso(
  altoCono,
  dInferior,
  dSuperior,
  pesoEspecificoCono,
  resultadoCono
) {
  const procesoDiv = document.getElementById("procesoCono");
  procesoDiv.innerHTML = `
    <h3>Proceso y Fórmula:</h3>
    <p>1. Obtenemos los valores de alto, diámetro inferior, diámetro superior y peso específico.</p>
    <p>2. Realizamos el calculo:</p>
    <p class="formula">Formula = Alto / 3 * π / 4 * (Diámetro inferior<sup>2</sup> + Diámetro superior<sup>2</sup> * Diámetro inferior * Diámetro superior) * Peso Específico</p>
    <p class="formula"> = (${altoCono} / ${3}) * ${3.14} / ${4}) * (${dInferior}<sup>2</sup> + ${dSuperior}<sup>2</sup>) * ${dInferior} * ${dSuperior}) * ${pesoEspecificoCono}</p>
    <p class="formula">Peso ≈ ${resultadoCono.toFixed(2)} Ton
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
