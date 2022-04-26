// parametros tipados
function soma(a: number, b: number) {
  console.log(a + b)
}

soma(4, 5)
//


// retorno de função
function greeting(name: string): string {
  return `Olá ${name}`
}

console.log(greeting('Vitor'))
//


// função anônima
setTimeout(function() {

  const sallary : number = 1000

  // console.log(parseFloat(sallary))

  // console.log(sallary)

}, 2000)
//

// props opcionais
function showNumbers(a: number, b: number, c?: number) {
  console.log("A: " + a)
  console.log("B: " + b)
  if (c) {
    console.log('C: ' + c)
  }
}

showNumbers(1, 2, 3)
showNumbers(4, 5)
//


// validando argumento opcional
function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    return `Olá, ${firstName} ${lastName}, tudo bem?`
  }

  return `Olá, ${firstName}, tudo bem?`
}

console.log(advancedGreeting('Vitor', 'Brambilla'))
console.log(advancedGreeting('Vitor'))
//


// Union type
function showBalance(balance: string | number) {
  console.log(`O saldo da conta é R$${balance}`)
}

showBalance(100)
showBalance('500')
//

function showUserRole(role: boolean | string) {
  if (typeof role === 'boolean') {
    return 'Usuário não aprovado!'
  }

  return `A função do usuário é: ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole('Admin'))
//

// type alias
type ID = string | number

function showId(id: ID) {
  console.log(`O id é: ${id}`)
}

showId(1)
showId("200")
//

// literal types
function showDirection(direction: 'left' | 'right' | 'center')  {
  console.log(`A direção é: ${direction}`)
}

showDirection('left')
// showDirection('top')
//


// non null assertion operators
const p = document.getElementById('some-p')

console.log(p!.innerText)
//


// bigint
let n: bigint

n = 1000n

console.log(n)

console.log(typeof n)

console.log(n + 100n)
//


// symbol 
let symbolA:symbol = Symbol('a')
let symbolB:symbol = Symbol('a')

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)