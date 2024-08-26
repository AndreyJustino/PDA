class Array{
    constructor(lista){
        this.lista = lista
    }

    pares(){
        return this.lista.filter((value) => value % 2 === 0);
    }

    impares(){
        return this.lista.filter((value) => value % 2 !== 0);
    }

    todos(){
        return this.lista.forEach((value) => console.log(value))
    }
    
    total(){
        return this.lista.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
    }

    inserir(valor){
        this.lista.push(valor)
        return this.lista
    }

    remover(index){
        this.lista.splice(index, 1)
        return this.lista
    }

    mudar(index, valor){
        this.lista[index] = valor
        return this.lista
    }

}

const array = new Array([1,2,3,4,5,6])
console.log(array.todos())
