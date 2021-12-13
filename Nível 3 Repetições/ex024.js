function contar() {
    let res = document.getElementById('secao')
   let cont = new Number()

    for(cont = 10 ; cont > 0 ; cont--) {
        res.innerHTML += `${cont} 👉`
    }

    res.innerHTML += '&#x1F3C1;'
}