var numero1=[];
var signo=["+","-"];
var numero2=[];
var aleatorio1=0;
var aleatorio2=0;
var signoAleatorio=[];
var pos=0;
var i=0;
var resultado=0;
function numAleatorios() {
  aleatorio1=Math.floor(Math.random(numero1) * 10 + 1);
  signoAleatorio=Math.floor(Math.random(signo)*(1-0+1));
  aleatorio2=Math.floor(Math.random(numero1) * 10 + 1);
  i=signoAleatorio;
  signoAleatorio[i];
  pos=i;
  resultado=(prompt(`${aleatorio1}${signo[pos]}${aleatorio2}=`));
  console.log(`Tú respuesta es ${resultado}.`);
    if (signoAleatorio=0) {
      console.log(`La respuesta correcta es ${eval(aleatorio1+aleatorio2)}.`);
  }
    if (signoAleatorio=1) {
      console.log(`La respuesta correcta es ${eval(aleatorio1-aleatorio2)}.`);
  }
  }
numAleatorios();
