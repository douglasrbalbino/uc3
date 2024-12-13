const display = document.getElementById("visor");
const botaoPadrao = document.querySelectorAll(".btnPadrao"); // Estou buscando uma classe, então adiciono o ponto (.)
const botaoClear = document.getElementById("btnClear");
const botaoResultado = document.getElementById("btnResultado");
const botaoApagar = document.getElementById("btnApagar")

botaoPadrao.forEach(botao => {
    botao.addEventListener("click", () => {
        let value = botao.getAttribute("data-value");
        display.value += value;
    });
});

botaoClear.addEventListener("click", () => {
    display.value = "";
})

botaoResultado.addEventListener("click", () => {
    display.value = eval(display.value);
})

botaoApagar.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
})