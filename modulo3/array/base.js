const lista = [
    "arroz", 
    "feijão",
    "arroz"
];

const listaDois = [];

alert(lista[0]);

const listaA = new Array("banana", "maça", "goiaba");


// para adicionar em tempo real

lista.push("Brasileiro");

// ou

lista[lista.length] = "goiaba";

alert(lista[lista.length - 1]);


//metodo para descobrir se é uma matriz

Array.isArray(lista);
