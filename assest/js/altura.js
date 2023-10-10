// Función para calcular la altura de trabajo
function calcularAlturaTrabajo() {
  // Obtenemos los valores de los campos del formulario
  let largoPluma = parseFloat(document.getElementById("largo").value);
  let radio = parseFloat(document.getElementById("radio").value);

  // Validar los valores ingresados
  if (isNaN(largoPluma)) {
    mostrarError(largoError, "Por favor, ingresa un valor numérico válido.");
    return;
  }

  if (isNaN(radio)) {
    mostrarError(radioError, "Por favor, ingresa un valor numérico válido.");
    return;
  }

  // Validación adicional de largoPluma > radio
  if (largoPluma <= radio) {
    mostrarError(largoError, "El largo debe ser mayor que el radio.");
    return;
  }

  // Si no hay errores, ocultar los mensajes de error
  ocultarError(largoError);
  ocultarError(radioError);

  // Realizar el cálculo
  const alturaTrabajo = Math.sqrt(Math.pow(largoPluma, 2) - Math.pow(radio, 2));

  // Mostrar el resultado en pantalla
  document.getElementById("alturaTrabajo").innerHTML =
    alturaTrabajo.toFixed(2) + " mts";

  // Mostrar el proceso y fórmulas utilizadas
  mostrarProceso(largoPluma, radio, alturaTrabajo);
  mostrarImagen();
}

// Función para mostrar el proceso y fórmulas utilizadas
function mostrarProceso(largoPluma, radio, alturaTrabajo) {
  const procesoDiv = document.getElementById("procesoAltura");
  procesoDiv.innerHTML = `
      <h3>Proceso y Fórmulas:</h3>
      <p>1. Obtenemos los valores de largo pluma, radio.</p>
      <p>2. Realizamos el calculo:</p>
      <p class="formula"> Formula = √(Largo de Pluma<sup>2</sup> - Radio<sup>2</sup>)</p>
      <p class="formula"> = √(${largoPluma}^2 - ${radio}^2)</p>
      <p class="formula"> = √(${largoPluma * largoPluma} - ${radio * radio})</p>
      <p class="formula"> = √(${largoPluma * largoPluma - radio * radio})</p>
      <p class="formula">Altura ≈ ${alturaTrabajo.toFixed(2)} mts</p>
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

// Función para mostrar mensajes de error
function mostrarError(elemento, mensaje) {
  elemento.textContent = mensaje;

  // Ocultar el div de la imagen en caso de error
  ocultarImagen();
}

// Función para ocultar mensajes de error
function ocultarError(elemento) {
  elemento.textContent = "";
  elemento.style.color = "initial";
}
