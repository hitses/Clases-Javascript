// Si una variable no va a ser modificada, se usa 'const' en lugar de 'let'.
// No se pone '\n' al final de los 'Strings', puesto que 'console.log' (en adelante CLG) ya lo escribe por defecto.
const ejercicio1 = '--------------------------------- Ejercicio 1 --------------------------------\n'
const ejercicio2 = '--------------------------------- Ejercicio 2 --------------------------------\n'
const ejercicio3 = '--------------------------------- Ejercicio 3 --------------------------------\n'
const ejercicio4 = '--------------------------------- Ejercicio 4 --------------------------------\n'
// Si vas a usar ';' tienes que usarlo en todo el código. En Javascript no es necesario usarlo (soy partidario de no usarlo y desde ese momento mi vida es mejor).
// No dividas las partes del código de manera incoherente. Este CLG lo has colocado antes del enunciado del ejercicio. Cada componente del código va en su sitio para que todos los desarrolladores que lo lean lo entiendan lo más rápidamente posible.
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

// Usemos spanglish con los amigos. Todo lo que no sea texto que vaya a imprimirse por consola, en el programa, en la webApp... se debe escribir en inglés.
// Si debes escribir en castellano partes del código como nombres de variables nunca incluyas caracteres alfanuméricos que no existan en el abecedario anglosajón. Nada de 'ñ' o 'Ñ' ni letras con tildes o diéresis... Eso en local no molesta, pero en servidores con Linux es un problemón que da muchos dolores de cabeza.
// En el ejercicio hay una redundancia enorme pero es solo para fines didácticos. No lo uses de normal. La variable 'calle2' tiene en su interior 'calle'. Esto es contraproducente pero era para que usaras la variable 'calle2' en los ejercicios y no 'calle'.
// Algo que no se puede ver a simple vista pero que da mil errores en el futuro si no se corrige a tiempo son los espacios innecesarios. Algunos simplemente existen, otros rompen el código. Al final de la variable 'calle2' hay un espacio que se debe eliminar.
// En el caso de la edad, ese '-1' tiene dos problemas. El más simple, la ortografía: si todo tiene un espaciado, eso también debe llevarlo. Si necesitas modificar la diferencia entre el año y tu edad para que salga correctamente tu año, pon los años que vas a cumplir este año. Es lo correcto. De todas formas hay mejores opciones para calcular esto en donde se usan tanto el mes como el día.
let saludo = "Hola"
let nombre = "Carlos"
let edad = "29"
let calle = "Calle Falsa"
let año = "2022"
let calle2 = [
  calle, // Espacio innecesario
  " 123"
] // Espacio innecesario

console.log(saludo + ', me llamo ' + nombre + '.');
// No debes dividir los Strings que se van a procesar en un CLG. Entre edad y lo que sigue debería haber otro '+'.
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

// Debe haber separaciones entre los elementos del código para que sea más legible.
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
console.log (`En casa también vive mi hermano ${person.familiars.brother.name}, de ${person.familiars.brother.age} años.`); // Espacio innecesario
console.log (`Eso quiere decir que nos llevamos ${person.familiars.brother.age - person.age} años.\n`);

/* 
  Declara una función que imprima:
  'Hola mundo.'
 */

console.log(ejercicio3);

// Los nombres de las variables, funciones... debe ir en 'camelCase'. En este caso sería 'holaMundo'.
// No hace falta crear variables innecesarias. Es útil cuando la información a trabajar es modificada. En este caso solo se usa una vez, luego 'Hola mundo\n' puede escribirse perfectamente dentro del CLG.
function holamundo() {
  let saludo = 'Hola mundo.\n'
  console.log(saludo);
}
holamundo()

/* 
  Declara una función que, pasándole una lista con la estructura [nombre, edad, dirección] o la estructura [nombre, edad, municipio, dirección] imprima por pantalla:
  'Hola {nombre}. Veo que tienes {edad} y vives en {dirección}.'
 */

// En este ejercicio se pedía explícitamente que se creara una lista de elementos para pasarla como único parámetro a la llamada de la función que se crearía después. Aquí has escrito directamente las variables como parámetros.
console.log(ejercicio4);

const estructura = (nombre, edad, municipio, dirección) => {
  console.log(`Hola ${nombre}.\nVeo que tienes ${edad} años, y vives en ${dirección}, que se encuentra en ${municipio}.\n`);
}

estructura('Carlos', 29, 'Villena', 'La Revoltosa')