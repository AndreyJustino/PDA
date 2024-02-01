let nomes =  ["Gil", "Kauã", "Leticia"]

nomes.push("Luna")
console.log(`linha 4  ${nomes}`)

nomes.unshift("simon")
console.log(`linha 6 ${nomes}`)

nomes.pop()
console.log(`linha 8  ${nomes}`)

nomes.pop()
console.log(`linha 10  ${nomes}`)

nomes.push("Luna")
console.log(`linha 12 ${nomes}`)

console.log("-------------------------------------")
// ** Você está criando uma lista de reprodução de músicas. Inicie com uma lista vazia. Realize as seguintes operações:
// Adicione as músicas "Imagine" (John Lennon), "Bohemian Rhapsody" (Queen) e "Billie Jean" (Michael Jackson) no final da lista.
// Remova a última música da lista.
// Adicione a música "Stairway to Heaven" (Led Zeppelin) no início da lista.
// Remova a primeira música da lista.
// Ao final, exiba a lista de reprodução.

let listaMusica = []

listaMusica.push("Imagine (John Lennon)", "Bohemian Rhapsody (Queen)", "Billie Jean (Michael Jackson)")
console.log(`linha 29 ${listaMusica}`)

listaMusica.pop()
console.log(`linha 32 ${listaMusica}`)

listaMusica.unshift("Stairway to Heaven (Led Zeppelin)")
console.log(`linha 35 ${listaMusica}`)

listaMusica.shift()
console.log(`linha 38 ${listaMusica}`)


console.log("-------------------------------------")
// **Você está desenvolvendo um jogo de cartas. Inicie com uma lista de cartas representando uma mão de jogador. Realize as seguintes operações:
// Adicione as cartas "Ás de Copas", "Rei de Espadas" e "Dama de Ouros" no final da lista.
// Remova a última carta da lista.
// Adicione a carta "Valete de Paus" no início da lista.
// Remova a primeira carta da lista.
// Ao final, exiba a mão atual do jogador.

let jogoCartas = []
jogoCartas.push("Ás de Copas", "Rei de Espadas", "Dama de Ouros")

jogoCartas.pop()
console.log(`linha 53 ${jogoCartas}`)

jogoCartas.unshift("Valete de Paus")
console.log(`linha 56 ${jogoCartas}`)

jogoCartas.shift()
console.log(`linha 59 ${jogoCartas}`)






