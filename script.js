const imagens = ["imagens/bobrossparrot.gif", "imagens/explodyparrot.gif", "imagens/fiestaparrot.gif", "imagens/metalparrot.gif", 
    "imagens/revertitparrot.gif", "imagens/tripletsparrot.gif", "imagens/unicornparrot.gif"]

let qtde;
let elemento1;
let imagem1;
let contador = 0;
let limite;

function comparador () {
    return Math.random() -0.5;
}

const qtdeCartas = () => {
    let gerarCartas;
    gerarCartas = document.querySelector(".container-carta")
    gerarCartas.innerHTML = ' ';
    contador = 0;
    limite = 2;
    imagens.sort(comparador)

    const ListaDeImagens = []
    qtde = Number(prompt("Escolha a quantidade de cartas(4 a 14)"))
    while (qtde % 2 != 0 || qtde > 14 || qtde < 4) {
        qtde = prompt("Escolha a quantidade de cartas (4 a 14)")
    } 

    let qtd_cartas = imagens.slice(0, qtde/2)

    for (i = 0; i < qtd_cartas.length; i++) {
        ListaDeImagens.push(qtd_cartas[i]);
        ListaDeImagens.push(qtd_cartas[i]);
    }

    ListaDeImagens.sort(comparador);
    for (let i = 0; i < qtde; i++) {
        gerarCartas = document.querySelector(".container-carta")
        gerarCartas.innerHTML += ` 
            <div class="carta" onclick = "virarCartas(this)" data-test="card">
                <div class="front-face face">
                    <img src="imagens/back.png" alt="" data-test= "face-down-image">
                </div>
                <div class="back-face face">
                    <img src=${ListaDeImagens[i]} data-test= "face-up-image">
                </div>
            </div>`
    }
}

const virarCartas = (elemento) => {
    if (elemento.classList.contains("to-turn")) {
        return
    }
    if (document.querySelectorAll(".carta.to-turn").length >= limite){
        return
    }

    elemento.classList.add("to-turn")

    let CartasViradas = document.querySelectorAll(".to-turn")
    contador++
    if ((CartasViradas.length)%2 !==0) {
        elemento1 = elemento;
        imagem1 = elemento1.querySelector(".back-face img").src
    }

    if ((CartasViradas.length)%2 === 0) {
        let imagem2 = elemento.querySelector(".back-face img").src
        CompararCartas(imagem1, imagem2, elemento1, elemento)
    }

    const CompararCartas = (imagem1, imagem2, elemento1, elemento) => {
        if (imagem1 != imagem2) {
            setTimeout(function remover(){elemento.classList.remove('to-turn')
            elemento1.classList.remove("to-turn")} , 1000);

        }
        if (imagem1 == imagem2) {
            limite += 2
        }
        setTimeout(FinalizarPartida , 1050)
    }
}

const FinalizarPartida = () => {
    let qtdeToTurn = document.querySelectorAll(".carta.to-turn")
    if (qtdeToTurn.length == qtde) {
        alert(`Você ganhou em ${contador} jogadas!`)
        reiniciarPartida()
    }
}

const reiniciarPartida = () => {
    let resposta = prompt("Quer reiniciar a partida? (sim ou não)")
    while (resposta !== 'não' && resposta !== 'sim') {
        resposta= prompt("Quer reiniciar a partida? (sim ou não)")
    }
    if (resposta === 'sim') {
        qtdeCartas()
    }
    if (resposta === 'não') {
        alert("Ok")
    }
}

qtdeCartas()