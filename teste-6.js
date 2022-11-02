const dado = '{"nome":"Cristina", "idade":27, "carro":null}';

const pessoa = JSON.parse(dado);

for (const prop in pessoa) {
    //obtendo o nome da propriedade
    console.log("Propriedade: ",prop);

    //obtendo o valor da propriedade
    console.log("Valor: ",pessoa[prop]);
}