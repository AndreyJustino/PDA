function habilitacao(){
    let idade;
    idade = document.getElementById("idade").value;

    if (idade >= 18){
        alert("Pode ter habilitação")
        
    }
    else{
        alert("Não pode ter habilitação")
    };
}

