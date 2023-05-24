//Objeto 

const carro = {
    marca:"ford", 
    modelo: "ka", 
    ano:2015,
    buzina: function () { alert('biiiiiiiiii') },
    completo: function() {
        return "A marca é: " + this.marca + " e o modelo é: " + this.modelo;
    }
};

console.log(carro.completo());