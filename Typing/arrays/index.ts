let numbers: number[] = [1, 2, 3]

numbers.push(5)

console.log(numbers[3])
//

const nomes: string[] = ['Vitor', 'Enzo']

nomes.push('Lucca')

console.log(nomes[2])
//


const nums: Array<number> = [100, 200]

nums.push(300)

console.log(nums)
//

// Any
const arr1: any = [1, 'teste', true, [], {nome: 'Matheus'}]

console.log(arr1)

arr1.push([1, 2, 3])

console.log(arr1)
//

// Union type
const arr2: Array<number | string | boolean> = [1, 'teste', false]