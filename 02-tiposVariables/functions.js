const person = () => {
  const ciudad = 'Villena'
  const edad = 31
  
  return {
    nombre: 'Jero',
    edad: edad,
    ciudad
  }
}

console.log(person())

const printProperties = (name, age = 'No age') => {
  console.log(name)
  console.log(age)
}

printProperties('Jero')

const nombre = 'jero'

const suma = () => {
  const nombre = 'Jero'
  return nombre
}

console.log(suma())