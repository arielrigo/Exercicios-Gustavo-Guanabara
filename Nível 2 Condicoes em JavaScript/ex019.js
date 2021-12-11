function Iniciar() {
    let pvalor = window.prompt('Primeiro valor:')
    let svalor = window.prompt('Segundo valor:')
    let multiplos = window.prompt(`Valores informadors: ${pvalor} e ${svalor}. \n O que vamos fazer? \n [1] Somar \n [2] Subtrair \n [3] Multiplicar \n [4] Dividir`)

    let res = document.getElementById('secao')
    if (multiplos == 1) {
        let soma = pvalor + svalor
        res.innerHTML = `<p>${pvalor} + ${svalor} = ${soma}<p>`
    } else if (multiplos == 2) {
        let subtrair = pvalor - svalor
        res.innerHTML = `<p>${pvalor} - ${svalor} = ${subtrair}<p>`
    } else if (multiplos == 3) {
        let multiplicar = pvalor * svalor
        res.innerHTML = `<p>${pvalor} * ${svalor} = ${multiplicar}<p>`
    } else if (multiplos == 4) {
        let dividir = pvalor / svalor
        res.innerHTML = `<p>${pvalor} / ${svalor} = ${dividir}<p>`
    }
}


/*
const sendNum = (digit)=> {
    num.push(digit);

    if (num.length !=1) {
        a = '';
        document.getElementById('screen').innerHTML = a;
    };

    for (i=0; i<num.length; i++){
    a = a + num [i];
    };

    document.getElementById('screen').innerHTML = a;
};

const equalTo = ()=> {
    document.getElementById('screen').innerHTML = '';
    for (i=0; i<num.length; i++) {
        b +=num[i];
    }
    ans = eval(b);
    document.getElementById('screen').innerHTML = ans;

    while (num.length>0){
        num.pop();
    }
    num.push(ans.toString());
}


botao.onclick = function () {
    let valor1 = prompt('Digite um valor?');

    const operador = prompt('Digite um operador aritmético :');

    let valor2 = prompt('Digiter um outro valor:');

    let soma = 0;

    soma = calculo(valor1, valor2, operador);


    alert("Valor trotal da soma foi de " + soma);
};

function calculo(valor1, valor2, operador) {
    return eval(valor1 + operador + valor2)
};


*/








/*
function calc() {
    let n1 = Number(prompt('Primeiro valor:'))
    let n2 = Number(prompt('Segundo valor:'))
    let op = Number(prompt(`Valores informados: ${n1} e ${n2}. \nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`))

    let saida = document.getElementById('saida')
    saida.innerHTML = `<h2>Calculando...</h2>`
    switch (op) { // A estrutura switch basicamente permite você testar valores dentro de uma variável ou expressão. Ela é compatível apenas com números inteiros e strings
        case 1:
            saida.innerHTML += `<p>${n1} + ${n2} = <strong>${n1+n2}</strong></p>`
            break // O break é obrigatório em cada case. Se não for colocado, acontecerá a execução de vários comandos indesejados de outros cases
        case 2:
            saida.innerHTML += `<p>${n1} - ${n2} = <strong>${n1-n2}</strong></p>`
            break
        case 3:
            saida.innerHTML += `<p>${n1} x ${n2} = <strong>${n1*n2}</strong></p>`
            break
        case 4:
            saida.innerHTML += `<p>${n1} / ${n2} = <strong>${(n1/n2).toLocaleString('pt-BR')}</strong></p>` // O método toLocaleString() é muito útil para mostrar números de forma mais compatível com o que usamos aqui no Brasil.
            break
        default: // Se o usuário não digitar nenhum dos valores acima, vai cair aqui
            saida.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou ${n1} e ${n2}, mas não sei o que fazer com eles. </p>`
            break
    }
}

*/