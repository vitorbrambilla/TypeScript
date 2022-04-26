// type of object for the function with interface
interface IProduct {
  name: string,
  price: number,
  isAvailable: boolean
}

function showProductDetails(product: IProduct) {
  console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)
  if (product.isAvailable) {
    console.log('O produto está disponível')
  }
}

const shirt:IProduct = {
  name: 'Camisa',
  price: 19.99,
  isAvailable: true
}

showProductDetails(shirt)
showProductDetails({name: 'Tenis', price: 199.00, isAvailable: false})
//


// optional props at interface
interface IUser {
  email: string,
  role?: string
}

function showUserDetails(user: IUser) {
  console.log(`O usuário tem o email: ${user.email}`)

  if (user.role) {
    console.log(`A função do usuário é: ${user.role}`)
  }
}

const u1: IUser = {email: 'vitor@email.com', role: 'Admin'}
const u2: IUser = {email: 'joao@email.com'}

showUserDetails(u1)
showUserDetails(u2)
//


// readonly
interface ICar {
  brand: string,
  readonly wheels: number
}

const fusca: ICar = {
  brand: 'VW',
  wheels: 4
}

console.log(fusca)

// fusca.wheels = 5
//


// index signature
interface ICoordObject {
  [index: string]: number
}

let coords: ICoordObject = {
  x: 10
}

coords.y = 15

console.log(coords)

// coords.z = 'teste'
//


// extending interfaces
interface IHuman {
  name: string
  age: number
}

interface ISuperHuman extends IHuman {
  superpowers: string[]
}

const vitor: IHuman = {
  name: 'Vitor',
  age: 18
}

console.log(vitor)

const superman: ISuperHuman = {
  name: 'Superman',
  age: 30,
  superpowers: ['super força', 'voar']
}

console.log(superman)
//


// intersection types
interface ICharacter {
  name: string
}

interface IGun {
  type: string
  caliber: number
}

type HumanWithGun = ICharacter & IGun

const arnold: HumanWithGun = {
  name: 'Arnold',
  type: 'Shotgun',
  caliber: 12
}

console.log(arnold)
console.log(arnold.caliber)
//


// readonly array
let myArray: ReadonlyArray<string> = ['Maçã', 'Laranja', 'Banana']

// myArray[3] = 'Mamão'

console.log(myArray)

myArray.forEach((item) => {
  console.log('Fruta: ' + item)
})

myArray = myArray.map((item) => {
  return `Fruta: ${item}`
})

console.log(myArray)

// myArray[0] = 'teste'
//


// tuples
type fiveNumbers = [number, number, number, number, number]

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6]
// const mixedArray: fiveNumbers = [1, true, 'teste', 4, 5]

console.log(myNumberArray)

type nameAndAge = [string, number]

const anotherUser: nameAndAge = ['Vitor', 18]

console.log(anotherUser[0])

anotherUser[0] = 'Enzo'

console.log(anotherUser[0])

// anotherUser[1] = 'teste'
//


// tuples with readonly
function showNumbers(numbers: readonly [number, number]) {
  // numbers[0] = 10
  console.log(numbers[0])
  console.log(numbers[1])
}

showNumbers([1, 2])