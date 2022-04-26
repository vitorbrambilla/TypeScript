// import of files
import importGreet from './greet';

importGreet();
//


// import of variables
import { x } from './variable';

console.log(x)
//


// mutiple imports
import { a, b, myFunction } from './multiple';

console.log(a)
console.log(b)

myFunction()
//


// alias
import { someName as name } from './changename';

console.log(name)
//


// import all
import * as myNumbers from './numbers';

console.log(myNumbers)

const nx = myNumbers.n1

console.log(nx)

myNumbers.showNumber()
//


// importing types
import { Human } from './mytype';

class User implements Human {
  name 
  age

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const vitor = new User('Vitor', 18)
console.log(vitor)