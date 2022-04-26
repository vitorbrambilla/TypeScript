"use strict";
// parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
//
// retorno de função
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting('Vitor'));
//
// função anônima
setTimeout(function () {
    const sallary = 1000;
    // console.log(parseFloat(sallary))
    // console.log(sallary)
}, 2000);
//
// props opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log('C: ' + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
//
// validando argumento opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting('Vitor', 'Brambilla'));
console.log(advancedGreeting('Vitor'));
//
// Union type
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
showBalance(100);
showBalance('500');
//
function showUserRole(role) {
    if (typeof role === 'boolean') {
        return 'Usuário não aprovado!';
    }
    return `A função do usuário é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole('Admin'));
function showId(id) {
    console.log(`O id é: ${id}`);
}
showId(1);
showId("200");
//
// literal types
function showDirection(direction) {
    console.log(`A direção é: ${direction}`);
}
showDirection('left');
// showDirection('top')
//
// non null assertion operators
const p = document.getElementById('some-p');
console.log(p.innerText);
//
// bigint
let n;
n = 1000n;
console.log(n);
console.log(typeof n);
console.log(n + 100n);
//
// symbol 
let symbolA = Symbol('a');
let symbolB = Symbol('a');
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
