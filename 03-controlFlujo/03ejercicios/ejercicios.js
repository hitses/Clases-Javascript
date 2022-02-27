// Script que imprima por pantalla lo siguiente tres veces con While, Do... While y For (normal):
// Nomre: país
// Se deben crear dos listas con la siguiente información:
/* 
  Jero, Will, Nguyen, Yuko
  España, Inglaterra, Tailandia, Japón
 */

console.log('Soy While')

let person = ['Jero', 'Will', 'Nguyen', 'Yuko']
let country = ['España', 'Inglaterra', 'Tailandia', 'Japón']
i = 0


while (i <= 3) {

  console.log(`${person[i]}: ${country[i]}`)

  i++
}

console.log('Soy Do... While')

i = 0
do {
  console.log(`${person[i]}: ${country[i]}`)

  i++
} while (i <= 3)

console.log('Soy For')

for (let i = 0; i < person.length; i++) {
  console.log(`${person[i]}: ${country[i]}`)
}