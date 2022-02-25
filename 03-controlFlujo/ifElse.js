const a = 22

/* if (a < 20) {
  console.log(`${a} es menor a 20`)
} else {
  console.log(`${a} es mayor a 20`)
} */

if (a > 20) console.log(`${a} es mayor a 20`)
if (a < 20) console.log(`${a} es menor a 20`)

a > 20 && console.log(`${a} es mayor a 20`)

const today = new Date().getDay()

/* if (today === 0) {
  console.log('Hoy es domingo')

  if (today === 1) {
    console.log('Hoy es lunes')

    if (today === 2) {
      console.log('Hoy es martes')

      if (today === 3) {
        console.log('Hoy es miércoles')
      }
    }
  }
} */

if (today === 0) {
  console.log('Hoy es domingo')
} else if (today === 1) {
  console.log('Hoy es lunes')
} else if (today === 2) {
  console.log('Hoy es martes')
} else if (today === 3) {
  console.log('Hoy es miércoles')
} else {
  console.log('No se ha introducido el día')
}