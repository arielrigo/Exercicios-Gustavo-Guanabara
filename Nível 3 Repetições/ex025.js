function contar() {
    let valor = Number(document.getElementById('valores').value)
    let res = document.getElementById('secao')
    let num = 0


    for (num ; num <= valor ; num++ ) {
        res.innerHTML += `${num} 👉 `
    }
    res.innerHTML += '&#x1F3C1;'
}