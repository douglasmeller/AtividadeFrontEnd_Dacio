function revelarCard() {
    // Alterar a imagem
    var imgTabela = document.querySelector(".card-img-top");
    imgTabela.src = "img/_vinicius_junior.png";

    // Preencher o nome
    var nomeElement = document.querySelector("#Nome .placeholder");
    nomeElement.textContent = "Vinícius Jr.";
    nomeElement.classList.remove("placeholder");
    nomeElement.classList.add("card-text");

    // Preencher o rank
    var rankElement = document.getElementById("Rank");
    rankElement.textContent = "9,5";

    // Preencher data de nascimento
    var dataNascimento = document.getElementById("Data_Nas");
    dataNascimento.innerHTML = "<strong>Nascimento:</strong> 12/07/2000 (25 anos)";
    dataNascimento.classList.remove("placeholder");
    dataNascimento.classList.add("card-text");

    // Preencher altura
    var alturaElement = document.getElementById("Alutra");
    alturaElement.innerHTML = "<strong>Altura:</strong> 1,76 m";
    alturaElement.classList.remove("placeholder");
    alturaElement.classList.add("card-text");

    // Preencher posição
    var posicaoElement = document.getElementById("Posição ");
    posicaoElement.innerHTML = "<strong>Posição:</strong> Ponta-esquerda / Atacante";
    posicaoElement.classList.remove("placeholder");
    posicaoElement.classList.add("card-text");

    // Remover placeholder-glow dos containers
    document.getElementById("Nome").classList.remove("placeholder-glow");
    var textoCard = document.querySelector("p.card-text.placeholder-glow");
    if (textoCartao) {
        textoCard.classList.remove("placeholder-glow");
    }
}
