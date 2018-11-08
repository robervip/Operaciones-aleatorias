var numero1=[];
var signo=["+","-"];
var numero2=[];
var aleatorio1=0;
var aleatorio2=0;
var signoAleatorio="";
var pos=0;
var resultado=0;
function numAleatorios() {
  aleatorio1=Math.floor(Math.random(numero1) * 10 + 1);
  signoAleatorio=Math.floor(Math.random(signo)*(1+1)+0);
  aleatorio2=Math.floor(Math.random(numero1) * 10 + 1);
  pos=signoAleatorio;
  signo[pos];
  resultado=(prompt(`${aleatorio1}${signo[pos]}${aleatorio2}=`));
  console.log(`Tú respuesta es ${resultado}.`);
    if (signo[pos]!="-") {
      console.log(`La respuesta correcta es ${eval(aleatorio1+aleatorio2)}.`);
      return;
  }
    if (signo[pos]!="+") {
      console.log(`La respuesta correcta es ${eval(aleatorio1-aleatorio2)}.`);
  }
  }
numAleatorios();
