let body = document.getElementById("body");
let cor = document.getElementById("cor");
const mudar = () => {
    body.style.removeProperty('element.style');
    if(cor.value != "white"){
        body.style.color = "white";        
        cor = cor.value;
        body.style.backgroundColor = cor;   
    }else{
        cor = cor.value;
        body.style.backgroundColor = cor;   
    }
}
