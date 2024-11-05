// Função para exibir ou esconder o escudo ao clicar no botão
function mostrarEscudo() {
    const escudoSection = document.getElementById("escudoSection");
    if (escudoSection.classList.contains("hidden")) {
        escudoSection.classList.remove("hidden");
    } else {
        escudoSection.classList.add("hidden");
    }
}