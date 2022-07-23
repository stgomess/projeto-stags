function somar() {
    var inteiro = document.getElementById("inteiro").value.split("");
    var total = 0;
    
    for(i = 0; i < inteiro.length; i++) {
        total = total + parseInt(inteiro[i]);
        console.log(total); 
    }
    
    if(total) {
        document.getElementById("resposta").innerHTML = `A soma total é de ${total}!`;
    } else if (!total) {
        document.getElementById("resposta").innerHTML = `É necessário inserir um valor para continuar!`;
    }
}