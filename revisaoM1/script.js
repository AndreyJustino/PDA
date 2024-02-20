function nomeSobrenome(){
    let quantidade = parseInt(prompt("Quantos nomes você quer digitar? "))
    let nomeCompleto = []

    let nomeCorte = [];
    let corte;
    let siglaSeparada = []
    let lenSigla = [];
    let singlaJunta = []

    for(let contador = 0; contador < quantidade; contador++){
        let nome = String(prompt("Digite seu nome completo: "))
        nomeCompleto.push(nome)
    }

    for(let i = 0; i < nomeCompleto.length; i++){
        corte = nomeCompleto[i].split(" ")
        nomeCorte.push(corte)
    }

    function sigla(item) {
        let pegandoSiglas1 = item.charAt(0);
        siglaSeparada.push(pegandoSiglas1.toUpperCase());
    }

    nomeCorte.forEach(array => array.forEach(sigla));

    function tamanho(valor){
        let tamanho = valor.length
        lenSigla.push(tamanho)
    }

    nomeCorte.forEach(tamanho)

    for (let i = 0; i < lenSigla.length; i++) {
        let quantidade = lenSigla[i];
        let elementosExtraidos = siglaSeparada.splice(0, quantidade);
        singlaJunta.push(elementosExtraidos);
    }

    console.log(nomeCompleto)
    console.log(nomeCorte)
    console.log(singlaJunta)
}

nomeSobrenome()