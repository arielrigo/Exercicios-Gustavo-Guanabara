function media() {
    var nome = window.prompt('Qual o nome do aluno?')
    var pnota = window.prompt(`Qual foi a primeira nota de ${nome}?`)
    var snota = window.prompt(`Além de ${pnota} Qual foi a segunda nota de ${nome}`)
    med = (pnota + snota) / 2

    let msg // cria uma variável e deixa ela vazia
    if (med > 6) {
        msg = 'parabens'
    } else {
        msg = 'estude mais'
    }
    let res = document.querySelector('#secao')

    
    res.innerHTML =  `calculando a media de ${nome}`
    res.innerHTML += `<p>As notas obtidas foram ${pnota} e ${snota}<p>`
    res.innerHTML += `<p>A media final será ${pnota / snota}`
    res.innerHTML += `<p>${msg}<p>`
}

