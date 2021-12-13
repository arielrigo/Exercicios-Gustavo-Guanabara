function contar() {
    let res = document.getElementById('secao')


    res.innerHTML += `<h2>Contando de 1 até 10, marcando os pares</h2>`


    let cont = 1

    while (cont <= 10) {

        var resto = cont % 2

        if (resto == 0) {
            res.innerHTML += `${cont} 👉`
        } 

        
        cont++
    }
    res.innerHTML += '&#x1F3C1;'

}
