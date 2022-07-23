var itensCarrinho;


function adicionar() {
    if(!document.getElementById("carrinho").value) {
        itensCarrinho++;
        document.getElementById("carrinho").value = 1;
    } else {
        itensCarrinho++;
        document.getElementById("carrinho").value = parseInt(document.getElementById("carrinho").value) + 1;
    }
}

function retirar() {
    if(parseInt(document.getElementById("carrinho").value) - 1 <= 0){
        document.getElementById("carrinho").value = 0;
    } else {
        itensCarrinho = parseInt(document.getElementById("carrinho").value) - 1;
        document.getElementById("carrinho").value = itensCarrinho;
    }
}

function zerar() {
    itensCarrinho = 0;
    document.getElementById("carrinho").value = itensCarrinho;
}