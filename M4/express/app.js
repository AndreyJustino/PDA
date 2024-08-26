const express = require('express') // importando o express
const app = express() // criando uma instacia do express 
const port = 3000 // definindo a porta que o servidor vai rodar

app.get("/", (req, res) => { //req(requisição) -> dado que recebo, res(resposta) -> minha resposta 
    // console.log(req.body)
    res.send("Hello World, Ola mundo")
})

app.post("/pda", (req,res) => {
    console.log("body aqui -> ",req.body)
    res.send("Deu bom no post")
})

app.listen(port, () => {
    console.log("aplicacao rodando na porta 3000")
})
