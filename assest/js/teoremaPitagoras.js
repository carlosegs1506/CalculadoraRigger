document
  .getElementById("trianguloForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtenemos los valores de los campos del formulario
    const largo = parseFloat(document.getElementById("largo").value);
    const radio = parseFloat(document.getElementById("radio").value);
    const altura = parseFloat(document.getElementById("altura").value);

    let resultado = "";
    let formula = "";

    // Validar los valores ingresados
    if (!isNaN(largo) && !isNaN(radio)) {
      const alturaCalculada = Math.sqrt(
        Math.pow(largo, 2) - Math.pow(radio, 2)
      );
      resultado = `Altura: ${alturaCalculada.toFixed(2)} mts`;
      formula = `1. Obtenemos los valores de largo, radio.<br>2. Calculamos Altura: <br/> <p class="formula"> Formula = √(Largo<sup>2</sup> - Radio<sup>2</sup>) <br/> = √(${largo}<sup>2</sup>- ${radio}<sup>2</sup>) <br/> ≈ ${alturaCalculada.toFixed(
        2
      )} mts </p>`;
    } else if (!isNaN(largo) && !isNaN(altura)) {
      const radioCalculado = Math.sqrt(
        Math.pow(largo, 2) - Math.pow(altura, 2)
      );
      resultado = `Radio: ${radioCalculado.toFixed(2)} mts`;
      formula = `1.Obtenemos los valores de largo, altura. <br> 2. Calculamos Radio: <br/> <p class="formula"> Formula = √(Largo<sup>2</sup> - Altura<sup>2</sup>) <br/> = √(${largo}<sup>2</sup> - ${altura}<sup>2</sup>) <br/> ≈ ${radioCalculado.toFixed(
        2
      )} mts </p>`;
    } else if (!isNaN(radio) && !isNaN(altura)) {
      const largoCalculado = Math.sqrt(
        Math.pow(radio, 2) + Math.pow(altura, 2)
      );
      resultado = `Largo: ${largoCalculado.toFixed(2)} mts`;
      formula = `1.Obtenemos los valores de radio, altura. <br> 2. Calculamos Largo: <br/> <p class="formula"> Formula = √(Radio<sup>2</sup> + Altura<sup>2</sup>) <br/> = √(${radio}<sup>2</sup> + ${altura}<sup>2</sup>) <br/> ≈ ${largoCalculado.toFixed(
        2
      )} mts </p>`;
    }

    // Mostramos en pantalla el resultado y la fórmula
    document.getElementById("resultado").textContent = resultado;
    mostrarProceso(formula);
  });

function mostrarProceso(formula) {
  const procesoDiv = document.getElementById("mostrarProceso");
  procesoDiv.innerHTML = `
        <h3>Fórmula y Desarrollo:</h3>
        <br/>
        <p>${formula}</p>
    `;
}
