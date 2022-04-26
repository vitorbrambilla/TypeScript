// type guard
function sum(a: number | string, b: number | string) {
  if (typeof a === 'string' && typeof b === 'string') {
    console.log(parseFloat(a) + parseFloat(b))
  } else if (typeof a === 'number' && typeof b === 'number') {
    console.log(a + b)
  } else {
    console.log("Impossivel realizar essa soma")
  }
}

sum('4', '6')
sum(14, 46.3)
sum(14, '6')
//

// checando se o valor existe
function operations(arr: number[], operation?: string | undefined) {
  if (operation) {

    if (operation === 'sum') {
      const sum = arr.reduce((i, total) => i + total)
      console.log(sum)
    } else if (operation === 'multiply') {
      const multiply = arr.reduce((i, total) => i * total)
      console.log(multiply)
    }

  } else {
    console.log('Defina uma operação')
  }
}

operations([1, 2, 3])
operations([1, 2, 3], 'sum')
operations([1, 2, 4], 'multiply')
//


//instance of

class User {
  name

  constructor(name: string) {
    this.name = name
  }
}

class SuperUser extends User {
  constructor(name: string) {
    super(name)
  }
}

const vitor = new User('Vitor')
const paul = new SuperUser('Paul')

console.log(vitor)
console.log(paul)

function userGreeting(user: object) {
  if (user instanceof SuperUser) {
    console.log(`Olá ${user.name}, deseja ver os dados do sistema?`)
  } else if (user instanceof User) {
    console.log(`Olá ${user.name}`)
  }
}

userGreeting(vitor)
userGreeting(paul)
//


// operator in
class Dog {
  name
  breed

  constructor(name: string, breed?: string) {
    this.name = name
    if (breed) {
      this.breed = breed
    }
  }
}

const turca = new Dog('Turca')
const bob = new Dog('Bob', 'Pastor alemão')

function showDogDetails(dog: Dog) {
  if ('breed' in dog) {
    console.log(`O cachorro é da raça ${dog.breed}`)
  } else {
    console.log('O cachorro é um SRD')
  }
}

showDogDetails(turca)
showDogDetails(bob)
//


type Review = boolean | number

function reviewUser(review: Review) {
  if (!review) {
    console.log('sem avaliação')
  }

  console.log(`A sua avaliação foi: ${review}`)
}

reviewUser(false)
reviewUser(1)
reviewUser(5)