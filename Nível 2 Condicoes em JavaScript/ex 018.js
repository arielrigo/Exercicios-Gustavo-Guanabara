let aleatorio = parseInt(Math.random() * 100)

function adivinhar() {
    let palpite = parseInt(prompt('Qual é o seu palpite')) 


    let res = document.getElementById('secao')

    if (palpite < aleatorio) {
        res.innerHTML = `<p>Você falou ${palpite}. Meu número é <mark>MAIOR<mark/><p>`
    } else if(palpite > aleatorio) {
        res.innerHTML = `<p>Você falou ${palpite}. Meu número é <mark>MENOR<mark/><p>`
    } else if(palpite == aleatorio) {
        res.innerHTML = `<p><mark>PARABÉNS!</mark> Você acertou! Eu tinha sorteado o valor ${aleatorio}!<p>`
    }
}


//let num = min - Math.trunc(dif * aleatorio)