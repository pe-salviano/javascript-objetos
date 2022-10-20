// DESAFIO - compondo um objeto  -  Adcionar dependentes para um dos clientes cadastrados, com nome, idade e parentesco.

const cliente = {
    nome:"Andre",
    idade:50,
    cpf:"2165154154154",
    email:"andre@andre.com",
    fones:["54551511", "151515516"]  
}

cliente.dependentes = {
    nome:"Pedro",
    parentesco:"Filho",
    dataNasc:"22/12/1994"
}

console.log(cliente)

cliente.dependentes.nome = "Pedro Salviano"

console.log(cliente)
