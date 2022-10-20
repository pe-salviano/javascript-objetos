//DESAFIO - listas de dependentes - Verificar a melhor forma de agregar a informação de um novo dependente ao objeto cliente


const cliente = {
    nome:"Andre",
    idade:50,
    cpf:"2165154154154",
    email:"andre@andre.com",
    fones:["54551511", "151515516"],  
    dependentes: [{
        nome:"Pedro",
        parentesco:"Filho",
        dataNasc:"22/12/1994"
        
    }]
}

cliente.dependentes.push({
    nome:"Jéssica santos",
    parentesco:"Filha",
    dataNasc:"11/10/2012"
})

console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependentes => dependentes.dataNasc==="11/10/2012")

console.log(filhaMaisNova[0].nome)