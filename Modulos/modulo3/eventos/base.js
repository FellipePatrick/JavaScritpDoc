//Eventos JS


// onclick -> Disparado quando recebe um click

    function eventoClick(){
        alert('Acionou um evento de click');
        document.body.style.backgroundColor = "yellow";
    }

//ondblclick -> Dispara quando recebe dois clicks

    function eventoDblClick(){
        alert('Evento de clique duplo');
    }

//onmouseover -> Dispara quando o mouse esta sobre

function viraVermelho(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}

//onmouseout -> Dispara quando o mouse sai

function viraAzul(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
}

//onmousemove -> dispara quando o mouse é movido no elemento

/*
function adicionaTexto(){
    let p = document.getElementById("texto");
    p.append("O mouse modeu<br>");
}
*/

//onmousedown -> dispara quando clica o botao


//onmouseup -> dispara quando solta o botao

//onfocus -> disparado quando clica no input ou qualquer coisa q fica com foco

function limpaTexto(){
    document.getElementById("inTexto").value = "";
}

//onchange -> disparado quando alguma coisa muda

function mudou(){
    console.log("mudou");
}

//onblur -> dispara quando sai do foco


//onkeydown -> Dispara quando a tecla é pressionada

/*
function teclaPressionada() {
    let input = document.getElementById("inTexto1").value;
    console.log(input);

}
*/

//onkeypress -> Dispara qaundo a tecla é pressionada e solta

/*
function teclaPressionada() {
    let input = document.getElementById("inTexto1").value;
    console.log(input);

}
*/

//onkeyup -> Dispara quando uma tecla é solta soobre um elemento

function teclaPressionada() {
    let input = document.getElementById("inTexto1").value;
    console.log(input);

}

//onload -> dispara quando a pagina terminou de carregar



//onresize -> dispara quando ha um redimencionamento da janela

