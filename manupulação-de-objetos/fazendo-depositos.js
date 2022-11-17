const cliente = {
    nome:"Andre",
    idade:50,
    cpf:"2165154154154",
    email:"andre@andre.com",
    fones:["54551511", "151515516"],  
    dependentes: [
        {
            nome:"Pedro",
            parentesco:"Filho",
            dataNasc:"22/12/1994"},
        {
            nome:'Ana Maria',
            parentesco:'filha',
            dataNasc:'04/01/2019'
        }
    ],
    saldo:100,

    depositar:function(valor)
    {
        this.saldo += valor
    }
}

console.log(ciente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)