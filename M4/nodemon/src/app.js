import express from "express";

const app = express();

app.use(express.json());

const tbl_usuario = [];

app.post("/cadastrar/", (req, res) => {
  const usuario = {};
  const objeto = req.body;

  usuario.nome = objeto.nome;
  usuario.email = objeto.email;
  usuario.senha = objeto.senha;

  tbl_usuario.push(usuario);

  res.status(200).send({
    mensagem: "Cadastrado com sucesso",
    dados: tbl_usuario,
  });
});

app.get("/login/:email/:senha", (req, res) => {
  const email = tbl_usuario.find((value) => value.email == req.params.email);
  const senha = tbl_usuario.find((value) => value.senha == req.params.senha);

  if (email && senha) {
    res.status(200).send({
      mensagem: "Login aprovado",
    });
  } else {
    res.status(404).send({
      mensagem: "Login negado",
    });
  }
});

app.get("/user", (req, res) => {
  res.status(200).send({
    mensagem: "Dados cadastrados anteriormente.",
    dados: tbl_usuario,
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});


export default app