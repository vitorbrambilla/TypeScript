"use strict";
// generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData('test'));
console.log(showData(true));
console.log(showData(['hello']));
//
// constraint at generic
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: 'Porta', cor: 'Branca' };
const otherObj = { name: 'Carro', wheels: 4, engine: 1.0 };
console.log(showProductName(myObj));
console.log(showProductName(otherObj));
const myCar = { name: 'fusca', wheels: 4, engine: 1.0, color: 'Branco' };
const myPen = { name: 'Caneta', wheels: false, engine: false, color: 'Azul' };
console.log(myCar);
console.log(myPen);
//
// type parameters
function getSomeKey(obj, key) {
    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '2tb',
    ram: '32gb'
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: 'Vitor',
    age: 18,
    hasDriverLicense: false
};
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
// console.log(showCharName(myChar, 'test'))
//
// typeof type operator
const userName = 'Vitor';
const userName2 = 'Enzo';
const userName4 = 'Lucca';
const newTruck = {
    km: 10000,
    kg: 5000,
    description: 'Caminhão para pouca carga'
};
function showKm(km) {
    console.log(`O veículo tem a km de: ${km}`);
}
showKm(newTruck.km);
const newCar = {
    km: 5000,
    kg: 1000
};
showKm(newCar.km);
const someVar = 5;
const testing = 'some text';
