function calcular(){
    let numero1 = parseFloat(document.querySelector("#Numero1").value)
    let numero2 = parseFloat(document.querySelector("#Numero2").value)
    let operador = document.querySelector("#Operador").value

    if(operador == "somar"){
        let calculo = numero1 + numero2

        let h2 = document.createElement("h2")
        h2.innerHTML = `O resultado é ${calculo}`
        
        let container = document.getElementById("container")
        container.append(h2)
    } 
    else if(operador == "subtrair"){
        let calculo = numero1 - numero2

        let h2 = document.createElement("h2")
        h2.innerHTML = `O resultado é ${calculo}`
        
        let container = document.getElementById("container")
        container.append(h2)
    } 
    else if (operador == "dividir"){
        let calculo = numero1 / numero2

        let h2 = document.createElement("h2")
        h2.innerHTML = `O resultado é ${calculo}`
        
        let container = document.getElementById("container")
        container.append(h2)
    } 
    else if(operador == "multiplicar"){
        let calculo = numero1 * numero2
        
        let h2 = document.createElement("h2")
        h2.innerHTML = `O resultado é ${calculo}`
        
        let container = document.getElementById("container")
        container.append(h2)
    } 
}