// Función para calcular el volumen de la sección A y B de la viga
function calcularVolumenViga() {
  // Obtenemos los valores de los campos del formulario
  let largoViga = parseFloat(
    document.getElementById("largo_ab").value.replace(",", ".")
  );
  let anchoViga = parseFloat(
    document.getElementById("ancho_ab").value.replace(",", ".")
  );
  let espesorViga = parseFloat(
    document.getElementById("espesor_ab").value.replace(",", ".")
  );
  let pesoEspecificoViga = parseFloat(
    document.getElementById("peso_especifico_ab").value.replace(",", ".")
  );
  let largoVigaCentral = parseFloat(
    document.getElementById("largo_c").value.replace(",", ".")
  );
  let anchoVigaCentral = parseFloat(
    document.getElementById("ancho_c").value.replace(",", ".")
  );
  let espesorVigaCentral = parseFloat(
    document.getElementById("espesor_c").value.replace(",", ".")
  );
  let pesoEspecificoVigaCentral = parseFloat(
    document.getElementById("peso_especifico_c").value.replace(",", ".")
  );

  // Validar los valores ingresados
  if (isNaN(largoViga)) {
    mostrarError(largo_abError, "Por favor, ingresa un valor numérico válido.");
    return;
  }

  if (isNaN(anchoViga)) {
    mostrarError(ancho_abError, "Por favor, ingresa un valor numérico válido.");
    return;
  }

  if (isNaN(espesorViga)) {
    mostrarError(
      espesor_abError,
      "Por favor, ingresa un valor numérico válido."
    );
    return;
  }

  if (isNaN(pesoEspecificoViga)) {
    mostrarError(
      peso_especifico_abError,
      "Por favor, ingresa un valor numérico válido."
    );
    return;
  }

  if (isNaN(largoVigaCentral)) {
    mostrarError(largo_cError, "Por favor, ingresa un valor numérico válido.");
    return;
  }

  if (isNaN(anchoVigaCentral)) {
    mostrarError(ancho_abError, "Por favor, ingresa un valor numérico válido.");
    return;
  }

  if (isNaN(espesorVigaCentral)) {
    mostrarError(
      espesor_cError,
      "Por favor, ingresa un valor numérico válido."
    );
    return;
  }

  if (isNaN(pesoEspecificoVigaCentral)) {
    mostrarError(
      peso_especifico_cError,
      "Por favor, ingresa un valor numérico válido."
    );
    return;
  }

  // Si no hay errores, ocultar los mensajes de error
  ocultarError(largo_abError);
  ocultarError(ancho_abError);
  ocultarError(espesor_abError);
  ocultarError(peso_especifico_abError);
  ocultarError(largo_cError);
  ocultarError(ancho_abError);
  ocultarError(espesor_cError);
  ocultarError(peso_especifico_cError);

  // Realizmos el cálculo
  const volumenVigaAB =
    (largoViga * anchoViga * espesorViga * pesoEspecificoViga * 2) / 1000000;
  const volumenVigaC =
    (largoVigaCentral *
      anchoVigaCentral *
      espesorVigaCentral *
      pesoEspecificoVigaCentral) /
    1000000;

  // Realizamos el calculo
  const pesoViga = Math.abs(volumenVigaAB + volumenVigaC);

  //Mostramos en resultado en pantalla
  document.getElementById("vigaH").innerHTML = pesoViga.toFixed(2) + " kg";

  // Mostramos el proceso y fórmulas utilizadas
  mostrarProcesoViga(
    largoViga,
    anchoViga,
    espesorViga,
    pesoEspecificoViga,
    largoVigaCentral,
    anchoVigaCentral,
    espesorVigaCentral,
    pesoEspecificoVigaCentral,
    volumenVigaAB,
    volumenVigaC,
    pesoViga
  );
}

// Función para mostrar el proceso y fórmulas utilizadas para la viga H
function mostrarProcesoViga(
  largoViga,
  anchoViga,
  espesorViga,
  pesoEspecificoViga,
  largoVigaCentral,
  anchoVigaCentral,
  espesorVigaCentral,
  pesoEspecificoVigaCentral,
  volumenVigaAB,
  volumenVigaC,
  pesoViga
) {
  const procesoDiv = document.getElementById("procesoViga");
  procesoDiv.innerHTML = `
    <h3>Proceso y Formulas:</h3>
    <p>1. Obtenemos los valores de largo, ancho, espesor y peso específico de las secciones A y B.</p>
    <p>2. Realizamos el calculo de volumen de la sección A y B:</p>
    <p class="formula">Formula = Largo * Ancho * Espesor * Peso Específico * 2</p>
    <p class="formula"> = ${largoViga} * ${anchoViga} * ${espesorViga} * ${pesoEspecificoViga} * ${2}</p>
    <p class="formula">Volumen A y B = ${volumenVigaAB.toFixed(2)} Kg</p>
    <p>3. Obtenemos los valores de largo, ancho, espesor y peso específico de la sección C.</p>
    <p>4. Realizamos el calculo de volumen de la sección C:</p>
    <p class="formula">Formula  = Largo C * Ancho C * Espesor C * Peso Específico C</p>
    <p class="formula"> = ${largoVigaCentral} * ${anchoVigaCentral} * ${espesorVigaCentral} * ${pesoEspecificoVigaCentral}</p>
    <p class="formula">Volumen C = ${volumenVigaC.toFixed(2)} Kg</p>
    <p>5. Calculamos el peso total de la viga:</p>
    <p class="formula">Formula = |Volumen A y B + Volumen C| </p>
    <p class="formula"> = |${volumenVigaAB} + ${volumenVigaC.toFixed(2)}| </p>
    <p class="formula">Peso Viga ≈ ${pesoViga.toFixed(2)}</p>
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
