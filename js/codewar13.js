// const arr = ['css', 'js', 'ts'];

// const fromIndex = arr.indexOf('css'); 
// const toIndex = 2;

// const element = arr.splice(fromIndex, 1)[0];
// console.log(element); 

// arr.splice(toIndex, 0, element);

// console.log(arr); 

const arr2 = [2,3,5,5,6,7,'john', 'king', 'queen']
let numberInarray = arr2.filter(e => parseInt(e))
let stringInarray = arr2.filter(e => !parseInt(e))

const fromIndex = stringInarray.indexOf('king')
const toIndex = 2

const element = stringInarray.splice(fromIndex, 1)[0]

stringInarray.splice(toIndex, 0, element)
console.log(numberInarray.sort((a,b) => b-a).concat(stringInarray))
 