//Funcion para el calculo de tension eslinga en 90° con centro de gravedad movido
function calculoVerticalMovido() {
  // Obtenemos los valores de los campos del formulario
  let pesoCarga = parseFloat(document.getElementById("peso_carga").value);
  let diferencia1 = parseFloat(document.getElementById("diferencia_1").value);
  let diferencia2 = parseFloat(document.getElementById("diferencia_2").value);

  // Validar los valores ingresados
  if (isNaN(pesoCarga)) {
    mostrarError(
      peso_cargaError,
      "Por favor, ingresa un valor numérico válido."
    );
    return;
  }

  if (isNaN(diferencia1)) {
    mostrarError(
      diferenca_1Error,
      "Por favor, ingresa un valor numérico válido."
    );
    return;
  }

  if (isNaN(diferencia2)) {
    mostrarError(
      diferencia_2Error,
      "Por favor, ingresa un valor numérico válido."
    );
    return;
  }

  // Si no hay errores, ocultar los mensajes de error
  ocultarError(peso_cargaError);
  ocultarError(diferenca_1Error);
  ocultarError(diferencia_2Error);

  // Realizamos el cálculo
  const eslinga1 = (pesoCarga * diferencia2) / (diferencia1 + diferencia2);
  const eslinga2 = (pesoCarga * diferencia1) / (diferencia1 + diferencia2);

  //Mostramos el resultado en pantalla
  document.getElementById("tensionVertical1").innerHTML =
    eslinga1.toFixed(2) + " Kg";
  document.getElementById("tensionVertical2").innerHTML =
    eslinga2.toFixed(2) + " Kg";

  // Mostramos el proceso y fórmulas utilizadas
  mostrarProceso(pesoCarga, diferencia1, diferencia2, eslinga1, eslinga2);
}

// Función para mostrar el proceso y fórmulas utilizadas para la viga H
function mostrarProceso(
  pesoCarga,
  diferencia1,
  diferencia2,
  eslinga1,
  eslinga2
) {
  const procesoDiv = document.getElementById("procesoMovido");
  procesoDiv.innerHTML = `
    <h3>Fórmulas y Proceso:</h3>
    <p>1. Obtenemos los valores de carga, diferencia 1, diferencia 2.</p>
    <p>2. Realizamos el calculo:</p>
    <p class="formula"> Formula Eslinga 1 = PesoCarga * Diferencia 2 / (Diferencia 1 + Diferencia 2)</p>
    <p class="formula"> = ${pesoCarga} * ${diferencia2} / ${diferencia1} + ${diferencia2}</p>
    <p class="formula">Tension 1 = ${eslinga1.toFixed(2)} Kg</p>
    <hr></hr>
    <p class="formula">Formula Eslinga 2 = PesoCarga * Diferencia 1 / (Diferencia 1 + Diferencia 2)</p>
    <p class="formula"> = ${pesoCarga} * ${diferencia1} / ${diferencia1} + ${diferencia2}</p>
    <p class="formula">Tension 2 = ${eslinga2.toFixed(2)} Kg</p>
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
