import "./styles.css";
/*Realizar un algoritmo que dado un
número entero ingresado por el
usuario, visualice en pantalla si es
par o impar

• En el caso de ingresar un cero, se
debe volver a pedir el número por
teclado (hasta que se ingrese un
número mayor que cero)*/

function numeroParImpar(numero: number) {
  if (numero % 2 === 0) {
    alert("El numero " + numero + " es par");
    // numero = Number(prompt("Ingrese numero: "));
  } else {
    alert("El numero " + numero + " es impar");
    // numero = Number(prompt("Ingrese numero: "));
  }
}
function esCero(numero: number) {
  alert("El numero " + numero + " no es impar ni par");
  numero = Number(prompt("Ingrese numero: "));
  if (numero !== 0) {
    numeroParImpar(numero);
  } else {
    alert("Se acabaron los intentos.");
  }
}

let numero: number = Number(prompt("Ingrese numero: "));
if (numero === 0) {
  esCero(numero);
} else {
  numeroParImpar(numero);
}
