function numeroCrescente() {
    var numeroRecebido = document.getElementById("inteiro").value //.value.split("");
    var numeroConvertido = parseInt(numeroRecebido).split("");
    var numeroCrescente = true;

    for(var i = 0; i < numeroRecebido.length; i++) {
        if((parseInt(numeroRecebido[i]) > parseInt(numeroRecebido[i++]))) {
            numeroCrescente = false;
            break;
        }
    }

    if(numeroCrescente) {
        document.getElementById("resposta").innerHTML = `O número inserido é crescente!`;
    } else {
        document.getElementById("resposta").innerHTML = `O número inserido não é crescente!`;
    }
}