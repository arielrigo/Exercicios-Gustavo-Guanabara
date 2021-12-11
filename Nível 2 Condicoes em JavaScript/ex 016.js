function Iniciar() {
    let ano = window.prompt('Em que ano você nasceu?')
    let secao = document.getElementById('secao')
    let res = ano - 2021
    secao.innerHTML = `Quem nasceu em ${ano} vai completar ${res} anos em 2021`
}

//Soolução do professor

function calcidade() {
    let agora = new Date
    let ano = agora.getFullYear()

    let nasc = Number(window.prompt('Em que ano você nasceu?'))
    let idade = ano - nasc

    let saida = document.getElementById('saida')
    saida.innerHTML = `<p>Quem nasceu em ${nasc} vai completar <strong>${idade}</strong> anos em ${ano}.</p>`
}