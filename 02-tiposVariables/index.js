// Cadenas de texto - Strings
let cadena = "Hola"
let nombre = 'Jero'
console.log(nombre)
console.log(typeof(nombre))
let muahah = `Jero`

// Tipos de declaración de strings
let cadena2 = "Don't forget ${nombre}"
let cadena3 = 'Eres un "máquina" ${nombre}'
let cadena4 = `Don't forget. Eres un "máquina"`

// let suma = 12 + 10
// let saludo = `Hola ${suma}.`
// console.log(saludo)

// Números - Integer
let numero = 22
console.log(typeof(numero))
let numero2 = 22.3

// Booleano - Boolean
let booleano = true
console.log(booleano)
console.log(typeof(booleano))

// Indefinido - Undefined
let indefinido
console.log(indefinido)
console.log(typeof(indefinido))

// Nulo - Null
let nulo = null
console.log(nulo)
console.log(typeof(nulo))

// Símbolo - Symbol
let simbolo = Symbol(22)
let simbolo2 = Symbol(22)
console.log(simbolo)
console.log(typeof(simbolo))
console.log(simbolo === simbolo2)

// Listas - Arrays
let lista = [1, 2, 3, 4, 5, 6]
// Índice -> 0  1  2  3  4  5
console.log(lista)
console.log(lista[1])

let lista2 = [
  'Jero',
  22,
  true,
  undefined,
  nulo,
  Symbol(22),
  nombre,
  [1, 2, 3]
]

console.log(lista2[7][1])

let usuario = [
  'Jero',
  30,
  'Calle Falsa, 123'
]

console.log(`La dirección de ${usuario[0]} es ${usuario[usuario.length - 1]}.`)

// Objetos - Objects
let persona = {
  address: {
    name: 'Calle Falsa',
    number: 123
  },
  age: 30,
  name: 'Jero',
  parents: [
    'Jero',
    'Manolo',
    'Mavi'
  ]
}

console.log(persona.parents[persona.parents.length - 1]) // Mavi

// Funciones - Functions
function saludo2() {
  let nombre = 'Carlos'
  console.log('Hola ' + nombre)
}

saludo2()
saludo2()

const saludo3 = (nombre, edad = 30) => {
  console.log(`Hola ${nombre}. Tienes ${edad} años.`)
}

saludo3('Jero', 31)
saludo3('Carlos', 29)