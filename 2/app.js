
const botao = document.querySelector('button');
const inputs = document.querySelectorAll('input[type="number"]')

function ordenarDecrescente() {
    let valores = [];
    for (let i = 0; i < inputs.length; i++) {
        valores.push(inputs[i].value);
        inputs[i].value = '';
    }
    valores.sort((x, y) => y - x);  // Ordena o array em ordem decrescente
    console.log(valores)
    return valores;
}

botao.addEventListener('click', () => {
    const resultado = ordenarDecrescente();
    document.querySelector('p').innerHTML = `Valores em ordem decrescente: ${resultado}`
});


/*
// outras formas

const inputs = document.querySelectorAll('input[type="number"]');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const numbers = [];
    inputs.forEach(input => {
        const value = input.value;

        if (!isNaN(value)) {
            numbers.push(value);
        }

    });
    numbers.sort((a, b) => b - a);// Ordenar os números em ordem decrescente
    document.querySelector('p').textContent = `Números em ordem decrescente: ${numbers}`;
});



document.querySelector('button').addEventListener('click', () => {
    const inputs = document.querySelectorAll('input[type="number"]');
    const valores = Array.from(inputs).map(input => input.value);// Cria um array para armazenar os valores
    const valoresOrdenados = valores.sort((a, b) => b - a); // Ordena os valores em ordem decrescente
    document.querySelector('p').textContent = `Valores em ordem decrescente: ${valoresOrdenados}`;
});
*/
