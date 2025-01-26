const button = document.querySelector('button');


button.addEventListener('click', () =>{
    let input = document.querySelector('input').value;

    if( input % 2 === 0){
        document.querySelector('p').innerHTML= 'O número é positivo'
    } else{
        document.querySelector('p').innerHTML= 'O número é negativo'
    }

})