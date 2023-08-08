/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arrayPadre = []
   for (let i in objeto){
      let arrayHijo = []
      arrayHijo.push (i)
      arrayHijo.push(objeto[i])
      arrayPadre.push(arrayHijo)
   }
   return arrayPadre

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var  objeto = {};

      var array = string.split("");
         array.sort()
   
   for (let i of array){ 
     var cantidad = objeto[i] || 0;

     objeto[i] = cantidad + 1;
   }
 return objeto
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
var stringMay = "";
var stringMin = "";

   for (let i of string ){
  
  if (i==i.toUpperCase()){
     stringMay += i
}
else{
      stringMin += i
} 
}
return stringMay + stringMin
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
return frase
.split(" ")
.map(palabra => palabra.split("").reverse().join(""))
.join(" ")
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
  const numeroStr = numero.toString ()
  const numeroReverso = numeroStr.split("").reverse().join("");

  if (numeroStr == numeroReverso){
   return "Es capicua"
  }
  else
  return "No es capicua"
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   return string.replace(/[abc]/g, "")
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   let arrayOrdenado= []
    
      for(let i = 0; i < arrayOfStrings.length; i++){
         let min = Infinity;
         let aux = 0

         for (let j = 0; j < arrayOfStrings.length; j++){
               if(arrayOfStrings[j].length < min && !arrayOrdenado.includes(arrayOfStrings[j])){
                  min = arrayOfStrings[j].length;
                  aux = j;
}
}
arrayOrdenado.push(arrayOfStrings[aux])
}
return arrayOrdenado;
}
function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let arr = []
   for (let i = 0; i < array2.length; i++){
      if(array1.includes(array2[i])){
         arr.push(array2[i]);
      }
   }
return arr
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
