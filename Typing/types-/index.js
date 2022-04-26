"use strict";
// Number
let x = 10;
console.log(x);
console.log(typeof x);
let y = 15.584848;
console.log(y);
console.log(y.toPrecision(3));
console.log(typeof y);
//
// String
const firstName = 'Vitor';
console.log(firstName.toLocaleUpperCase());
let fullName;
const lastName = 'Brambilla';
fullName = firstName + ' ' + lastName;
console.log(fullName);
console.log(typeof fullName);
//
// Boolean
let a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
//
// Inference and Annotation
let ann = 'Test';
let inf = 'Test';
// ann = 1
// inf = 1
//
let num = 5;
let num2 = num.toString();
let message = `O número é ${num} e a string dele é "${num2}"`;
console.log(message);
//
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
