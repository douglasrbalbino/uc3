// Faça essa função receber um parametro "nome"
// Ela deve retonar "Olá, {nome}"
function saudacao(nome) {
    console.log("Olá, " + nome);
}

function calculaODobro(valorOriginal) {    
    return valorOriginal * 2;
}

// let resposta = calculaODobro(7);
// console.log(resposta);
//saudacao("Lucimara");



/* ---- Uma função pode ter VÁRIOS PARAMETROS, devem ser divididos por virgulas */

function multiplicar(a, b) {
    return a * b;
}

console.log( multiplicar(3, 5) ); /* Ao chamar a função com vários parametros, devemos separar por virgulas cada parametro */

/* O JavaScript permite receber uma função já pronta como um novo parametro - PORÉM NÃO É UMA BOA PRATICA FAZER DESTA FORMA */

let resultado = multiplicar(multiplicar(3, 5), 2); /* primeiro puxa como parametro a função: 15, e depois multiplica por 2: 30 */
console.log(resultado);