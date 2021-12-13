function tabuada() {
    let valor = Number(document.getElementById('valor').value)
    let res = document.getElementById('secao')
    let num = 0
    for (valor ; num <= 10 ; num++) {  
    let result = valor * num
        res.innerHTML += ` ${valor} x ${num} = ${result} `
    } 
}
    
