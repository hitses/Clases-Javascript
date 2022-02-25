const verdad = true
const falso = false

console.log('Identical -> ===')

const a = 1
const b = '1'

if (a === b) console.log('Es verdad')

console.log('Similar -> ==')

if (a == b) console.log('Es verdad')

console.log('Not -> !')

if (!falso) console.log('Es verdad')

console.log('Or -> ||')

if (verdad || falso) console.log('Es verdad')

console.log('And -> &&')

if (verdad && falso) console.log('Es verdad')