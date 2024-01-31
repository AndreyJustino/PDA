function nomeCompleto(){
    let nomeC = String(prompt("Digite seu nome completo: "))
    document.write(`<p>Seu nome completo é ${nomeC}, ele possui um total
    de ${nomeC.length} caracterios (contando os espaços)</p>`)

    let nomeSemEspaço = nomeC.replace(" ", "")
    document.write(`<p>Seu nome possui um total
    de ${nomeSemEspaço.length} caracterios sem espaço</p>`)
}

nomeCompleto()