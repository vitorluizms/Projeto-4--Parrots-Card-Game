const cartas = [];

const qtde = prompt('Digite a quantidade de tarefas que você quer');

const container_card = document.querySelector('.container-carta');
let contador = 0;
while (qtde > contador) {
    container_card.innerHTML += `<button class = carta><img src="./imagens/back.png" alt="back"/></button>`
    contador++;
}