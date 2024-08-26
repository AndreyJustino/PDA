let tentativa = 0
const senha = ["123456", "senha123", "abcde", "admin", "pda2024"]

while (tentativa <= 3){
    let entrada = prompt("Digite a senha:")
    if (senha.includes(entrada)){
        alert("Senha correta! Bem-vindo ao sistema.")
        break
    }
    else{
        alert("Senha incorreta. Tente novamente.")
        tentativa++
    }
}