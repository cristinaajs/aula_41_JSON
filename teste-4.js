var listaDePresenca = 
{
    "pessoa1":{
        "nome":"Cristina",
        "idade":27
    },

    "pessoa2":{
        "nome":"Elisete",
        "idade": 56,
        "esportes" : [
            {
                "tipo":"caminhada",
                "horario": "10:00"
            },
            {
                "tipo":"basquete",
                "horario": "20:00"
            }
        ]
    }
}

console.log(listaDePresenca.pessoa2.esportes[1].horario)

// obtendo todo o objeto de lista de presenca
console.log(listaDePresenca);

//obtendo uma pessoa da lista de presenca
console.log(listaDePresenca.pessoa1)

//obtendo o nome de uma pessoa da lista de presenca
console.log(listaDePresenca.pessoa1)