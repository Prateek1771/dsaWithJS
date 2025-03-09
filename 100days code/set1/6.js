// slice method

let arr = [1, 2, 3, 4, 5];

// let sliced = arr.slices(startIndex, endIndex);
let sliced = arr.slice(1, 3); // it doesnot modify the original array
console.log(sliced); // [ 2, 3 ]

let sliced2 = arr.slice(1); 
console.log(sliced2); // [ 2, 3, 4, 5 ]

let sliced3 = arr.slice(1, -1); 
console.log(sliced3); // [ 2, 3, 4 ]

let sliced4 = arr.slice(1, 7); 
console.log(sliced4); // [ 2, 3, 4, 5 ]