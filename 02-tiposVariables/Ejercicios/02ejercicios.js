// Crear una constante numérica e imprimir por pantalla si el número es par o impar

const num = 23

const parImpar = num => num % 2 === 0 ? 'Es par' : 'Es impar'

console.log(parImpar(num))

// Crear dos constantes 'diámetro' y 'grosor' de una rueda (en metros) y, a través de cualquier tipo de declaración de control de flujo siempre teniendo en cuenta la mejor legibilidad y la menor cantidad de espacio utilizado, realizar las siguientes operaciones:
// a) Si el diámetro es superior a 1.4m debe mostrar el mensaje “La rueda es para un vehículo grande”. Si es menor o igual a 1.4m pero mayor que 0.8m debe mostrar el mensaje “La rueda es para un vehículo mediano”. Si no se cumplen ninguna de las condiciones anteriores debe mostrar por pantalla el mensaje “La rueda es para un vehículo pequeño”.
// b) Si el diámetro es superior a 1.4m con un grosor inferior a 0.4m o si el diámetro es menor o igual a 1.4m pero mayor que 0.8m con un grosor inferior a 0.25m, deberá mostrar el mensaje “El grosor para esta rueda es inferior al recomendado”

const diametro = 1.3
const grosor = 0.2

if (diametro > 1.4) {
  console.log('La rueda es para un vehículo grande')
  grosor < 0.4 && console.log('El grosor para esta rueda es inferior al recomendado')
}
if (diametro <= 1.4 && diametro > 0.8) {
  console.log('La rueda es para un vehículo mediano')
  grosor < 0.25 && console.log('El grosor para esta rueda es inferior al recomendado')
}
if (diametro <= 0.8) console.log('La rueda es para un vehículo pequeño')



/* Escribir un script que responda a un usuario que quiere comprar un helado cuánto le costará en función del topping que elija.
El helado sin topping cuesta 1.90€.
El topping de Oreo cuesta 1€.
El topping de KitKat cuesta 1.50€.
El topping de brownie cuesta 1.25€.
El topping de Lacasitos cuesta 1.95€.
En caso de no disponer del topping solicitado por el usuario el programa escribirá por pantalla 'No tenemos este topping, lo sentimos.' y a continuación informar del precio del helado sin ningún topping.
Finalmente, el programa escribe por pantalla el precio del helado con el topping seleccionado (o ninguno).
Se puede utilizar cualquier tipo de declaración de control de flujo siempre teniendo en cuenta la mejor legibilidad y la menor cantidad de espacio utilizado.*/

const eleccion = 'oreo'

const helado = 1.9
const toppings = {
  oreo: 1,
  kitkat: 1.5,
  brownie: 1.25,
  lacasitos: 1.95
}

if (eleccion !== 'oreo' && eleccion !== 'kitkat' && eleccion !== 'brownie' && eleccion !== 'lacasitos') {
  console.log('No tenemos este topping, lo sentimos.')
  console.log(`El helado cuesta ${helado}€.`)
} else {
  console.log(`El helado cuesta ${helado + toppings[eleccion]}€.`)
}

// Realizar un script que indique a un alumno su nivel académico dependiendo de su nota.
// Si ha sacado de 0 a 4: suspenso.
// Si ha sacado 5: aprobado.
// Si ha sacado 6: bien.
// Si ha sacado 7: notable.
// Si ha sacado 8: excelente.
// Si ha sacado 9: sobresaliente.
// Si ha sacado 10: matrícula de honor.
// Se puede utilizar cualquier tipo de declaración de control de flujo siempre teniendo en cuenta la mejor legibilidad y la menor cantidad de espacio utilizado.

const nota = 7

const notas = {
  0: 'suspenso',
  1: 'suspenso',
  2: 'suspenso',
  3: 'suspenso',
  4: 'suspenso',
  5: 'aprobado',
  6: 'bien',
  7: 'notable',
  8: 'excelente',
  9: 'sobresaliente',
  10: 'matrícula de honor'
}

!('' + nota).includes('.') && console.log(`El alumno ha sacado ${notas[nota]}.`)

/* const notas = {
  castigado: 0,
  suspenso: 4,
  aprobado: 5,
  bien: 6,
  notable: 7,
  excelente: 8,
  sobresaliente: 9,
  matrículaHonor: 10
} */


/* if(nota >= notas['castigado'] && nota < notas['suspenso']) console.log('Alumno suspendido')
if(nota >= notas['aprobado'] && nota < notas['bien']) console.log('Alumno aprobado')
if(nota >= notas['bien'] && nota < notas['notable']) console.log('Alumno ha sacado bien')
if(nota >= notas['notable'] && nota < notas['excelente']) console.log('Alumno ha sacado notable')
if(nota >= notas['excelente'] && nota < notas['sobresaliente']) console.log('Alumno ha sacado escelente')
if(nota >= notas['sobresaliente'] && nota < notas['matrículaHonor']) console.log('Alumno ha sacado sobresaliente')
if(nota === notas['matrículaHonor']) console.log('Alumno ha sacado matrícula de honor') */