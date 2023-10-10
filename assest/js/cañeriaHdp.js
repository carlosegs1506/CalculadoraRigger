//Funcion para convertir unidades de longitud yb peso
function convertirUnidades() {
  //Obtenemos los valores de los campos del formulario
  const valor = parseFloat(document.getElementById("valor").value);
  const unidadesOrigen = document.getElementById("unidadesOrigen").value;
  const unidadesDestino = document.getElementById("unidadesDestino").value;
  const resultadoInput = document.getElementById("resultado");

  //Validamos los valores ingresados
  if (isNaN(valor)) {
    mostrarError(valorError, "Por favor, ingresa un valor numerico valido.");
    return;
  }

  // Si no hay errores, ocultar los mensajes de error
  ocultarError(valorError);

  let resultado = 0;

  // Realizarmos el cálculo
  if (unidadesOrigen === "milimetros") {
    if (unidadesDestino === "metros") {
      resultado = valor / 1000;
    } else if (unidadesDestino === "centimetros") {
      resultado = valor / 10;
    } else if (unidadesDestino === "pulgadas") {
      resultado = valor / 25.4;
    }
  }
  if (unidadesOrigen === "centimetros") {
    if (unidadesDestino === "metros") {
      resultado = valor / 100;
    } else if (unidadesDestino === "milimetros") {
      resultado = valor * 10;
    } else if (unidadesDestino === "pulgadas") {
      resultado = valor * 0.394;
    }
  }
  if (unidadesOrigen === "metros") {
    if (unidadesDestino === "milimetros") {
      resultado = valor * 1000;
    } else if (unidadesDestino === "centimetros") {
      resultado = valor * 100;
    } else if (unidadesDestino === "pulgadas") {
      resultado = valor * 25.4;
    }
  } else if (unidadesOrigen === "pies") {
    if (unidadesDestino === "metros") {
      resultado = valor * 0.3048;
    }
  } else if (unidadesOrigen === "pulgadas") {
    if (unidadesDestino === "metros") {
      resultado = valor * 0.0254;
    } else if (unidadesDestino === "milimetros") {
      resultado = valor / 0.0394;
    }
  } else if (unidadesOrigen === "libras") {
    if (unidadesDestino === "kilogramos") {
      resultado = valor * 0.453592;
    } else if (unidadesDestino === "toneladas") {
      resultado = valor * 0.000453592;
    }
  } else if (unidadesOrigen === "kilogramos") {
    if (unidadesDestino === "libras") {
      resultado = valor * 2.20462;
    } else if (unidadesDestino === "toneladas") {
      resultado = valor * 0.001;
    }
  }

  //Mostramos en pantalla el resultado
  resultadoInput.value = `${resultado.toFixed(2)} ${unidadesDestino}`;
}

//Ejecutamos la funcion
function mostrarError(elemento, mensaje) {
  elemento.textContent = mensaje;
  elemento.style.color = "red";
}

function ocultarError(elemento) {
  elemento.textContent = "";
  elemento.style.color = "initial";
}

//Funcion para el calculo de una cañeria HDP
function calculoCañeriaHdp() {
  //Obtenemos los valores de los campos del formulario
  let diametroCañeria = parseFloat(document.getElementById("diametro").value);
  let espesorCañeria = parseFloat(document.getElementById("espesor").value);
  let largoCañeria = parseFloat(document.getElementById("largo").value);

  // Validamos los valores ingresados
  if (isNaN(diametroCañeria)) {
    mostrarError(diametroError, "Por favor, ingresa un valor numérico válido.");
    return;
  }

  if (isNaN(espesorCañeria)) {
    mostrarError(espesorError, "Por favor, ingresa un valor numérico válido.");
    return;
  }

  if (isNaN(largoCañeria)) {
    mostrarError(largoError, "Por favor, ingresa un valor numérico válido.");
    return;
  }

  // Si no hay errores, ocultar los mensajes de error
  ocultarError(diametroError);
  ocultarError(espesorError);
  ocultarError(largoError);

  // Realizamos el cálculo
  const resultadoCañeriaHdp = Math.abs(
    (diametroCañeria * Math.PI * espesorCañeria * largoCañeria * 1.043) /
      1000000
  );

  //Mostramos el resultado en pantalla
  document.getElementById("cañeriaHdp").innerHTML =
    resultadoCañeriaHdp.toFixed(1) + " Kg";

  // Mostramos el proceso y fórmulas utilizadas
  mostrarProceso(
    diametroCañeria,
    espesorCañeria,
    largoCañeria,
    resultadoCañeriaHdp
  );
}

// Función  para el proceso de tension de eslinga angulada con centro de gravedad movido
function mostrarProceso(
  diametroCañeria,
  espesorCañeria,
  largoCañeria,
  resultadoCañeriaHdp
) {
  const procesoDiv = document.getElementById("procesoHdp");
  procesoDiv.innerHTML = `
    <h3>Fórmula y Proceso:</h3>
    <p>1. Obtenemos los valores de diametro, espesor, largo.</p>
    <p>2. Realizamos el calculo:</p>
    <p class="formula">Formula = Diametro * PI * Espesor * Largo * Constante (1.043)</p>
    <p class="formula"> = ${Math.PI.toFixed(
      2
    )} * ${diametroCañeria} * ${espesorCañeria} * ${largoCañeria} * ${1.043}</p>
    <p class="formula">Peso Cañeria = ${resultadoCañeriaHdp.toFixed(2)} Kg</p>
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
