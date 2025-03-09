// splice - used for element add, remove, relace
// will modify the original array

let arr = [1,2,3,4,5];

arr.splice(2,1); // remove 1 element from index 2
console.log(arr); // [ 1, 2, 4, 5 ]

arr.splice(2,0,3); // add 3 at index 2
console.log(arr); // [ 1, 2, 3, 4, 5 ]

arr.splice(2,2,3,4); // replace 2 elements from index 2 with 3,4
console.log(arr); // [ 1, 2, 3, 4, 5 ]