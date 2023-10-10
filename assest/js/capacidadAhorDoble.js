// Función para calcular el ángulo de trabajo
function calcularAngulo() {
  // Obtenemos los valores de los campos del formulario
  let radio = parseFloat(document.getElementById("radio").value);
  let largo = parseFloat(document.getElementById("largo").value);

  // Validar los valores ingresados
  if (isNaN(radio)) {
    mostrarError(radioError, "Por favor, ingresa un valor numérico válido.");
    return;
  }

  if (isNaN(largo)) {
    mostrarError(largoError, "Por favor, ingresa un valor numérico válido.");
    return;
  }

  // Validación adicional de radio < largoPluma
  if (radio >= largo) {
    mostrarError(radioError, "El radio debe ser menor que el largo.");
    return;
  }

  // Si no hay errores, ocultar los mensajes de error
  ocultarError(radioError);
  ocultarError(largoError);

  // Realizar el cálculo
  const anguloRadianes = Math.acos(radio / largo);
  const anguloGrados = (anguloRadianes * 180) / Math.PI;

  // Mostrar el resultado en pantalla
  document.getElementById("resultadoAngulo").textContent =
    anguloGrados.toFixed(2) + " °";
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

//Funcion para el calculo de capacidad eslinga lazo doble
function calculoTensionAhorcadoDoble() {
  //Obtenemos los valores de los campos del formulario
  let diametroPerimetro = parseFloat(document.getElementById("diametro").value);
  let largoManiobra = parseFloat(document.getElementById("largo1").value);
  let radioManiobra = parseFloat(document.getElementById("radio1").value);
  let capacidadManiobra = parseFloat(
    document.getElementById("capacidad").value
  );
  let anguloManiobra = parseFloat(document.getElementById("angulo").value);

  // Validar los valores ingresados
  if (isNaN(diametroPerimetro)) {
    mostrarError(diametroError, "Por favor ingrese un valor numerico valido");
    return;
  }

  if (isNaN(largoManiobra)) {
    mostrarError(largo1Error, "Por favor ingrese un valor numerico valido");
    return;
  }

  if (isNaN(radioManiobra)) {
    mostrarError(radio1Error, "Por favor ingrese un valor numerico valido");
    return;
  }

  if (isNaN(capacidadManiobra)) {
    mostrarError(capacidadError, "Por favor ingrese un valor numerico valido");
    return;
  }

  if (isNaN(anguloManiobra)) {
    mostrarError(anguloError, "Por favor ingrese un valor numerico valido");
    return;
  }

  // Si no hay errores, ocultar los mensajes de error
  ocultarError(diametroError);
  ocultarError(largo1Error);
  ocultarError(radio1Error);
  ocultarError(capacidadError);
  ocultarError(anguloError);

  // Realizar el cálculo
  const calculoPerimetro = diametroPerimetro * Math.PI; // Perímetro
  const perdidaEstrobo = largoManiobra - calculoPerimetro; // Pérdida de estrobo
  const anguloRadianes = Math.acos(radioManiobra / largoManiobra);
  const anguloManiobraDoble = (anguloRadianes * 180) / Math.PI; // Ángulo
  const capacidadBruta = capacidadManiobra * Math.sin(anguloRadianes);
  const capacidadReal = (capacidadBruta * 75) / 100;

  //Mostramos el resultado en pantalla
  document.getElementById("capacidadRealAhorcadoDoble").innerHTML =
    capacidadReal.toFixed(2) + " Ton";

  // Mostramos el proceso y fórmulas utilizadas
  mostrarProceso(
    diametroPerimetro,
    calculoPerimetro,
    perdidaEstrobo,
    anguloManiobraDoble,
    capacidadBruta,
    capacidadReal
  );
}

// Función para mostrar el proceso y fórmulas utilizadas
function mostrarProceso(
  diametroPerimetro,
  calculoPerimetro,
  perdidaEstrobo,
  anguloManiobraDoble,
  capacidadBruta,
  capacidadReal
) {
  const procesoDiv = document.getElementById("procesoAhorcado");
  procesoDiv.innerHTML = `
    <h3>Proceso y Formulas:</h3>
    <p>1. Obtenemos los valores de diámetro, largo, radio, capacidad, ángulo.</p>
    <p>2. Calculamos el perímetro del elemento (cañería o tubo):</p>
    <p class="formula">Perímetro = Diámetro * π</p>
    <p class="formula"> = ${diametroPerimetro} * ${Math.PI.toFixed(2)}</p>
    <p class="formula">Perímetro ≈ ${calculoPerimetro.toFixed(
      2
    )} Perdida Maniobra</p>
    <p>3. Calculamos el largo real de la maniobra:</p>
    <p class="formula">Largo Real = Perímetro - Largo de Maniobra</p>
    <p class="formula"> ≈ ${perdidaEstrobo.toFixed(2)}</p>
    <p>4. Calculamos el ángulo de maniobra:</p>
    <p class="formula">Ángulo = Cos<sup>-1</sup>(Radio - Largo)</p>
    <p class="formula"> ≈ ${anguloManiobraDoble.toFixed(2)}</p>
    <p>5. Calculamos la capacidad bruta:</p>
    <p class="formula">Capacidad Bruta = Seno Ángulo * Capacidad</p>
    <p class="formula"> ≈ ${capacidadBruta.toFixed(2)}</p>
    <p>6. Calculamos la capacidad real (considerando factor de seguridad del 75%):</p>
    <p class="formula">Capacidad Real = Capacidad Bruta * 75%</p>
    <p class="formula"> ≈ ${capacidadReal.toFixed(2)}</p>
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
