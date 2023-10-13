function adicionaValor(valor) {
    document.getElementById('tela').value += valor;
}

function C() {
    document.getElementById('tela').value = '';
}

function resultado() {
    const tela = document.getElementById('tela').value;
    try {
        const resultado = eval(tela);
        document.getElementById('tela').value = resultado;
    } catch (error) {
        document.getElementById('tela').value = 'Erro';
    }
}
