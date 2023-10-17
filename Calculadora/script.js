const adicionaValor = (valor) => {
    document.getElementById('tela').value += valor;
}
const C = () => {
    document.getElementById('tela').value = '';
}

const resultado = () => {
    const tela = document.getElementById('tela').value;
    try {
        const resultado = eval(tela);
        document.getElementById('tela').value = resultado;
    } catch (error) {
        document.getElementById('tela').value = 'Erro';
    }
}
