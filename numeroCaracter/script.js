let suspeito1 = "Não sou eu!!"
let suspeito2 = "Eu tentei de ajudar desde o inicio!!"
let suspeito3 = "Já pensou que o monstro pode ser controlado"

if(suspeito1.length > suspeito2.length && suspeito1.length > suspeito3.length ){
    console.log("É o suspeito 1 com " + suspeito1.length)
    console.log('Com a frase " ' + suspeito1 + ' "')
} else if(suspeito2.length > suspeito1.length && suspeito2.length> suspeito3.length){
    console.log("É o suspeito 2 com " + suspeito2.length)
    console.log('Com a frase " ' + suspeito2 + ' "')
} else{
    console.log("É o suspeito 3 com "+suspeito3.length)
    console.log('Com a frase " ' + suspeito3 + ' "')
}
