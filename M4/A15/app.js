import express from "express"
import sequelize from "./src/database/config.js";
import routes from "./src/router/pet.routes.js";
// import sqlite3 from "sqlite3";
// sqlite3.verbose();

const app = express()

app.use(express.json())

app.use("/", routes)

//sincronizar banco de dados
sequelize.sync().then(() => {
    app.listen(3000, (req,res) => {
        console.log("Server is running on port 3000")
    })
}).catch(erro => console.error("Não foi possivel conectar no banco: ", erro))

export default app




/*
// chamando banco de dados
const db = new sqlite3.Database("./src/database/database.db");

const criandoTabela = `
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
)
    `;


// run não retorna dado, usado para operações de leitura
db.run(criandoTabela, (erro) => {
  if (erro) {
    console.error(erro.message);
  }

  console.log("Tabela criada com sucesso!");
});

const sql = `
    SELECT name FROM sqlite_master;
`

// all usado para operações de consultas
db.all(sql, [], (error, table) => {
    if (error) {
        console.error(error.message);
    }

    console.table(table)
});

//metodo que retornam dados (get, each)
//pega por cada
// db.each()

//
// db.get()
*/