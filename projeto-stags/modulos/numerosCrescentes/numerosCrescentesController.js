
function crescente() {
    var numerosRecebidos = document.getElementById("inteiro").value;
    if(numerosRecebidos && numerosRecebidos.length == 2) {
        numerosRecebidos = numerosRecebidos.split("");
        var numeroCrescente = true;
        var proximoIndice;
    
        for(var i = 0; i < numerosRecebidos.length; i++) {
            proximoIndice = i++
            if(parseInt(numerosRecebidos[proximoIndice]) > parseInt(numerosRecebidos[i])) {
                numeroCrescente = false;
                break;
            }
        }
    
        if(numeroCrescente) {
            document.getElementById("resposta").innerHTML = `O número inserido é crescente!`;
        } else {
            document.getElementById("resposta").innerHTML = `O número inserido não é crescente!`;
        }
    } else if (numerosRecebidos && numerosRecebidos.length == 1) {
        document.getElementById("resposta").innerHTML = `É necessário inserir um número maior!`;
    } else {
        document.getElementById("resposta").innerHTML = `É necessário inserir um número!`;
    }
}