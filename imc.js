function imc(n,h,w,imc,total){
  var n = ler_texto("name");
  var h = ler_numero("height");
  var w = ler_numero("weight");
  var imc = w/(h*h);
  var total = imc.toFixed(3);
  console.log(total);

   document.getElementById("n").innerHTML= n;
   document.getElementById("h").innerHTML= h;
   document.getElementById("w").innerHTML= w;
   document.getElementById("i").innerHTML= total;
   document.getElementById("minha_img").src='http://drrogermoura.com.br/images/artigos/tabela-imc.png';
   document.getElementById("saida").innerHTML =  Texto(total, n, imc);
  }
  
  function ler_numero(elemento){
    return Number(document.getElementById(elemento).value);
  }
  
  function ler_texto(elemento){
    var r = document.getElementById(elemento).value;
  return r
}

function Texto (total,n,imc, texto){
var texto = n + " seu imc é de " + total + ", constando então como ";
if (imc <= 18.5){
  var texto = texto + "abaixo do peso, a falta de alimentação mata tanto quanto o sobrepeso, lembre-se disso!";
}else if(imc < 25) {
  var texto = texto + "peso ideal, você se encontra em equilibrio.";
}else if(imc < 30) {
  var texto = texto + "levemente acima do peso, desacelera nos biscoitos, hein?.";
}else if(imc < 35) {
  var texto = texto + "Obesidade I, um eclipse para crianças praticamente.";
}else if(imc < 40) {
  var texto = texto + "Obesidade II(severa), você poderá facilmente ser confundido com uma bola do 'Indiana Jones' e as crianças podem correr de você.";
} else if (imc >= 40 ) {
  var texto = texto + "Obesidade III (mórbida), a probabilidade de você conseguir um emprego e fazer atividades básicas são difíceis, recomendo que troque a multiplicação dos pães que jesus ofereceu e começe a seguir os passos de Buda e ir passar fome no mato.";
}
return texto
}