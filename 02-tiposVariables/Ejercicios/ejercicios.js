let ejercicio1 = '--------------------------------- Ejercicio 1 --------------------------------\n'
let ejercicio2 = '--------------------------------- Ejercicio 2 --------------------------------\n'
let ejercicio3 = '--------------------------------- Ejercicio 3 --------------------------------\n'
let ejercicio4 = '--------------------------------- Ejercicio 4 --------------------------------\n'

console.log(ejercicio1);

/* 
  Definir las siguientes variables con el nombre que creas más apropiado:
  String -> Hola
  String -> Carlos
  Number -> 29
  String -> Calle Falsa
  Number -> 2022
  Array  -> [VariableCalleFalsa, 123] // Añadir al Array la variable String 'Calle Falsa'
 */

/* 
  Mostrar por consola la siguiente información por separado (la ortografía es importante en este trabajo):
  - El año debes obtenerlo restando el año actual junto a tu edad.
  'Hola, me llamo Carlos. Tengo 29 años y vivo en la Calle Falsa, 123. Nací en el año 1992.'
 */

let saludo = "Hola"
let nombre = "Carlos"
let edad = "29"
let calle = "Calle Falsa"
let año = "2022"
let calle2 = [
  calle, 
  " 123"
] 

console.log(saludo + ', me llamo ' + nombre + '.');
console.log('Tengo ' + edad, 'años, y vivo en la ' + calle2 + '.');
console.log('Nací en el año ' + (año - edad -1) + '.\n');

console.log(ejercicio2);

/* 
  Crea un objeto con la siguiente estructura:
  person = {
    address: {
      name: string,
      number: number
    },
    age: number,
    familiars: [
      father: {
        name: string,
        age: number
      },
      mother: {
        name: string,
        age: number
      },
      brother: {
        name: string,
        age: number
      },
    ],
    name: string,
  }
 */

/* 
  Mostrar por consola la siguiente información por separado (la ortografía es importante en este trabajo):
  - La diferencia de edad entre tu hermano y tú es restándolas.
  'Mis padres, {padre} y {madre}, y tiene {edad del padre} y {edad de la madre}. Viven en la {dirección}. En casa también vive mi {hermano}, de {edad del hermano}. Eso quiere decir que nos llevamos {diferencia de edad entre tú y tu hermano}.'
 */

let person = {
  address: {
    name: 'Revoltosa',
    number: 36
  },
  name: 'Carlos',
  age: 29,
  familiars: {
  father: {
      name: 'José',
      age: 64
    },
    mother: {
      name: 'Pepi',
      age: 56
    },
    brother: {
      name: 'José Antonio',
      age: 31
    },
  },
}
console.log(`Mis padres, ${person.familiars.father.name} y ${person.familiars.mother.name}, tienen ${person.familiars.father.age} y ${person.familiars.mother.age} años.` );
console.log (`Viven en la calle ${person.address.name}.`);
console.log (`En casa también vive mi hermano ${person.familiars.brother.name}, de ${person.familiars.brother.age} años.`); 
console.log (`Eso quiere decir que nos llevamos ${person.familiars.brother.age - person.age} años.\n`);

/* 
  Declara una función que imprima:
  'Hola mundo.'
 */

console.log(ejercicio3);

function holamundo() {
  let saludo = 'Hola mundo.\n'
  console.log(saludo);
}
holamundo()

/* 
  Declara una función que, pasándole una lista con la estructura [nombre, edad, dirección] o la estructura [nombre, edad, municipio, dirección] imprima por pantalla:
  'Hola {nombre}. Veo que tienes {edad} y vives en {dirección}.'
 */

console.log(ejercicio4);

const estructura = (nombre, edad, municipio, dirección) => {
  console.log(`Hola ${nombre}.\nVeo que tienes ${edad} años, y vives en ${dirección}, que se encuentra en ${municipio}.\n`);
}

estructura('Carlos', 29, 'Villena', 'La Revoltosa')