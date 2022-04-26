// example decorator
function myDecorator() {
  console.log('iniciando decorator')

  return function(
    target: any, 
    propertKey: string, 
    descriptor: PropertyDescriptor
  ) {
    console.log('executando decorator')
    console.log(target)
    console.log(propertKey)
    console.log(descriptor)
  }
}

class myClass {
  name!: string

  @myDecorator()
  testing() {
    console.log('terminando execução do método')
  }
}

const myObj = new myClass()

myObj.testing()
//


// multiple decorators
function a() {
  return function(
    target: any, 
    propertKey: string, 
    descriptor: PropertyDescriptor
  ) {
    console.log('executou a.')
  }
}

function b() {
  return function(
    target: any, 
    propertKey: string, 
    descriptor: PropertyDescriptor
  ) {
    console.log('executou b.')
  }
}

function c() {
  return function(
    target: any, 
    propertKey: string, 
    descriptor: PropertyDescriptor
  ) {
    console.log('executou c.')
  }
}

class MultipleDecorators {
  @c()
  @a()
  @b()

  testing() {
    console.log('terminando a execução')
  }
}

const multiple = new MultipleDecorators()

multiple.testing()
//


// class decorator
function classDec(constructor: Function) {
  console.log(constructor.name)
  if(constructor.name === 'User') {
    console.log('Criando usuário')
  }
}

@classDec
class User {
  name

  constructor(name: string) {
    this.name = name
  }
}

const vitor = new User('Vitor')

console.log(vitor)
//


// method decorator
function enumerable(value: boolean) {
  return function(
    target: any, 
    propertKey: string, 
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value
  }
}

class Machine {
  name

  constructor(name: string) {
    this.name = name
  }

  @enumerable(false)
  showName() {
    console.log(this)
    return `O nome da máquina é: ${this.name}`
  }
}

const trator = new Machine('Trator');

console.log(trator.showName())
//


// acessor decorator
class Monster {
  name?
  age?

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  @enumerable(true)
  get showName() {
    return `Nome do monstro: ${this.name}`
  }

  @enumerable(true)
  get showAge() {
    return `Idade do monstro: ${this.age}`
  }
}

const charmander = new Monster('Charmander', 15)

console.log(charmander)
//


// property decorator
function formatNumber() {
  return function(target: Object, propertKey: string) {
    let value: string

    const getter = function() {
      return value
    }

    const setter = function(newVal: string) {
      value = newVal.padStart(5, '0')
    }

    Object.defineProperty(target, propertKey, {
      set: setter,
      get: getter,
    })
  }
}

class ID {
  @formatNumber()
  id

  constructor(id: string) {
    this.id = id
  }
}

const newItem = new ID('1')

console.log(newItem)

console.log(newItem.id)
//


// real example - class decorator
function createdDate(created: Function) {
  created.prototype.createdAt = new Date()
}

@createdDate
class Book {
  id
  createdAt?: Date

  constructor(id: number) {
    this.id = id
  }
}

@createdDate
class Pen {
  id

  constructor(id: number) {
    this.id = id
  }
}

const newBook = new Book(12)
const newPen = new Pen(50)

console.log(newBook)
console.log(newPen)

console.log(newBook.createdAt)
//


// real example - method decorator
function checkIfUserPosted() {
  return function (
    target: Object, 
    key: string | symbol, 
    descriptor: PropertyDescriptor
  ) {
    const childFunction = descriptor.value
    // console.log(childFunction)
    descriptor.value = function(...args: any[]) {
      if(args[1] === true) {
        console.log('User já postou')
        return null
      } else {
        return childFunction.apply(this, args)
      }
    }

    return descriptor
  }
}

class Post {
  alreadyPosted = false

  @checkIfUserPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true
    console.log(`Post do usuário: ${content}`)
  }
}

const newPost = new Post()

newPost.post('Meu primeiro post', newPost.alreadyPosted)

newPost.post('Meu segundo post', newPost.alreadyPosted)
//


// real example - property decorator
function Max(limit: number) {
  return function(target: Object, propertyKey: string) {
    let value: string

    const getter = function() {
      return value
    }

    const setter = function(newVal: string) {
      if(newVal.length > limit) {
        console.log(`O valor deve ter no máximo ${limit} dígitos`)
        return
      } else {
        value = newVal
      }
    }
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
    })
  }
}

class Admin {
  @Max(10)
  username 

  constructor(username: string) {
    this.username = username
  }
}

let enzo = new Admin('vitoradmin12345')
let haha = new Admin('haha')

console.log(haha)