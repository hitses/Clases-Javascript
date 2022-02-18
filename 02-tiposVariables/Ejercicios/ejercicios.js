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

console.log('--------------------------------- Ejercicio 1 --------------------------------')

const hello = 'Hola'
const name = 'Carlos'
const age = 29
const year = 2022
const street = 'Calle Falsa'
const direction = [
  street,
  123
]

console.log(hello + ', me llamo ' + name + '. Tengo ' + age, 'años y vivo en la ' + direction[0] + ' ' + direction[1] + '. Nací en el año ' + (year - age - 1) + '.')

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

console.log('--------------------------------- Ejercicio 2 --------------------------------')

const PERSON = {
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

console.log(`Mis padres, ${PERSON.familiars.father.name} y ${PERSON.familiars.mother.name}, tienen ${PERSON.familiars.father.age} y ${PERSON.familiars.mother.age} años.` )
console.log(`Viven en la calle ${PERSON.address.name}.`)
console.log(`En casa también vive mi hermano ${PERSON.familiars.brother.name}, de ${PERSON.familiars.brother.age} años.`)
console.log(`Eso quiere decir que nos llevamos ${PERSON.familiars.brother.age - PERSON.age} años.`)

/* 
  Declara una función que imprima:
  'Hola mundo.'
 */

console.log('--------------------------------- Ejercicio 3 --------------------------------')

function helloWorld() {
  console.log('Hola mundo.')
}

helloWorld()

/* 
  Declara una función que, pasándole una lista con la estructura [nombre, edad, dirección] o la estructura [nombre, edad, municipio, dirección] imprima por pantalla:
  'Hola {nombre}. Veo que tienes {edad} y vives en {dirección}.'
 */

console.log('--------------------------------- Ejercicio 4 --------------------------------')

const CARLOS_INFO = ['Carlos', 29, 'José', 'Pepi', 'Villena', 'La Revoltosa']

const printPersonalHello = (info) => {
  console.log(`Hola ${info[0]}. Veo que tienes ${info[1]} años y vives en ${info[info.length - 1]}, que se encuentra en ${info[info.length - 2]}.`)
}

printPersonalHello(CARLOS_INFO)