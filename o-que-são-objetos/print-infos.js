const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"2165154154154",
    email:"andre@andre.com"
}

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`)
console.log(`Os três primeiros numeros do meu cpf é, ${cliente.cpf.substring(0,3)}`)