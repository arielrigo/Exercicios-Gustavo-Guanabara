function sistema() {
    let agora = new Date
    let saida = document.getElementById('secao')
    saida.innerHTML = `<P>O que eu encontrei foi ${agora}<p>`
}