alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
let chute = prompt('Escolha um número entre 1 e 10');

if(chute == numeroSecreto) {
    alert('Acertou o número secreto')
} else {
    alert('Você errou')
}