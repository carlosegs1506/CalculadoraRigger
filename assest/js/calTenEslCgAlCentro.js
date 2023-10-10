//Funcion para el calculo de centro de gravedad 90° al centro
function calculoGravedadCentro() {
  // Obtenemos los valores de los campos del formulario
  let pesoCentrado = parseFloat(document.getElementById("peso").value);
  let dife1 = parseFloat(document.getElementById("diferencia1").value);
  let disTotal = parseFloat(document.getElementById("distancia").value);

  // Validamos los valores ingresados
  if (isNaN(pesoCentrado)) {
    mostrarError(pesoError, "Por favor, ingresa un valor numérico válido.");
    return;
  }

  if (isNaN(dife1)) {
    mostrarError(
      diferencia1Error,
      "Por favor, ingresa un valor numérico válido."
    );
    return;
  }

  if (isNaN(disTotal)) {
    mostrarError(
      distanciaError,
      "Por favor, ingresa un valor numérico válido."
    );
    return;
  }

  // Si no hay errores, ocultar los mensajes de error
  ocultarError(pesoError);
  ocultarError(diferencia1Error);
  ocultarError(distanciaError);

  // Realizamos el cálculo
  const resultadoGravedadCentro = (pesoCentrado * dife1) / disTotal;

  //Mostramos en pantalla el resultado
  document.getElementById("gravedadCentro").innerHTML =
    resultadoGravedadCentro.toFixed(2) + " Kg";

  // Mostramos el proceso y fórmulas utilizadas
  mostrarProceso(pesoCentrado, dife1, disTotal, resultadoGravedadCentro);
}

// Función para mostrar el proceso y fórmulas utilizadas para la viga H
function mostrarProceso(
  pesoCentrado,
  dife1,
  disTotal,
  resultadoGravedadCentro
) {
  const procesoDiv = document.getElementById("procesoCentro");
  procesoDiv.innerHTML = `
    <h3>Fórmula y Proceso:</h3>
    <p>1.Obtenemos los valores de peso, diferencia 1, distancia total.</p>
    <p>2.Realizamos el calculo:</p>
    <p class="formula">Formula = Peso * Diferencia 1 / Distancia Total</p>
    <p class="formula"> = ${pesoCentrado} * ${dife1} / ${disTotal}</p>
    <p class="formula"> Tension = ${resultadoGravedadCentro.toFixed(2)} Kg</p>
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
