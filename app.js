alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt('Escolha o número entre 1 e 10');
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`o numero secreto é menor que ${chute}`);
        } else {
            alert(`o numero secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

/*if (tentativas >1 ){
alert(`Acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
}else {
    alert(`Acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
}*/