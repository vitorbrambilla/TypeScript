"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log('O produto está disponível');
    }
}
const shirt = {
    name: 'Camisa',
    price: 19.99,
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({ name: 'Tenis', price: 199.00, isAvailable: false });
function showUserDetails(user) {
    console.log(`O usuário tem o email: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
}
const u1 = { email: 'vitor@email.com', role: 'Admin' };
const u2 = { email: 'joao@email.com' };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: 'VW',
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const vitor = {
    name: 'Vitor',
    age: 18
};
console.log(vitor);
const superman = {
    name: 'Superman',
    age: 30,
    superpowers: ['super força', 'voar']
};
console.log(superman);
const arnold = {
    name: 'Arnold',
    type: 'Shotgun',
    caliber: 12
};
console.log(arnold);
console.log(arnold.caliber);
//
// readonly array
let myArray = ['Maçã', 'Laranja', 'Banana'];
// myArray[3] = 'Mamão'
console.log(myArray);
myArray.forEach((item) => {
    console.log('Fruta: ' + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6]
// const mixedArray: fiveNumbers = [1, true, 'teste', 4, 5]
console.log(myNumberArray);
const anotherUser = ['Vitor', 18];
console.log(anotherUser[0]);
anotherUser[0] = 'Enzo';
console.log(anotherUser[0]);
// anotherUser[1] = 'teste'
//
// tuples with readonly
function showNumbers(numbers) {
    // numbers[0] = 10
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
