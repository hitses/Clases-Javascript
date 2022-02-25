const days = {
  0: 'domingo',
  1: 'lunes',
  2: 'martes',
  3: 'miércoles',
  4: 'jueves',
  5: 'viernes',
  6: 'sábado'
}

const today = 6584

console.log(`Hoy es ${days[today] || 'un día no introducido correctamente'}`)
