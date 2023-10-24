let canvas = document.getElementById("tela");
let ctx = canvas.getContext("2d");

const imagem = new Image();
imagem.src = "hero.png";

const largura = 16;
const altura = 32;

imagem.onload = function() {
    ctx.drawImage(imagem,0,0);
}