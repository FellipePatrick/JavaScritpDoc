//setTimeou (function, tempo em milisegundos)

function ativarContagem(){
    //document.getElementById('tempo').innerHTML = "Começou!";
    //tempo = setTimeout(function(){
   //     document.getElementById('tempo').innerHTML = "Executou setTimeout!";
   // }, 5000);

  tempo = setInterval(function(){
    var cronometro = document.getElementById("tempo").innerHTML;
    if(cronometro > 0 ){
        var soma = parseInt(cronometro) - 1;
    }else{
        var soma = parseInt(cronometro) - 0;
    }
    document.getElementById('tempo').innerHTML = soma;
}, 1000)
}

function pararContagem(){
    clearInterval(tempo);
    document.getElementById("tempo").innerHTML = "5";
}
// executa uma function, depois espera o tempo e executa de novo

//setInterval (function, miliseconds)

// executa uma function por determinado periodo de tempo
