const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const over = document.querySelector('.over');
let pontos = 0;
const jump = () =>{
    mario.classList.add('jump');
    setTimeout(()=>{
        mario.classList.remove('jump');
    },700);
}

const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    if(pipePosition >= 120){
        pontos++;
    }
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = './img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        over.src = './img/gameover.gif';
        window.alert('Seus pontos foram: '+pontos+' pontos');
        clearInterval(loop);
    }
    console.log(pontos);
}
, 10);
document.addEventListener('keydown', jump);