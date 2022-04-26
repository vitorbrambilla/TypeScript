"use strict";
// tipos
function passCoordinates(coord) {
    console.log('X coordinates: ' + coord.x);
    console.log('Y coordinates: ' + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
//
const pessoaObj = { nome: 'Vitor', surname: 'Brambilla' };
console.log(pessoaObj);
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
const person = { name: 'Vitor', age: 18 };
console.log(person);
// type personType = {
//   age: number
// }
//
