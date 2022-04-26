"use strict";
// fields in classes
class User {
}
const vitor = new User();
console.log(vitor);
vitor.name = 'Vitor';
// vitor.job = 'Programmer'
console.log(vitor);
//
// contructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const enzo = new NewUser('Enzo', 18);
console.log(enzo);
// const pedro = new NewUser('Pedro')
//
// campos readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car('Fusca');
console.log(fusca);
console.log(fusca.wheels);
fusca.name = 'Fusca turbo';
// fusca.wheels = 5
//
// heritage and super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine('Trator');
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine('Destroyer', 4);
console.log(trator);
console.log(destroyer);
//
// methods
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log('Hey stranger!');
    }
}
const jimmy = new Dwarf('Jimmy');
console.log(jimmy.name);
jimmy.greeting();
console.log(jimmy);
//
// this
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`);
    }
}
const volvo = new Truck('Volvo', 400);
volvo.showDetails();
//
// getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + ' ' + this.surname;
    }
}
const matheusBattisti = new Person('Matheus', 'Battisti');
console.log(matheusBattisti.name);
console.log(matheusBattisti.fullName);
//
// setters
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log('X inserido com sucesso');
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log('Y inserido com sucesso');
    }
    get getCoords() {
        return `X: ${this.x} e Y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillX = 15;
myCoords.fillY = 0;
myCoords.fillY = 10;
console.log(myCoords);
console.log(myCoords.getCoords);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é: ${this.title}`;
    }
}
const myPost = new blogPost('Hello world');
console.log(myPost.itemTitle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título é: ${this.title}`;
    }
}
//
// override of methods
class Base {
    someMethod() {
        console.log('alguma coisa');
    }
}
class Nova extends Base {
    someMethod() {
        console.log('testando algo');
    }
}
const myObj = new Nova();
myObj.someMethod();
//
// public
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const cInstance = new C();
console.log(cInstance.x);
const dInstance = new D();
console.log(dInstance.x);
//
// protected
class E {
    constructor() {
        this.x = 15;
    }
    protectedMethod() {
        console.log('Este método é protegido');
    }
}
class F extends E {
    showX() {
        console.log('X: ' + this.x);
    }
    showProtectedMethod() {
        this.protectedMethod();
    }
}
const fInstance = new F();
fInstance.showX();
fInstance.showProtectedMethod();
//
// private
class PrivateClass {
    constructor() {
        this.name = 'Private';
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log('Private method');
    }
    showPrivateMethod() {
        this.privateMethod();
    }
}
const pObj = new PrivateClass();
// console.log(pObj.name)
console.log(pObj.showName());
// console.log(pObj.privateMethod())
pObj.showPrivateMethod();
// class TestingPrivate extends PrivateClass {
//   myMethod() {
//     this.privateMethod()
//   }
// }
//
// static members
class StaticMembers {
    static staticMethod() {
        console.log('Este é um método estático');
    }
}
StaticMembers.prop = 'Teste static';
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
//
// generic class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é: ${this.first}`;
    }
}
const newItem = new Item('caixa', 'surpresa');
console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem.first);
const secondItem = new Item(12, true);
console.log(secondItem.showFirst);
console.log(typeof secondItem.first);
//
// parameters properties
class ParameterProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `Qtd total: ${this.qty}`;
    }
    get showPrice() {
        return `Qtd total: ${this.price}`;
    }
}
const newShirt = new ParameterProperties('Camisa', 5, 19.99);
console.log(newShirt.name);
// console.log(newShirt.price)
console.log(newShirt.showPrice);
console.log(newShirt.showQty);
//
// class expressions
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass('Jones');
console.log(pessoa);
console.log(pessoa.name);
//
// abstract class
class AbstractClass {
}
// const newObj = new AbstractClass()
class AbstractEx extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O nome é: ${this.name}`);
    }
}
const newAbstractObject = new AbstractEx('Vitor');
newAbstractObject.showName();
//
// relations between classes
class Dog {
}
class Cat {
}
const doguinho = new Cat();
console.log(doguinho);
