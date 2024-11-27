function conversorHora () {
    let conversao = Math.floor(document.getElementById("minutos").value / 60);
    let resto = Math.floor(document.getElementById("minutos").value % 60);
    document.getElementById("saida").innerText = (`O resultado é ${conversao}:${resto}h`);

    /*
    sempre que uma função RETORNA algo, a função acaba ali mesmo, no RETURN

    Logo, só devo usar o return quando for para finalizar uma função

    */

}
