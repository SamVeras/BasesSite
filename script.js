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
<<<<<<< HEAD
    resultadoDiv.innerHTML = `${numeroInput}<sub>${baseInput}</sub> = ${numBaseConvertido.join('')}<sub>${novaBaseInput}</sub>`;
=======
    resultadoDiv.innerHTML = `${numeroInput}<sub>${baseInput}</sub> = ${numBaseConvertido.join('')}<sub>${novaBaseInput}</sub>.`;
>>>>>>> 15543c89badd164b80f89c0226b36ef2bff191a1
}