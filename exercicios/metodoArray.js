const number = [1,2,3,4,5,6,7,8,9,10]

let newNumber = number.map((value) => {
  return value * 2
})

const names = ["alice", "bob", "charlie"]

let newNames = names.map((value) => {
  return value[0].toUpperCase() + value.substring(1)
})

// console.log(newNumber)
// console.log(newNames)

const numero = [10,5,3,8]

let newNumero = numero.reduce((acumulador, elemento) => {
    return (acumulador += elemento)
},0)

const produtos = [
    {
        nome : "produto1",
        preco : 10
    },
    {
        nome : "produto2",
        preco : 20
    },
    {
        nome : "produto3",
        preco : 30
    }
]

let newProduto = produtos.reduce((acumulador, elemento) => {
    return (acumulador += elemento.preco)
}, 0)

console.log(newNumero)
console.log(newProduto)