
let height= document.getElementById('altura');
let width= document.getElementById('largura');
let price= document.getElementById('metro2');

let but=document.getElementById('calcular');
but.addEventListener('click',calcule);

let resultado= document.getElementById('resultado');

function calcule(){

    let number1=Number(height.value);
    let number2=Number(width.value);
    let number3=Number(price.value);


    let result=number1*number2*number3;
    resultado.value='R$'+result.toFixed(2);

}


