function parimp() {
   var num = window.prompt('Digite um número:')
    let tipo
    if (num % 2 == 0) {
    tipo = "par"
    } else {
        tipo = "impar"
    }
    let res = document.getElementById('secao')
    res.innerHTML = `O numéro ${num} que foi digitado é ${tipo}`
}

