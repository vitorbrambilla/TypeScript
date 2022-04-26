// void
function withoutReturn():void {
  console.log('Essa função não tem retorno...')
}

withoutReturn()
//


// callback as argument
function greeting(name: string):string {
  return `Olá ${name}`
}

function preGreeting(f: (name: string) => string, userName:string) {
  console.log('Preparando a função')

  const greet = f(userName)

  console.log(greet)
}

preGreeting(greeting, 'Vitor')
//


// generic function
function firstElement<T>(arr: T[]): T {
  return arr[1]
}

console.log(firstElement([1, 2, 3]))
console.log(firstElement(['a', 'b', 'c']))
// console.log(firstElement('teste'))

function mergeObjects<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2
  }
}

const newObject = mergeObjects({name: 'Vitor'}, {age: 20, job: 'Programmer'})

console.log(newObject)
//


// constraints
function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T

  if (+a > +b) {
    biggest = a
  } else {
    biggest = b
  }

  return biggest
}

console.log(biggestNumber(5, 3))
console.log(biggestNumber('12', '5'))
// console.log(biggestNumber('12', 5))


// type of argument
function mergeArrays<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2)
}

console.log(mergeArrays<number | string>([1, 2, 3], ['teste', 'testando']))
//


// optional parameters
function modernGreeting(name: string, greet?: string) {
  if (greet) {
    return `Olá ${greet} ${name}, tudo bem?`
  }

  return `Olá ${name}, tudo bem?`
}

console.log(modernGreeting('Vitor'))
console.log(modernGreeting('Vitor', 'Dr.'))
//


// default parameters
function somaDefault(n: number, m = 10): number {
  return n + m
}

console.log(somaDefault(10))
console.log(somaDefault(15, 15))
//


// unknown
function doSomething(x: unknown) {
  if (Array.isArray(x)) {
    console.log(x[0])
  } else if (typeof x === 'number') {
    console.log('X é um número')
  }
}

doSomething([1, 2, 3])
doSomething(5)
//


// never
function showErrorMessage(msg: string): never {
  throw new Error(msg)
}

// showErrorMessage('Algum erro!')
//


// rest parameters
function sumAll(...n: number[]) {
  return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1, 2, 3, 4, 5))
console.log(sumAll(5, 366, 444))
//


// destructuring as parameter
function showProductDetails({name, price}: {name: string, price: number}):string {
  return `O nome do produto é ${name} e ele custa R$${price}`
}

const shirt = {name: 'shirt', price: 50.00}

console.log(showProductDetails(shirt))