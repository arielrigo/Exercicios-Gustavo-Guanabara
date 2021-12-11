function informe() {
    let digite = window.prompt('Digite o mês em extenso (ex: Setembro)')
    let res = document.getElementById('secao')
    let estacao
    switch (digite) {
        case 'janeiro': case 'fevereiro': case 'março':
            estacao = '<mark>INVERNO</mark>'
            break

        case 'abril': case 'maio': case 'junho':
            estacao = '<mark>PRIMAVERA<mark/>'
            break

        case 'julho': case 'agosto': case 'setembro':
            estacao = '<mark>VERÃO<mark/>'
            break
        case 'outubro': case 'novembro': case 'dezembro':
            estacao = '<mark>OUTONO<mark/>'
            break
        default: estacao = 'indefinida'
            break
    }

    res.innerHTML = `No mês de ${digite}, estamos na estação ${estacao}`
}