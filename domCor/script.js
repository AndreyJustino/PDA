const botao = document.getElementById("buttonCor")
const titulo = document.getElementById("titulo")

botao.addEventListener("click", function(){

    if(botao.value == "Acesso"){
        botao.value = "Apagado"
        titulo.style.backgroundColor = "red"
    }
    else if (botao.value == "Apagado"){
        titulo.style.backgroundColor = "green"
        botao.value = "Acesso"
    }

    
})