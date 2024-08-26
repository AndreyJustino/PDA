class Artista {
    constructor(nome, carreira, categoria){
        this.nome = nome;
        this.carreira = carreira;
        this.categoria = categoria;
    }

    apresentacao(){
        console.log(`Nome: ${this.nome}, Carreira: ${this.carreira}, Categoria: ${this.categoria}`)
    }
}

const ator = new Artista("Batman", "ator", "ação")
const cantor = new Artista("Hungria", "cantor", "rap")
const jogador = new Artista("Ney", "jogador", "futebol")

class Grammy extends Artista{
    constructor(nome, carreira, status){
        super(nome, carreira)
        this.status = status
    }

    premiadoAtor(){
        return this.status == true ? console.log("Prêmio Grammy") : console.log("Não foi premiado")
    }
}

const premiado = new Grammy("batman", "ator", true)
const premiadoNao = new Grammy("Hungria", "cantor", false)

// console.log(ator)
// ator.apresentacao()

// console.log(premiado)
// premiado.premiadoAtor()
premiado.apresentacao()