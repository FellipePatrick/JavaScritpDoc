let kg = document.getElementById("kg");
let altura = document.getElementById("altura");
let texto = document.getElementById("texto");
let quadrado = document.getElementById("quadrado");
const verifica = () => {
    let cont = 0;
    nkg = kg.value;
    naltura = altura.value;
    if(nkg > 0){
        cont++;
    }else{
        kg.style.borderBlockColor = "red";
    }
    if(naltura > 0){
        cont++;
    }else{
        altura.style.borderColor = "red";
    }
    if(cont > 0){
        let imc = nkg/(naltura*naltura);
        let text;
        if(imc < 18.5){
            text = "Abaixo do peso normal";
            quadrado.style.backgroundColor = "Yellow";
        }else if(imc >= 18.5 && imc <= 24.9){
            text = "Peso normal";
            quadrado.style.backgroundColor = "Green";
        }else if(imc >= 25 && imc <= 29.9){
            text = "Execesso de peso";
            quadrado.style.backgroundColor = "Blue";
        }else if(imc >= 30 && imc <= 34.9){
            text = "Obesidade classe I";
            quadrado.style.backgroundColor = "Red";
        }else if(imc >= 35 && imc <= 39.9){
            text = "Obesidade classe II";
            quadrado.style.backgroundColor = "Red";
        }else{
            text = "Obesidade classe III";
            quadrado.style.backgroundColor = "Red";
        }
        texto.innerHTML = text;
    }else{
        alert("Não foi possivel fazer o imc, verifique qual campo está errado!");
    }
}