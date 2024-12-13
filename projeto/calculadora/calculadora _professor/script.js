const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");


// Função para usar a lista de butões marcados com a classe btn, usando uma const buttons criado acima
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.getAttribute("data-value");
        // Atualiza o display numérico com os valores dos botões apertados
        display.value += value;
    })
});

// Função para apagar o valor (value) do input (display) usando o botão clear   
clearButton.addEventListener("click", ( )=> {
    display.value = "";

});


equalsButton.addEventListener("click", () => {
    // o valor do display utiliza a função eval()
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
    // Essa função executa uma string como código JavaScript
    display.value = eval(display.value);
})
