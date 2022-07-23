function buscarLetra() {
    var fraseEscolhida = document.getElementById("frase").value;
    var letraEscolhida =  document.getElementById("letra").value;
    var quantidadeLetra = 0;

    if(fraseEscolhida && letraEscolhida) {
        
        for (var i = 0; i < fraseEscolhida.length; i++) {
            if (fraseEscolhida.toLowerCase()[i] === letraEscolhida.toLowerCase()) {
                quantidadeLetra++;
            }
        }

         if(quantidadeLetra > 1){
            document.getElementById("resposta").innerHTML = `A letra escolhida aparece ${quantidadeLetra} vezes nessa frase!`;
         } else if( quantidadeLetra == 1) {
            document.getElementById("resposta").innerHTML = "A letra escolhida aparece apenas 1 vez nessa frase!";
         } else {
            document.getElementById("resposta").innerHTML = `A frase escolhida não contém a letra "${letraEscolhida}"!`;
         }
         document.getElementById("resposta").style.display = "block";

    } else if(!fraseEscolhida && letraEscolhida) {
        document.getElementById("resposta").innerHTML = "Ainda é necessário inserir a frase!"
    } else if(fraseEscolhida && !letraEscolhida) {
        document.getElementById("resposta").innerHTML = "Ainda é necessário inserir a letra desejada!"
    } else {
        document.getElementById("resposta").innerHTML = "Insira nos campos acima a frase e a letra desejada para prosseguir!";
    } 
}
    
