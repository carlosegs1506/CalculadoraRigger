//Funcion para el calculo de tension de eslinga angulada con centro de gravedad movido.
function calcularTensionCentroMovido() {
  // Obtenemos los valores de los campos del formulario
  let carga = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value);
  let dif1 = parseFloat(document.getElementById("dif1").value);
  let dif2 = parseFloat(document.getElementById("dif2").value);
  let largo1 = parseFloat(document.getElementById("largo1").value);
  let largo2 = parseFloat(document.getElementById("largo2").value);

  // Validamos los valores ingresados
  if (isNaN(carga)) {
    mostrarError(pesoError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(altura)) {
    mostrarError(alturaError, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(dif1)) {
    mostrarError(dif1Error, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(dif2)) {
    mostrarError(dif2Error, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(largo1)) {
    mostrarError(largo1Error, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(largo2)) {
    mostrarError(largo2Error, "Por favor, ingresa un valor numerico valido");
    return;
  }

  // Si no hay errores, ocultar los mensajes de error
  ocultarError(pesoError);
  ocultarError(alturaError);
  ocultarError(dif1Error);
  ocultarError(dif2Error);
  ocultarError(largo1Error);
  ocultarError(largo2Error);

  // Realizamos el cálculo
  const tension1 = (carga * dif2 * largo1) / altura / (dif1 + dif2);
  const tension2 = (carga * dif1 * largo2) / altura / (dif1 + dif2);

  //Mostramos el resultado en pantalla
  document.getElementById("tensionMovida1").innerHTML =
    tension1.toFixed(2) + " Kg";
  document.getElementById("tensionMovida2").innerHTML =
    tension2.toFixed(2) + " Kg";

  // Mostramos el proceso y fórmulas utilizadas
  mostrarProceso(carga, altura, dif1, dif2, largo1, largo2, tension1, tension2);
}

// Función  para el proceso de tension de eslinga angulada con centro de gravedad movido
function mostrarProceso(
  carga,
  altura,
  dif1,
  dif2,
  largo1,
  largo2,
  tension1,
  tension2
) {
  const procesoDiv = document.getElementById("procesoMovido");
  procesoDiv.innerHTML = `
    <h3>Fórmula y Proceso:</h3>
    <p>1. Obtenemos los valores de peso, altura, diferencia 1, diferencia 2, largo 1, largo 2.</p>
    <p>2.Realizamos el calculo:</p>
    <p class="formula"> Formula Eslinga 1 = <br> Carga * Diferencia 2 * Largo 1 / <br>Altura  (Diferencia 1 + Diferencia 2)</p>
    <p class="formula"> = ${carga} * ${dif2} * ${largo1} / ${altura} / ${dif1} + ${dif2}</p>
    <p class="formula">Tension 1 = ${tension1.toFixed(2)} Kg</p>
    <hr>
    <p class="formula">Formula Eslinga 2 = <br> Carga * Diferencia 1 * Largo 2 / <br> Altura (Diferencia 1 + Diferencia 2)</p>
    <p class="formula"> = ${carga} * ${dif1} * ${largo2} / ${altura} / ${dif1} + ${dif2}</p>
    <p class="formula">Tension 2 = ${tension2.toFixed(2)} Kg</p>
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
