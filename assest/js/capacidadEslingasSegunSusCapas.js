//Funcionn para el calculo de eslingas segun sus capas
function calcularCapacidad() {
  //Obtenemos los valores seleccionados
  const color = document.getElementById("color").value;
  const capas = parseInt(document.getElementById("capas").value);
  const amarre = document.getElementById("amarre").value;
  let capacidadBase;

  //Seleccionamos la eslinga segun sus capas y color
  switch (color) {
    case "violeta":
      capacidadBase = 1;
      break;
    case "verde":
      capacidadBase = 2;
      break;
    case "amarillo":
      capacidadBase = 3;
      break;
    case "gris":
      capacidadBase = 4;
      break;
    case "rojo":
      capacidadBase = 5;
      break;
    case "cafe":
      capacidadBase = 6;
      break;
    case "azul":
      capacidadBase = 8;
      break;
    case "naranja_10":
      capacidadBase = 10;
      break;
    case "naranja_12":
      capacidadBase = 12;
      break;
    default:
      //En caso de no seleccionar un color mostramos una alerta
      document.getElementById("resultado").innerText =
        "Selecciona un color válido.";
      return;
  }

  //Utilizamos un condicional
  if (capas < 1 || capas > 4) {
    document.getElementById("resultado").innerText =
      "Selecciona un número de capas válido.";
    return;
  }

  let capacidad;

  //Realizamos el calculo
  switch (amarre) {
    case "axial":
      capacidad = capacidadBase * capas * 750;
      break;
    case "lazo":
      capacidad = capacidadBase * capas * 750 * 0.75;
      break;
    case "canasta":
      capacidad = capacidadBase * capas * 750 * 2;
      break;
    default:
      //En caso de no seleccionar un tipo de amarre, mostramos una alerta
      document.getElementById("resultado").innerText =
        "Selecciona un tipo de amarre válido.";
      return;
  }

  //Mostramos el resultado en pantalla
  document.getElementById("resultado").innerText = `${capacidad} Ton.`;
}
