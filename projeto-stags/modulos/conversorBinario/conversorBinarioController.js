function converteDecimal() {
    var decimalPreenchido = document.getElementById("decimal").value;
    if(decimalPreenchido) {
        decimalPreenchido = parseInt(decimalPreenchido).toString(2);
        document.getElementById("binary").value = decimalPreenchido;
    } else {
        document.getElementById("binary").value = "Preencha o Campo!";
    } 
}