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

  // Si no hay errores, ocultar el mensaje de error
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
