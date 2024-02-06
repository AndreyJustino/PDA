// imprimir no console numeros de 100 a 1000, mas apenas as centenas (100,200,300,...)

function for1(){
    for(let i = 100; i <= 1000; i = i + 100){
        console.log(i)
    }
}


// imprima no console os numeros pares de 0 a 10

function for2(){
    for(let i = 0; i <= 10; i++){
        if(i % 2 === 0){
            console.log(i)
        }
    }

}

function for3(){
    for (let i = 1; i <= 10; i++){
        console.log(i)
    }
}

function while1(){
    let i = 1
    while(i <= 10){
        console.log(i)
        i++
    }
}

function tabuada(){
    let numero = parseInt(prompt("Digite um numero para ver a tabuada"))
    let i= true
    while (i == true) {
        for(let c = 0; c <= 10; c++){
            let calculo = numero * c
            document.write(`<p>${numero} x ${c} = ${calculo}</p>`)
            document.write()
            
        }
        let opcao = String(prompt("Deseja continuar? [S/N] ")).toUpperCase()
        if(opcao === "N"){
            i = false
        } else {
            numero = parseInt(prompt("Digite um numero para ver a tabuada"))

        }
    }
}

// for1()
// for2()
// for3()
// while1()
tabuada()