///////////1///////////////////

var numbers = [2,6,8,7,5];
var numbersTimes = numbers.map(function(num) {
  return num * 2;
})

console.log(numbersTimes);

var nomvre = '--------------------------------------------------------------'
console.log(nomvre);

///////2////////
const numeros = [1, 2, 3, 4, 5, 6];
const pares = numeros.filter(num => num % 2 === 0);

console.log(pares); 

var nomvre = '--------------------------------------------------------------'
console.log(nomvre);

////////3///////////
function sumarArray(array) {
  return array.reduce((acum, valor) => acum + valor, 0);
}

const numeros2 = [1, 2, 3, 4];
const total = sumarArray(numeros2);  
console.log(total);

var nomvre = '--------------------------------------------------------------'
console.log(nomvre);

////////4/////////

const frutas = ['pi', 'coco', 'pera', ];

frutas.forEach((fruta, indice) => {
  console.log(` ${indice} / ${fruta}  `);
});
var nomvre = '--------------------------------------------------------------'
console.log(nomvre);

/////5//////////////

function encontrarMayor50(numeros) {
  return numeros.find(num => num > 50);
}

const lista = [10, 23, 50, , 53, 40];
const resultado = encontrarMayor50(lista);
console.log(resultado); 

var nomvre = '--------------------------------------------------------------'
console.log(nomvre);

///////6/////////////////////

const Negativo = numeros => numeros.some(num => num < 0);

const lista1 = [5, 10, -3, 8];
const lista2 = [2, -4, 6, 8];

console.log(Negativo(lista1)); 
console.log(Negativo(lista2)); 
var nomvre = '--------------------------------------------------------------'
console.log(nomvre);

//////////7////////////////////////

function todosMayore10(numeros) {
  return numeros.every(function(num) {
    return num > 10;
  });
}



const lista3 = [11, 11, 13, 18];
const lista4 = [2, 4, 6, 8];

console.log(todosMayore10(lista3)); 
console.log(todosMayore10(lista4)); 

var nomvre = '--------------------------------------------------------------'
console.log(nomvre);


////////////8//////////////////

const contieneValor = (array, valor) => array.includes(valor);

const frutas2 = ['pi', 'coco', 'pera', ];

console.log(contieneValor(frutas2, 'naranja'));  
console.log(contieneValor(frutas2, 'pera'));     



var nomvre = '--------------------------------------------------------------'
console.log(nomvre);

/////////////9//////////////////////

function ordenar(array) {
  return array.sort();
}
const frutas3 = ['manzana', 'plátano', 'pera', 'kiwi'];

const resultado2 = ordenar(frutas3);
console.log(resultado2);  

var nomvre = '--------------------------------------------------------------'
console.log(nomvre);

///////////////10////////////

const revds = array => array.reverse();

const num = [1,2,3,4,5];

const resultado3 = revds(num);

console.log(resultado3);

var nomvre = '--------------------------------------------------------------'
console.log(nomvre);

////////////////11///////////////

function slice (array) {
    return array.slice (0,5);
}

const numeros5 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const resultado4 = slice(numeros5);
console.log(resultado4);


var nomvre = '--------------------------------------------------------------'
console.log(nomvre);


///////////////12////////////////

const casi = array => {
  array.splice(2,1);
  return array
}

const lista5 = [100, 200, 300, 400, 500];
const resultado5 = casi(lista5);
console.log(resultado5);


var nomvre = '--------------------------------------------------------------'
console.log(nomvre);

////// ///////13///////////////////

function dique (array1, array2) {
  return array1.concat(array2);
}


const papo = [1, 2, 3 ];
const papo2 = [4, 5];
const resultado6 = dique(papo, papo2);
console.log(resultado6);

var nomvre = '--------------------------------------------------------------'
console.log(nomvre);

/////////////15////////////////

const Ceros = () => new Array(6).fill(0);
console.log(Ceros()); 

