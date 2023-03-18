var peso;
var altura;
var imc;
var resultado;

function calcular (event) {
    event.preventDefault();

    peso= document.getElementById('peso').value;

    altura= document.getElementById('altura').value;

    imc = peso / (altura*altura);
    
   if (imc < 17){
    resultado = document.getElementById('resultado')
    resultado.innerHTML = "<br/> Seu resultado foi :" + imc.toFixed(2) + ' <br/>Você esta muito abaixo do peso !'
   }else if (imc >=17 && imc <= 18.49){
    resultado = document.getElementById('resultado')
    resultado.innerHTML = "<br/> Seu resultado foi :" + imc.toFixed(2) + ' <br/>Você esta abaixo do peso !'
   
   }else if (imc >=18.5 && imc <=24.99) {
    resultado = document.getElementById('resultado')
    resultado.innerHTML = "<br/> Seu resultado foi :" + imc.toFixed(2) + ' <br/>Você esta no peso ideal'

   }else if (imc>25 && imc <= 29.99) {
    resultado = document.getElementById('resultado')
    resultado.innerHTML = "<br/> Seu resultado foi :" + imc.toFixed(2) + ' <br/>acima do peso !'
   }else if (imc >= 30) {
    resultado = document.getElementById('resultado')
    resultado.innerHTML = "<br/> Seu resultado foi :" + imc.toFixed(2) + ' <br/>cuidado obesidade !'
   }
   
   document.getElementById ('peso').value = '' ;
   document.getElementById ('altura').value = '';
    

}