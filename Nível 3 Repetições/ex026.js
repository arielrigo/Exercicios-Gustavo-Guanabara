function contar() {
    let valor = Number(document.getElementById('valores').value)
    let valor2 = Number(document.getElementById('valores2').value)
    let res = document.getElementById('secao')


    if (valor <= valor2) {
        for (valor; valor <= valor2; valor++) {
            res.innerHTML += `${valor} 👉 `
        }
        res.innerHTML += '&#x1F3C1;'
    } else {
        for (valor; valor >= valor2; valor--) {
            res.innerHTML += `${valor} 👉 `
        }
        res.innerHTML += '&#x1F3C1;'
    }

}