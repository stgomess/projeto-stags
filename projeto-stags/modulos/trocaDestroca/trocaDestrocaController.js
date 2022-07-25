function trocar() {
    var troca = document.getElementById("troca").value;
    var destroca = document.getElementById("destroca").value;

    document.getElementById("troca").value = destroca;
    document.getElementById("destroca").value = troca;
}