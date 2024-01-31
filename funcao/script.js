let numero1 = parseFloat(prompt("Digite o primeiro valor da soma: "))
let numero2 = parseFloat(prompt("Digite o segundo valor da soma: "))

function somar(){
    
    let soma = numero1 + numero2

    return soma
}

function exibir(resultado){
    alert(`O total da soma é ${resultado}`)
}

exibir(somar())