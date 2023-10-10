//Funcion para el calculo de capacidad de trabajo segun su %
function calculoCapacidadGrua() {
  // Obtenemos los valores de los campos del formulario
  let pesoBruto = parseFloat(document.getElementById("peso").value);
  let capacidadGrua = parseFloat(document.getElementById("capacidad").value);

  // Validamos los valores ingresados
  if (isNaN(pesoBruto)) {
    mostrarError(pesoError, "Por favor ingrese un valor numerico valido.");
    return;
  }

  if (isNaN(capacidadGrua)) {
    mostrarError(capacidadError, "Por favor ingrese un valor numerico valido.");
    return;
  }

  // Si no hay errores, ocultar los mensajes de error
  ocultarError(pesoError);
  ocultarError(capacidadError);

  // Realizamos el cálculo
  const resultadoCapacidad = (pesoBruto / capacidadGrua) * 100;

  //Mostramos el resultado en pantalla
  document.getElementById("capacidadGrua").innerHTML =
    resultadoCapacidad.toFixed(1) + "%";

  // Mostramos el proceso y fórmulas utilizadas
  mostrarProceso(pesoBruto, capacidadGrua, resultadoCapacidad);
}

// Función para mostrar el proceso y fórmulas utilizadas
function mostrarProceso(pesoBruto, capacidadGrua, resultadoCapacidad) {
  const procesoDiv = document.getElementById("procesoTrabajo");
  procesoDiv.innerHTML = `
    <h3>Proceso y Formulas</h3>
    <p>1. Obtenemos los valores de carga, capacidad grua.</p>
    <p>2. Realizamos el calculo:</p>
    <p class="formula">Formula = Carga / Capacidad Grua * 100% </p>
    <p class="formula"> = ${pesoBruto} * ${capacidadGrua} * ${100}</p>
    <p class="formula">Capacidad ≈ ${resultadoCapacidad.toFixed(2)} % 
  `;
}

//Ejecutamos la funcion
function mostrarError(elemento, mensaje) {
  elemento.textContent = mensaje;
}

function ocultarError(elemento) {
  elemento.textContent = "";
  elemento.style.color = "initial";
}
