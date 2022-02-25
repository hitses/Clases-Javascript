const persons = ['Jero', 'Carlos', 'Rosa', 'Eva']

console.log('Soy un For')
for (let i = 0; i < persons.length; i++) {
  console.log(`${i + 1}: ${persons[i]}`)
}

console.log('Soy un For In')
for (const i in persons) {
  console.log(persons[i])
}

console.log('Soy un For Of')
for (const person of persons) {
  console.log(person)
}
