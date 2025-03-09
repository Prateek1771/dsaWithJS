// how spread operator works on functions and strings

function sum(a, b, c) {
    return a + b + c
}

let num = [1, 2, 3]
console.log(sum(...num)); // 6
console.log(sum(num)); // 1,2,3 undefinedundefined

const name = 'javascript'
const letters = [...name]
console.log(letters); // ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
