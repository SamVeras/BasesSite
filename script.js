function inverterNumero(num) {
    let inverso = 0;
    while (num > 0) {
        inverso = (inverso * 10) + (num % 10);
        num = Math.floor(num / 10);
    }
    return inverso;
}

function decimalParaBase(num, base) {
    const letras = '0123456789ABCDEF'; // Dígitos até a base 16 (hexadecimal)
    let resultado = [];
    while (num > 0) {
        resultado.unshift(letras[num % base]);
        num = Math.floor(num / base);
    }
    return resultado;
}

function baseParaDecimal(num, base) {
    const letras = '0123456789ABCDEF'; // Dígitos até a base 16 (hexadecimal)
    let decimal = 0;
    for (let i = 0; i < num.length; i++) {
        decimal += letras.indexOf(num[i]) * Math.pow(base, num.length - 1 - i);
    }
    return decimal;
}

function baseArbitraria(num, base, novaBase) {
    const decimal = baseParaDecimal(num, base);
    return decimalParaBase(decimal, novaBase);
}

function converter() {
    const numeroInput = document.getElementById('numeroInput').value.toUpperCase(); // Garantir que as letras sejam maiúsculas
    const baseInput = parseInt(document.getElementById('baseInput').value);
    const novaBaseInput = parseInt(document.getElementById('novaBaseInput').value);
    
    const numDecimal = parseInt(numeroInput, baseInput);
    const numBaseConvertido = baseArbitraria(decimalParaBase(numDecimal, 10), 10, novaBaseInput);

    // Exibe o resultado na página
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `${numeroInput}<sub>${baseInput}</sub> = ${numBaseConvertido.join('')}<sub>${novaBaseInput}</sub>`;
}


function operacaoAritmetica(num, num2, operacao) {
    switch (operacao) {
        case "SOMA":
            return num + num2;
        case "SUBT":
            return num - num2;
        case "MULT":
            return num * num2;
        case "DIVS":
            return num / num2;
        default:
            return "Operação inválida";
    }
}

function realizarOperacao() {
  const numeroInput1 = document
    .getElementById("numeroInput1")
    .value.toUpperCase();
  const baseInput1 = parseInt(document.getElementById("baseInput1").value);
  const numeroInput2 = document
    .getElementById("numeroInput2")
    .value.toUpperCase();
  const baseInput2 = parseInt(document.getElementById("baseInput2").value);
  const operacao = document.getElementById("operacao").value;
  const baseOutput = parseInt(document.getElementById("baseOutput").value);

  const numDecimal1 = parseInt(numeroInput1, baseInput1);
  const numDecimal2 = parseInt(numeroInput2, baseInput2);

  let resultado;
  let operacao_simbolo;
  switch (operacao) {
    case "SOMA":
      resultado = numDecimal1 + numDecimal2;
      operacao_simbolo = "+";
      break;
    case "SUBT":
      resultado = numDecimal1 - numDecimal2;
      operacao_simbolo = "-";
      break;
    case "MULT":
      resultado = numDecimal1 * numDecimal2;
      operacao_simbolo = "*";
      break;
    case "DIVS":
      resultado = numDecimal1 / numDecimal2;
      operacao_simbolo = "/";
      break;
    default:
      resultado = "Operação inválida";
  }

  const resultadoBaseOutput = decimalParaBase(resultado, baseOutput);

  document.getElementById("resultado").innerHTML = 
  `${numeroInput1}<sub>${baseInput1}</sub> ${operacao_simbolo} ${numeroInput2}<sub>${baseInput2}</sub> = ${resultadoBaseOutput.join("")}<sub>${baseOutput}</sub>`;
}

function mudarBackground() {
    const url = 'https://bing.biturl.top/?resolution=1920&format=json&index=random&mkt=zh-CN';
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const imageUrl = data.url;
        document.body.style.backgroundImage = `url(${imageUrl})`;
      })
      .catch(error => {
        console.error('Error fetching background image:', error);
      });
  }
  
  // Call the function to change the background image
  mudarBackground();