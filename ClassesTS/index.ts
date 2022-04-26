// fields in classes
class User {
  name!: string
  age!: number
}

const vitor = new User()

console.log(vitor)

vitor.name = 'Vitor'
// vitor.job = 'Programmer'

console.log(vitor)
//


// contructor
class NewUser {
  name
  age

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const enzo = new NewUser('Enzo', 18)

console.log(enzo)

// const pedro = new NewUser('Pedro')
//


// campos readonly
class Car {
  name
  readonly wheels = 4

  constructor(name: string) {
    this.name = name
  }
}

const fusca = new Car('Fusca')

console.log(fusca)

console.log(fusca.wheels)

fusca.name = 'Fusca turbo'

// fusca.wheels = 5
//


// heritage and super
class Machine {
  name

  constructor(name: string) {
    this.name = name
  }
}

const trator = new Machine('Trator')

class KillerMachine extends Machine {
  guns

  constructor(name: string, guns: number) {
    super(name)
    this.guns = guns
  }
}

const destroyer = new KillerMachine('Destroyer', 4)

console.log(trator)
console.log(destroyer)
//


// methods
class Dwarf {
  name

  constructor(name: string) {
    this.name = name
  }

  greeting() {
    console.log('Hey stranger!')
  }
}

const jimmy = new Dwarf('Jimmy')

console.log(jimmy.name)

jimmy.greeting()

console.log(jimmy)
//


// this
class Truck {
  model
  hp

  constructor(model: string, hp: number) {
    this.model = model
    this.hp = hp
  }

  showDetails() {
    console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`)
  }
}

const volvo = new Truck('Volvo', 400)

volvo.showDetails()
//


// getters
class Person {
  name
  surname

  constructor(name: string, surname: string) {
    this.name = name
    this.surname = surname
  }

  get fullName() {
    return this.name + ' ' + this.surname
  }
}

const matheusBattisti = new Person('Matheus', 'Battisti')

console.log(matheusBattisti.name)

console.log(matheusBattisti.fullName)
//


// setters
class Coords {
  x!: number
  y!: number

  set fillX(x: number) {
    if(x === 0) {
      return
    }

    this.x = x

    console.log('X inserido com sucesso')
  }

  set fillY(y: number) {
    if(y === 0) {
      return
    }

    this.y = y

    console.log('Y inserido com sucesso')
  }

  get getCoords() {
    return `X: ${this.x} e Y: ${this.y}`
  }
}

const myCoords = new Coords()

myCoords.fillX = 15
myCoords.fillY = 0
myCoords.fillY = 10

console.log(myCoords)

console.log(myCoords.getCoords)
//


// implements
interface showTitle {
  itemTitle(): string
}

class blogPost implements showTitle {
  title

  constructor(title: string) {
    this.title = title
  }

  itemTitle() {
    return `O título do post é: ${this.title}`
  }
}

const myPost = new blogPost('Hello world')

console.log(myPost.itemTitle())

class TestingInterface implements showTitle {
  title

  constructor(title: string) {
    this.title = title
  }

  itemTitle() {
    return `O título é: ${this.title}`
  }
}
//


// override of methods
class Base {
  someMethod() {
    console.log('alguma coisa')
  }
}

class Nova extends Base {
  someMethod() {
    console.log('testando algo')
  }
}

const myObj = new Nova()

myObj.someMethod()
//


// public
class C {
  public x = 10
}

class D extends C {
  
}

const cInstance = new C()

console.log(cInstance.x)

const dInstance = new D()

console.log(dInstance.x)
//


// protected
class E {
  protected x = 15

  protected protectedMethod() {
    console.log('Este método é protegido')
  }
}

class F extends E {
  showX() {
    console.log('X: ' + this.x)
  }

  showProtectedMethod() {
    this.protectedMethod()
  }
}

const fInstance = new F()

fInstance.showX()

fInstance.showProtectedMethod()
//


// private
class PrivateClass {
  private name = 'Private'

  showName() {
    return this.name
  }

  private privateMethod() {
    console.log('Private method')
  }

  showPrivateMethod() {
    this.privateMethod()
  }
}

const pObj = new PrivateClass()

// console.log(pObj.name)

console.log(pObj.showName())

// console.log(pObj.privateMethod())

pObj.showPrivateMethod()

// class TestingPrivate extends PrivateClass {
//   myMethod() {
//     this.privateMethod()
//   }
// }
//


// static members
class StaticMembers {
  static prop = 'Teste static'

  static staticMethod() {
    console.log('Este é um método estático')
  }
}

console.log(StaticMembers.prop)

StaticMembers.staticMethod()
//


// generic class
class Item<T, U> {
  first 
  second

  constructor(first: T, second: U) {
    this.first = first
    this.second = second
  }

  get showFirst() {
    return `O first é: ${this.first}`
  }
}

const newItem = new Item('caixa', 'surpresa')

console.log(newItem)

console.log(newItem.showFirst)
console.log(typeof newItem.first)

const secondItem = new Item(12, true)

console.log(secondItem.showFirst)
console.log(typeof secondItem.first)
//


// parameters properties
class ParameterProperties {
  constructor(
    public name: string, 
    private qty: number, 
    private price: number
  ) {
    this.name = name
    this.qty = qty
    this.price = price
  }

  get showQty() {
    return `Qtd total: ${this.qty}`
  }

  get showPrice() {
    return `Qtd total: ${this.price}`
  }
}

const newShirt = new ParameterProperties('Camisa', 5, 19.99)

console.log(newShirt.name)

// console.log(newShirt.price)

console.log(newShirt.showPrice)

console.log(newShirt.showQty)
//


// class expressions
const myClass = class<T> {
  name

  constructor(name: T) {
    this.name = name
  }
}

const pessoa = new myClass('Jones')

console.log(pessoa)

console.log(pessoa.name)
//


// abstract class
abstract class AbstractClass {
  abstract showName(): void
}

// const newObj = new AbstractClass()

class AbstractEx extends AbstractClass {
  name: string

  constructor(name: string) {
    super()
    
    this.name = name
  }

  showName() {
    console.log(`O nome é: ${this.name}`)
  }
}

const newAbstractObject = new AbstractEx('Vitor')

newAbstractObject.showName()
//


// relations between classes
class Dog {
  name!: string
}

class Cat {
  name!: string
}

const doguinho: Dog = new Cat()

console.log(doguinho)