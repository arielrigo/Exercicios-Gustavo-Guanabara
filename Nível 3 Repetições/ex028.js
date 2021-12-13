function Fatorial() {
    let valor = Number(document.getElementById('valor').value)
    let res = document.getElementById('secao')
    let num = valor 
    res.innerHTML += `${num}`

    var resul = valor

    for (let i = valor - 1 ; i > 0 ; i--) {
        resul *= i
        res.innerHTML += `x ${i} `
    }
    res.innerHTML += `= ${resul}`
}