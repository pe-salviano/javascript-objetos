// *DESAFIO:  lista de telefones  -  Acessar a lista de números de telefone das pessoas cadastradas no sistema e imprimi-la, verificando se há mais de um número em algum cadastro.

const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"2165154154154",
    email:"andre@andre.com",
    fones:["54551511", "151515516"]  
}

cliente.fones.forEach(fone => console.log(fone))