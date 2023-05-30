const pessoa = ['ola', 3000];

document.getElementById("teste").innerHTML = pessoa.join(" * ");  // troca o separador dos itens da matriz

pessoa.pop(); // remove o ultimo item da lista

pessoa.push("Ultima coisa"); // adiciona um novo item o array

pessoa.shift(); // remove o primeiro elemento da lista

pessoa.unshift("novo item"); //adiciona um item ao primeiro elemento da lista

delete pessoa[0]; // troca o elemento da posição por undefined

pessoa.splice(1, 0, " Item adicionado 1", "Item adicionado 2"); // forma de adicionar multiplos itens 

// 1 é a partir dessa posição

// 0 elementos que vão ser deletados 

// elementos

const lista1 = [1, 2, 3];

const lista2 = [4,5,6];

const superLista = lista1.concat(lista2); // Junta as listas



const jogadores = ["a", "b", "c", "d", "e"];

// fatiar matriz

const craques = jogadores.slice(1, 3); // daqui ate ali

const ordem = jogadores.sort(); //ordena em ordem alfabetica

const numeros = [1,2,3,4,576,654,3,67];

function MaiorNumero(array){
    return Math.max.apply(null, array);
} // pega o maior numero
