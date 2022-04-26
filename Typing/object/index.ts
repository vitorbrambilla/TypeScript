// tipos
function passCoordinates(coord: {x: number, y: number}) {
  console.log('X coordinates: ' + coord.x)
  console.log('Y coordinates: ' + coord.y)
}

const objCoord = {x: 329, y: 84.2}

passCoordinates(objCoord)
//

const pessoaObj:{nome: string, surname: string} = {nome: 'Vitor', surname: 'Brambilla'}

console.log(pessoaObj)
//

// interfaces
interface IPoint {
  x: number
  y: number
  z: number
}

function showCoords(obj: IPoint) {
  console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coordObj:IPoint = {
  x: 10,
  y: 15,
  z: 20
}

showCoords(coordObj)
//


// interface x type alias
interface IPerson {
  name: string
}

interface IPerson {
  age: number
}

const person: IPerson = {name: 'Vitor', age: 18}
console.log(person)

type personType = {
  name: string
}

// type personType = {
//   age: number
// }
//
