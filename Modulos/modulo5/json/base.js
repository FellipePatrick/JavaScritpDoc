// JSON.parse() -> converte texto no padrão json em objetos

// JSON.stringify() -> converte o objeto em texto padrão json


const carro = {
    marca: "Fiat",
    modelo: "Uno"
}

let texto = JSON.stringify(carro); // converte para texto

document.getElementById('area').innerHTML = texto;

let objeto = JSON.parse(texto); // converte para objeto 

console.log(objeto.modelo);

//requisição api

const ajax = new XMLHttpRequest();

function buscarCEP(){
    let input = document.getElementById('CEP').value;

    ajax.open('GET', 'https:viacep.com.br/ws/'+input+'/json/');

    ajax.send();

    ajax.onload = function(){
        let obj = JSON.parse(this.responseText);
        document.getElementById('texto').innerHTML = obj.localidade;
    }
}