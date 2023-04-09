const imagens_frente = ["imagens/bobrossparrot.gif", "imagens/explodyparrot.gif", "imagens/fiestaparrot.gif", "imagens/metalparrot.gif", 
    "imagens/revertitparrot.gif", "imagens/tripletsparrot.gif", "imagens/unicornparrot.gif", ];

let qtde;
let elemento1;
let imagem1;
let contador = 0;
let limite;

function comparador () {
    return Math.random() -0.5;
}

function qtde_cartas() {
    let gerarCartas;
    gerarCartas = document.querySelector(".containter-cartas")
    gerarCartas.innerHTML = ' ';
    contador = 0;
    limite = 2;
    imagens.sort(comparador)

    const ListaDeImagens = []

    qtde = Number(prompt("Escolha a quantidade de cartas (4 a 14)"))
    while (qtde % 2 != 0 || qtde > 14 || qtde < 4) {
        qtde = Number(prompt("Escolha a quantidade de cartas (4 a 14)"))
    } 

    let qtde_cartas = imagens_frente.slice(0, qtde/2)

    for (i = 0; i < qtde_cartas.length; i++) {
        ListaDeImagens.push(qtde_cartas[i]);
        ListaDeImagens.push(qtde_cartas[i]);
    }

    ListaDeImagens.sort(comparador);
    for (let i = 0; i < qtde; i++) {
        gerarCartas = document.querySelector(".container-cartas")
        gerarCartas.innerHTML += ` 
                <div class="card" onclick = "virarCartas(this)">
                <div class="front-face face">
                <img src="imagens/front.png" alt="">
                </div>
                <div class="back-face face">
                <img src=${ListadeImagens[i]}>
                </div>
            </div>`

    }
}

