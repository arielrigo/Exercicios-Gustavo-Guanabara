function aleat() {
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    let num = min + Math.trunc(dif * aleatorio) 

    let secao = document.querySelector('section#secao')
    secao.innerHTML += `<p>Acabei de pensar no <mark>${num}<mark/></p>`
}

function limpar() {
    let secao = document.querySelector('section#secao')
    secao.innerHTML = ''
}