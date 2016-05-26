var numeroAlAzar;

var imagenes = [
  "Paty.JPG",  "Anita.JPG",
  "Analy.JPG",  "Areli.JPG",
  "Beatriz.JPG", "Elisa.JPG",
  "Evelyn.JPG", "Grissel.JPG",        
  "Lupita.JPG", "Joyce.JPG",
  "Ofelia.JPG",  "Sharon.JPG",
  "Heredia.JPG",  "Monica.JPG",  
  "Karla.JPG", "Leslie.JPG", 
  "Mishel.JPG", "Milca.JPG",  
  "Naibit.JPG", "Nayeli.JPG",        
  "Nelly.JPG", "Reyna.JPG",        
  "Adriana.JPG", "Ruth.JPG",             
  "SandraBollo.JPG", "SandraDiaz.JPG",
  "Vianey.JPG", "Zazil.JPG",
  "Tayde.JPG", "Cecilia.JPG",
];

var nombres = [ "Paty", "Anita", "Analy", "Areli", "Beth", 
"Elisa", "Eve", "Grissel", "Lupita","Joyce", "Ofelia", 
"Sharon", "Heredia", "Monica", "Karla", "Leslie", "Mishel", 
"Milca", "Nai", "Nayeli", "Nelly", "Reyna", "Adriana", "Ruth", 
"Sandra", "Sandra", "Vian", "Zaz","Tayde", "Ceci"];

//Variables
var puntos = 0;
var intentos = 4;
var i = 0;

//Elegir sede
/*$(document).ready(function(){
  var sede = ["Mexico","Peru","Chile"];

    if (sede === "Mexico") {
      
    }else if (sede === "Peru") {
      alert("Esta no es tu sede");
    }else{
      alert("Esta no es tu sede");
    }
});*/

function enteroRandomEnRango (min, max) {
  var numero = Math.random() * (max - min) + min;
  var entero = Math.floor(numero);
  return entero;
};

function desplegarNuevaJugada() {
  var tamanoArreglo = nombres.length;
  intentos = 4;
  i = 0;
  
  if (tamanoArreglo > 0){
    numeroAlAzar = enteroRandomEnRango(0, tamanoArreglo);
    var imagen = 'fotos/' + imagenes[numeroAlAzar];
    $('#imagenPersona').attr('src', imagen);
    }else{
      
  };
  inputNombre.value = "";
 
};

$(document).ready(function() {

  $('#btnRevisar').click(function(){
    var nombre =$('#inputNombre').val();

    var nombreAdivinar = nombres[numeroAlAzar];

    if (nombre === nombreAdivinar){
      //Quitamos el elemento
      nombres.splice(numeroAlAzar,1);
      imagenes.splice(numeroAlAzar,1);
      puntos += 5;
      $('span').text(puntos);
       alert("¡¡Es correcto!! Conoces a tus compañeras =D ")
       desplegarNuevaJugada();
    }else if (i = intentos){
      puntos -= 1;
      $('span').text(puntos);
      inputNombre.value = "";
      alert("Intenta de nuevo!!" + " Te quedan " + intentos + " oportunidades");
       intentos--;
    }else{
      alert("Perdiste");
      puntos = 0;
      $('span').text(puntos);
      desplegarNuevaJugada(alert("Intentalo de nuevo"));
    }

  });

  desplegarNuevaJugada();

});