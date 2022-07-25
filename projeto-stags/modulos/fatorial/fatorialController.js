function fatorial() {
    numero = document.getElementById("fatorial").value.split("");
    if(numero != "" && numero.length > 1) {
        var resultado = 1;
    
        for (i = 0; i < numero.length; i++) {
            resultado *= parseInt(numero[i]);
        }
    
        document.getElementById("resposta").innerHTML = `O resultado é ${resultado}!`
    } else {
        document.getElementById("resposta").innerHTML = `Não é possível fazer a multiplicação!`
    }
}