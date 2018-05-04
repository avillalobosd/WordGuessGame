var options=["Goku","Bulma","Krillin","Vegeta","Roshi","Shenron","Piccolo"];
var select=[];
var hidden = [];
var perdiste=0;
var word=" ";
var guessed=" ";
var step=0;
var yapicada=0;
var picadasArray=[];
var aleatorio=0;
var lives=0;
var gana=0;
var encontro=0;
var encontradas=0;
var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");
var seven = document.getElementById("7");
var eight = document.getElementById("8");
var nine = document.getElementById("9");
var mensaje = document.getElementById("izquierda");


//Imprime la letra picada
function letras()
{ yapicada=0;
  picadasArray.push(event.key.toUpperCase());
  for(var i=0;i<picadasArray.length; i++){
    if(event.key.toUpperCase()==picadasArray[i]){
      yapicada++;}
  }
  if(yapicada==1){
  guessed = guessed +" "+event.key.toUpperCase();
  nine.textContent=guessed;}
  else if (yapicada>1)
  mensaje.textContent="Repeated Letter   Try Again";
}

// imprime la palabra escondida con _ al inicio
function imprime()
{
  five.textContent=null;
  word=" ";
  hidden.length=0;
  for (var i=0;i<select.length;i++){
    hidden.push("_");
    word=word+" "+ hidden[i];
    five.textContent=word; 
  }
}

function imprimesegundo()
{
  five.textContent=null;
  word=" ";
  for (var i=0;i<select.length;i++){
    word=word+" "+ hidden[i];
    five.textContent=word; 
  }
}

//define los valores iniciales del juego
function start()
{ 

  three.textContent=gana;
  aleatorio = Math.floor((Math.random() * options.length));
 
  for (var i=0;i<options[aleatorio].length;i++)
  {
    select.push(options[aleatorio][i].toUpperCase());
  }
  abajo.textContent="Hidden Word for Testing Purposes=  "+options[aleatorio];
  imprime();
  lives=10; 
  seven.textContent=lives;
}

function win(){
mensaje.textContent="You Win! Next Word Ready!";
gana++;
three.textContent=gana;
select.length=0;
encontradas=0;
guessed=" ";
nine.textContent="-"; 
picadasArray.length=0;
start();
}



function gameover(){
  if (gana==1)
  mensaje.textContent="You Lose, Refresh to Continue. You Won "+gana+" Time";
  else 
  mensaje.textContent="You Lose, Refresh to Continue. You Won "+gana+" Times";
  perdiste++;
  

  }


function revisaletra(){
  encontro=0;
  for (var i=0; i<select.length;i++){
    if ((event.key.toUpperCase()==select[i])&&yapicada==1){ 
      hidden[i]=select[i]
      encontro++;
      encontradas++;
    }
    imprimesegundo();
  }
    if (encontro==0 && yapicada==1){
      lives--;
      seven.textContent=lives;
    }

    if (encontradas==select.length){
        win();
    }

    if(lives==0){
      gameover();
    }
  }

 

function next()
{
letras();
revisaletra();
}


 


function juego()
{
  if(step==0 && gana==0 && perdiste==0)
  { izquierda.textContent="Game Started!";
    one.textContent="Game Started!";
    start();
    step++;
  }
  else if(step!=0 && perdiste==0){
  mensaje.textContent="Continue!";
  next(); }
}

document.onkeyup = juego;