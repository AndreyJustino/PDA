const alunos = [
    {id: 1, nome: 'Fernanda',idade : 20},
    {id: 2, nome: 'Maria', idade :19},
    {id: 3, nome: 'Gabriel', idade :21},
    {id: 4, nome: 'Antônio', idade :23},
    {id: 5, nome: 'Marcos', idade :21},
    {id: 6, nome: 'Sofia',idade : 22},
    {id: 7, nome: 'Laura',idade : 18},
    {id: 8, nome: 'Bruna',idade : 20}
]

const professores = [
    {id: 1, nome: 'Roberto' , idade :40 },
    {id: 2, nome: 'Laura' , idade :35 },
    {id: 3, nome: 'José' , idade :38 },
    {id: 4, nome: 'Maria' , idade :45 },
    {id: 5, nome: 'Antônio' , idade :50 },
    {id: 6, nome: 'Geralda' , idade :32 },
    {id: 7, nome: 'Marcos' , idade : 45 },
    {id: 8, nome: 'otávio' , idade :30 }
]

// com for 
let nomeAlunos = []
for(let c = 0; c < alunos.length; c ++){
    nomeAlunos.push(alunos[c].nome.toUpperCase())
}
console.log(nomeAlunos)

let nomeProfessor = []
for(let c = 0; c < professores.length; c++){
    nomeProfessor.push(professores[c].nome.toLowerCase())
}
console.log(nomeProfessor)

// com forEach
alunos.forEach((value) => {
    console.log(value.nome.toUpperCase())
})

professores.forEach((value) => {
    console.log(value.nome.toLowerCase())
})

// com map
alunos.map((value) => {
    console.log(value.nome.toUpperCase())
})

professores.map((value) => {
    console.log(value.nome.toLowerCase())
})



