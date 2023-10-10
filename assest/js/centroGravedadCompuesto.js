// //Funcion para el calculo de centro de gravedad compuesto
// function centroGravedadCompuesto() {
//   let primero = parseFloat(document.getElementById("peso1").value);
//   let distan = parseFloat(document.getElementById("distancia1").value);
//   let segundo = parseFloat(document.getElementById("peso2").value);
//   let distanci = parseFloat(document.getElementById("distancia2").value);
//   let tercero = parseFloat(document.getElementById("peso3").value);
//   let distancia = parseFloat(document.getElementById("distancia3").value);

//   // Validar los valores ingresados
//   if (isNaN(primero)) {
//     mostrarError(primeroError, "Por favor, ingresa un valor numerico valido");
//     return;
//   }

//   if (isNaN(distan)) {
//     mostrarError(distanError, "Por favor, ingresa un valor numerico valido");
//     return;
//   }

//   if (isNaN(segundo)) {
//     mostrarError(segundoError, "Por favor, ingresa un valor numerico valido");
//     return;
//   }

//   if (isNaN(distanci)) {
//     mostrarError(distanciError, "Por favor, ingresa un valor numerico valido");
//     return;
//   }

//   if (isNaN(tercero)) {
//     mostrarError(terceroError, "Por favor, ingresa un valor numerico valido");
//     return;
//   }

//   if (isNaN(distancia)) {
//     mostrarError(distanciaError, "Por favor, ingresa un valor numerico valido");
//     return;
//   }

//   // Si no hay errores, ocultar los mensajes de error
//   ocultarError(primeroError);
//   ocultarError(distanError);
//   ocultarError(segundoError);
//   ocultarError(distanciError);
//   ocultarError(tercerError);
//   ocultarError(distanciaError);

//   // Calculamos las variables necesarias
//   const primerValor = primero * distan;
//   const resultadoPrimerValor = primerValor;
//   const segundoValor = segundo * distanci;
//   const resultadoSegundoValor = segundoValor;
//   const tercerValor = tercero * distancia;
//   const resultadoTercerValor = tercerValor;
//   const resultadoValores =
//     resultadoPrimerValor + resultadoSegundoValor + resultadoTercerValor;
//   const pesoElementos = primero + segundo + tercero;
//   const centroGravedad = resultadoValores / pesoElementos;

//   // Mostramos el resultado en la página
//   document.getElementById("centroGravedad").innerHTML =
//     centroGravedad.toFixed(2) + " Mts";

//   // Mostrar el proceso y fórmulas utilizadas
//   mostrarProceso(
//     primero,
//     segundo,
//     tercero,
//     distan,
//     distanci,
//     distancia,
//     primerValor,
//     segundoValor,
//     tercerValor,
//     resultadoValores,
//     pesoElementos,
//     centroGravedad
//   );
// }

// // Función para mostrar el proceso y fórmulas utilizadas
// function mostrarProceso(
//   primero,
//   segundo,
//   tercero,
//   distan,
//   distanci,
//   distancia,
//   primerValor,
//   segundoValor,
//   tercerValor,
//   resultadoValores,
//   pesoElementos,
//   centroGravedad
// ) {
//   const procesoDiv = document.getElementById("procesoCompuesto");
//   procesoDiv.innerHTML = `
//           <h3>Proceso y Fórmulas:</h3>
//           <p>1. Obtenemos los valores de peso 1, distancia 1, peso 2, distancia 2, peso 3, distancia 3.</p>
//           <p>2. Calculamos el centro de gravedad:</p>
//           <p class="formula"> Suma valores 1 = Peso 1 * Distancia 1</p>
//           <p class="formula"> = ${primero.toFixed(2)} * ${distan.toFixed(
//     2
//   )} = ${primerValor.toFixed(2)} </p>
//           <p class="formula"> Suma valores 2 = Peso 2 * Distancia 2</p>
//           <p class="formula"> = ${segundo.toFixed(2)} * ${distanci.toFixed(
//     2
//   )} = ${segundoValor.toFixed(2)}</p>
//           <p class="formula"> Suma valores 3 = Peso 3 * Distancia 3</p>
//           <p class="formula"> = ${tercero.toFixed(2)} * ${distancia.toFixed(
//     2
//   )} = ${tercerValor.toFixed(2)} </p>
//           <p class="formula"> Suma de pesos totales = peso 1 + peso 2 + peso 3</p>
//           <p class="formula"> = ${primero.toFixed(2)} + ${segundo.toFixed(
//     2
//   )} + ${tercero.toFixed(2)} = ${pesoElementos.toFixed(2)}</p>
//           <p class="formula"> Centro de Gravedad = Suma de Valores / Peso Total</p>
//           <p class="formula"> = ${resultadoValores.toFixed(
//             2
//           )} / ${pesoElementos.toFixed(2)}</p>
//           <p class="formula"> Centro ≈ ${centroGravedad.toFixed(2)} Km/Hora
//         `;
// }

// //Ejecutamos la funcion
// function mostrarError(elemento, mensaje) {
//   elemento.textContent = mensaje;
//   elemento.style.color = "red";
// }

// function ocultarError(elemento) {
//   elemento.textContent = "";
//   elemento.style.color = "initial";
// }

// Funcion para el calculo de centro de gravedad compuesto
function centroGravedadCompuesto() {
  let primero = parseFloat(document.getElementById("peso1").value);
  let distan = parseFloat(document.getElementById("distancia1").value);
  let segundo = parseFloat(document.getElementById("peso2").value);
  let distanci = parseFloat(document.getElementById("distancia2").value);
  let tercero = parseFloat(document.getElementById("peso3").value);
  let distancia = parseFloat(document.getElementById("distancia3").value);

  // Validar los valores ingresados
  if (isNaN(primero)) {
    mostrarError(peso1Error, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(distan)) {
    mostrarError(
      distancia1Error,
      "Por favor, ingresa un valor numerico valido"
    );
    return;
  }

  if (isNaN(segundo)) {
    mostrarError(peso2Error, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(distanci)) {
    mostrarError(
      distancia2Error,
      "Por favor, ingresa un valor numerico valido"
    );
    return;
  }

  if (isNaN(tercero)) {
    mostrarError(peso3Error, "Por favor, ingresa un valor numerico valido");
    return;
  }

  if (isNaN(distancia)) {
    mostrarError(
      distancia3Error,
      "Por favor, ingresa un valor numerico valido"
    );
    return;
  }

  // Si no hay errores, ocultar los mensajes de error
  ocultarError(peso1Error);
  ocultarError(distancia1Error);
  ocultarError(peso2Error);
  ocultarError(distancia2Error);
  ocultarError(peso3Error);
  ocultarError(distancia3Error);

  // Calculamos las variables necesarias
  const primerValor = primero * distan;
  const resultadoPrimerValor = primerValor;
  const segundoValor = segundo * distanci;
  const resultadoSegundoValor = segundoValor;
  const tercerValor = tercero * distancia;
  const resultadoTercerValor = tercerValor;
  const resultadoValores =
    resultadoPrimerValor + resultadoSegundoValor + resultadoTercerValor;
  const pesoElementos = primero + segundo + tercero;
  const centroGravedad = resultadoValores / pesoElementos;

  // Mostramos el resultado en la página
  document.getElementById("centroGravedad").innerHTML =
    centroGravedad.toFixed(2) + " Mts";

  // Mostrar el proceso y fórmulas utilizadas
  mostrarProceso(
    primero,
    segundo,
    tercero,
    distan,
    distanci,
    distancia,
    primerValor,
    segundoValor,
    tercerValor,
    resultadoValores,
    pesoElementos,
    centroGravedad
  );
}

// Función para mostrar el proceso y fórmulas utilizadas
function mostrarProceso(
  primero,
  segundo,
  tercero,
  distan,
  distanci,
  distancia,
  primerValor,
  segundoValor,
  tercerValor,
  resultadoValores,
  pesoElementos,
  centroGravedad
) {
  const procesoDiv = document.getElementById("procesoCompuesto");
  procesoDiv.innerHTML = `
          <h3>Proceso y Fórmulas:</h3>
          <p>1. Obtenemos los valores de peso 1, distancia 1, peso 2, distancia 2, peso 3, distancia 3.</p>
          <p>2. Realizamos el calculo:</p>
          <p class="formula"> Suma valores 1 = Peso 1 * Distancia 1</p>
          <p class="formula"> = ${primero.toFixed(2)} * ${distan.toFixed(
    2
  )} = ${primerValor.toFixed(2)} </p>
          <p class="formula"> Suma valores 2 = Peso 2 * Distancia 2</p>
          <p class="formula"> = ${segundo.toFixed(2)} * ${distanci.toFixed(
    2
  )} = ${segundoValor.toFixed(2)}</p>
          <p class="formula"> Suma valores 3 = Peso 3 * Distancia 3</p>
          <p class="formula"> = ${tercero.toFixed(2)} * ${distancia.toFixed(
    2
  )} = ${tercerValor.toFixed(2)} </p>
          <p class="formula"> Suma de pesos total = peso 1 + peso 2 + peso 3</p>
          <p class="formula"> = ${primero.toFixed(2)} + ${segundo.toFixed(
    2
  )} + ${tercero.toFixed(2)} = ${pesoElementos.toFixed(2)}</p>
          <p class="formula"> Centro de Gravedad = Suma de Valores / Peso Total</p>
          <p class="formula"> = ${resultadoValores.toFixed(
            2
          )} / ${pesoElementos.toFixed(2)}</p>
          <p class="formula"> Centro ≈ ${centroGravedad.toFixed(2)} Mts
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
