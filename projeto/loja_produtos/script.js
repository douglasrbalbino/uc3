const listaProdutos = document.querySelectorAll(".card");
const comprarBtn = document.getElementById("btnComprar");
const redefinirBtn = document.getElementById("btnRedefinir");
const resultado = document.getElementById("resultado");


listaProdutos.forEach(produto => {
    produto.addEventListener("click", () => {
        produto.classList.toggle("card-selecionado");
    })
})

listaProdutos.forEach(itm => {
    redefinirBtn.addEventListener("click", () => {
        itm.style.display = "";     
        itm.classList.remove("card-selecionado");
        resultado.innerText = "";
    })
})

comprarBtn.addEventListener("click", () => {
    let precoTotal = 0;
   
    listaProdutos.forEach(card => {
        if (!card.classList.contains("card-selecionado")) {
            card.style.display= "none";
        } else { 
            precoTotal += parseFloat(card.dataset.preco);
        }
    })
    resultado.textContent = `A ${precoTotal}`;

    console.log(precoTotal);
})

