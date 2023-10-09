//ao clicar no botão do personagem na lista, marca como selecionado e mostra as informações dele:

//traz os botões para o js
const botoes = document.querySelectorAll(".botao");

//traz os personagens para o js
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();

        //adiciona a classe selecionado em cada botão clicado
        botao.classList.add("selecionado");

        desselecionarPersonagem();

        //adiciona a classe selecionado no personagem clicado
        personagens[index].classList.add("selecionado");
    });
});

//verifica se existe um botão selecionado e, caso sim, remove-o
function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

//verifica se existe um personagem selecionado e, caso sim, remove-o
function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}