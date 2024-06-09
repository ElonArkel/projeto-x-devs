const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");

let cartaoAtual = 0;

btnAvancar.addEventListener("click", function(){

    if(cartaoAtual === cartoes.length - 1){
        return;
    }
    esconderCartoesSelecionados();
    cartaoAtual++;
    mostrarCartao();

})

btnVoltar.addEventListener("click", function(){

    if(cartaoAtual === 0) {
        return;
    }
    esconderCartoesSelecionados();
    cartaoAtual--;
    mostrarCartao();

})


function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartoesSelecionados() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}