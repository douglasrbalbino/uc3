const listaProdutos = document.querySelectorAll(".card");
const comprarBtn = document.getElementById("btnComprar");
const redefinirBtn = document.getElementById("btnRedefinir");


listaProdutos.forEach(produto => {
    produto.addEventListener("click", () => {
        produto.classList.toggle("card-selecionado");
    })
})

comprarBtn.addEventListener("click", () => {
    listaProdutos.forEach(item => {
        if (!item.classList.contains("card-selecionado")) {
            item.style.display= "none";
        }
    })
})

listaProdutos.forEach(itm => {
    redefinirBtn.addEventListener("click", () => {
        itm.classList.remove("card-selecionado");
    })
})