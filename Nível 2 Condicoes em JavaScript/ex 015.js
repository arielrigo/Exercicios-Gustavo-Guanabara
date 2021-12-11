function analise() {
    let meses = new Array ('Jan' , 'Fev' , 'Mar' , 'Abr' , 'Mai' , 'Jun' , 'Jul' , 'Ago' , 'Set' , 'Out' , 'Nov' , 'Dez')
    let semana = new Array ('Dom' , 'Seg' , 'Ter' , 'Qua' , 'Qui' , 'Sex' , 'Sáb')
    let agora = new Date
    let saida = document.getElementById('secao')
    let hora = agora.getHours()
    let sem = agora.getDay()
    let mes = agora.getMonth()
    let dia = agora.getDate()
    let min = agora.getMinutes()
    let seg = agora.getSeconds()
    let ano = agora.getFullYear()
    saida.innerHTML = `<p>Dia: ${dia} <p>`
    saida.innerHTML += `<p>Mês: ${meses[mes]}<p>`
    saida.innerHTML += `<p>Ano: ${ano}<p>`
    saida.innerHTML += `<p>Dia da semana: ${semana[sem]}<p>`
    saida.innerHTML += `<p>Hora: ${hora}<p>`
    saida.innerHTML += `<p>Minuto: ${min}<p>`
    saida.innerHTML += `<p>Segundos: ${seg}<p>`
}