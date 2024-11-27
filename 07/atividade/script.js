/*
Crie uma função calculadora
A função recebe dois valores e um operador (+, -, *, /)
A função retorna o resultado do calculo
*/


/*
function calculadora(num1, num2, operador) {
    let resultado = 0;

    if(operador === "+") {
        resultado =  num1 + num2;
        // return  num1 + num2;  ------ está é uma forma que eu poderia usar, sem declarar uma variavel resultado
    } else if(operador === "-") {
        resultado = num1 - num2;
    } else if (operador === "*") {
        resultado = num1 * num2;
    } else if (operador === "/") {
        if(num2 === 0) {
            console.log("Impossível dividir por zero");
            return resultado;
        resultado = num1 / num2;
    }

    return resultado;
}

console.log(calculadora(50, 0, "/"));

*/

function calculadora(num1, num2, operador) { 
    if(operador === "+") {
        return  num1 + num2;
    } else if(operador === "-") {
        return num1 - num2;
    } else if (operador === "*") {
        return num1 * num2;
    } else if (operador === "/") {
        if(num2 === 0) {
            return 0;
        }
        return num1 / num2;
    } else {
        return "Operação inválida";
    }
}


function exibirResultados() {
    // Pega os dados em tela
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let operacao = document.getElementById("operacao").value;

    // Manda para a calculadora
    let resultado = calculadora(numero1, numero2, operacao);

    // Exibe o resultado em tela
    document.getElementById("resultado").innerText = resultado;
}