const today = new Date().getDay()

switch (today) {
  case 0:
    console.log('Hoy es domingo')
    break
  case 1:
    console.log('Hoy es lunes')
    break
  case 2:
    console.log('Hoy es martes')
    break
  case 3:
    console.log('Hoy es miércoles')
    break

  default:
    console.log('Día no introducido')
    break
}