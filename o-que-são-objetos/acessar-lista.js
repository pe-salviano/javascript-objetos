const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"2165154154154",
    email:"andre@andre.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

//console.log(cliente[chaves[0]])

chaves.forEach(info=>console.log(cliente[info]))