// spread operator
// creates a shallow copy of original, does not modify the original, just creates individual copies of elements of original
// can be used to merge arrays, objects

const nums = [ 1, 2, 3];
const copyOfNums = [...nums];
console.log(copyOfNums); // [ 1, 2, 3 ]

const arr1 = [1, 2];
const arr2 = [3, 4];
const mergedArr = [...arr1, ...arr2];
console.log(mergedArr); // [ 1, 2, 3, 4 ]

const initial = [2, 3];
const extended = [1, ...initial, 4];
console.log(extended); // [ 1, 2, 3, 4 ]

const person = { name: "Prateek", age: 21};
const personCopy = { ...person};
console.log(personCopy); // { name: 'Prateek', age: 21 }

const person2 = { name: "Prateek"};
const personCopy2 = { ...person2, age: 21};
console.log(personCopy2); // { name: 'Prateek', age: 21 }

const person3 = { name: "Prateek", age: 21};
const updated = {...person3, age: 22};
console.log(updated); // { name: 'Prateek', age: 22 }
