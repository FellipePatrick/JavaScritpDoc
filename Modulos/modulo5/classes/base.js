class Carro{
    constructor(valor1, v2, v3){
        this.marca = valor1;
        this.modelo = v2;
        this.ano = v3;
    }
    buzina(){
        return this.modelo + " buzinou: Biiii";
    }
}

const uno = new Carro("fiat", "Uno", 2001);

console.log(uno);

console.log(uno.buzina);

uno.ano = 2011;