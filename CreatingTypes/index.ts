// generics
function showData<T>(arg: T): string {
  return `O dado é: ${arg}`
}

console.log(showData(5))
console.log(showData('test'))
console.log(showData(true))
console.log(showData(['hello']))
//


// constraint at generic
function showProductName<T extends {name: string}>(obj: T) {
  return `O nome do produto é: ${obj.name}`
}

const myObj = {name: 'Porta', cor: 'Branca'}
const otherObj = {name: 'Carro', wheels: 4, engine: 1.0}

console.log(showProductName(myObj))
console.log(showProductName(otherObj))
//


// generics with interface
interface IMyObj<T, U, Q> {
  name: string
  wheels: T
  engine: U
  color: Q
}

type Car = IMyObj<number, number, string>
type Pen = IMyObj<boolean, boolean, string>

const myCar: Car = {name: 'fusca', wheels: 4, engine: 1.0, color: 'Branco'}
const myPen: Pen = {name: 'Caneta', wheels: false, engine: false, color: 'Azul'}

console.log(myCar)
console.log(myPen)
//


// type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
  hd: '2tb',
  ram: '32gb'
}

console.log(getSomeKey(server, 'ram'))
// console.log(getSomeKey(server, 'teste'))
//


// keyof type operator
type Character = {name: string, age: number, hasDriverLicense: boolean} 

type C = keyof Character

function showCharName(obj: Character, key: C) {
  return `${obj[key]}`
}

const myChar: Character = {
  name: 'Vitor',
  age: 18,
  hasDriverLicense: false
}

console.log(showCharName(myChar, 'name'))
console.log(showCharName(myChar, 'age'))
// console.log(showCharName(myChar, 'test'))
//


// typeof type operator
const userName: string = 'Vitor'

const userName2: typeof userName = 'Enzo'

// const userName3: typeof userName = 14

type x = typeof userName

const userName4: x = 'Lucca'
//


// indexed access type
type Truck = {km: number, kg: number, description: string}

type Km = Truck['km']

const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  description: 'Caminhão para pouca carga'
}

function showKm(km: Km) {
  console.log(`O veículo tem a km de: ${km}`)
}

showKm(newTruck.km)

const newCar = {
  km: 5000,
  kg: 1000
}

showKm(newCar.km)
//


// conditional types
interface A {}

interface B extends A {}

interface Test {
  showName(): string
}

type myType = B extends A ? number : string

const someVar: myType = 5
// const someVar2: myType = 'test'

type myTypeB = Test extends {showName(): string} ? string : boolean
//


// template literals type
type testA = 'text'

type CustomType = `some ${testA}`

const testing: CustomType = 'some text'
// const testing2: CustomType = 'some text2'

type a1 = 'testando'
type a2 = 'union'

type a3 = `${a1}` | `${a2}`