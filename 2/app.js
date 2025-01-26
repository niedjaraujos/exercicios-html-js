
const botao = document.querySelector('button');

let valores = [];

function ordenarDecrescente() {
    let input = document.querySelector('input')
    valores.push(input.value)

    
    input.value= ''

    valores.sort((x, y) => y - x);  // Ordena o array em ordem decrescente
    console.log( valores)
    return valores;
}

botao.addEventListener('click', () => {
    const resultado = ordenarDecrescente();
    document.querySelector('p').innerHTML = `Valores em ordem decrescente: ${resultado}`
})




