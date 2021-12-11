function maiorvalor() {
    let n1 = window.prompt('Digite um número: ')
    let n2 = window.prompt('Digite outro número: ')
    
    let res = document.getElementById('secao')
    if (n1 > n2) {
        res.innerHTML = `Analisando os valores ${n1} e ${n2}, o maior valor é ${n1}`
    } else if (n2 > n1) {
        res.innerHTML = `Analisando os valores ${n1} e ${n2}, o maior valor é ${n2}`
    } else if(n1 == n2){
        res.innerHTML = `Analisando os valores ${n1} e ${n2}, os dois números são iguais!`
    }
}