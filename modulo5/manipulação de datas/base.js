
// comando para pegar a data 

let data = new Date();

// Pegar ano

let ano = data.getFullYear();


// Pegar dia

let dia = data.getDate();

// Pegar dia da semana

let diaS = data.getDay();

const diaSemana = ["Domingo", "Segunda"];

let d = diaSemana[diaS];

// Pegar mes

let mes = data.getMonth();

// mes é mes + 1, porque imprime de 0 a 11

const mesesDoAno = ["Janeiro", "Fevereiro"];

let mesEscrito = mesesDoAno[mes];

let mesNumero = mes + 1;

// pegar a hora 0 a 23

let hora = data.getHours();

// pegar minutos

let minutos = data.getMinutes();

// pegar segundos

let segundos = data.getSeconds();

// data br

let br = data.toLocaleDateString('pt-br', {dataStyle: 'short'});