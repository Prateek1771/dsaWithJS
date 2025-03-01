// in console black/white => is string
// in console blue/other color => is number

// var a = 12 // a = 12
// console.log(a);

// let a        -- cannot use let after declaring value

console.log("---------------------------------------------------------");

// let z = ""    // nothing prints if loged
// let z1 = " "    // nothing prints if loged
// let z2 =     // ReferenceError
// console.log(z3); // if try to print which does not exists => ReferenceError: 

console.log("---------------------------------------------------------");

let a = 12
let b = "13"
console.log((a+b));  // 1213  -- its called concatenartion
console.log("sum of and b: "+(a+b));  // will get the sol but its a string together
// the bracket is solved first because priority given first to () 
console.log( a + b +" sum of and b");

let c = "12"
let d = 13
console.log((c+d));  // 1213

let e = 12
let f = 13
console.log((e+f));  // 25

console.log("---------------------------------------------------------");

console.log("1"+1); // 11
console.log("1"-1); // 0  and its type is num
console.log("101"-1); // 100  and its type is num
console.log("99"-1); // 98  and its type is num

//  this process which is carried is called type coversion

// + has 2 works -- concatination and addition (addition only when both sides are numbers)
// - has 1 work -- remove 1 value

console.log("---------------------------------------------------------");

// let age = prompt("enter the age: "); // prompt is a browser function which opens a dialog box to enter the value, it picks values as string
// console.log(age); // its always string 

// if want to get only the number => let age = Number(prompt("what is your age: "));
// can also convert the str to num => age = Number(age); 

// Number(12) // 12 - number
// Number("12") // 12 - number
// Number("Prateek") // NaN
// Number("12a") // NaN

// when converting from 1 type to another type called => type casting 

// in the prompt if we not give any answer press ok it accepts empty value and return nothing and if we cancel the i/p value it gives null and break the script(js code) will not run further

console.log("---------------------------------------------------------");

// Swap to 2 numbers by 3 methods

// method 1 => using 3rd value

let a1 = 10
let b1 = 20 
// let c1
console.log(" a: "+a1 + " b: "+b1) //  a: 10 b: 20

// a1 = c1   // this was the line making error (value = undefined) it applied from right to left, if it was c1 = a1 the top comment would have worked
// b1 = a1
// c1 = b1

// c1 = a1
// a1 = b1
// b1 = c1 // what actually worked

// console.log(" a: "+a1 + " b: "+b1) // a: undefined b: undefined
// it became undefined because c1 is currently undefined and then applied to all

let c1 = a1 // c1 = 10, a = 10
a1 = b1 // a1 = 20, b1 = 20
b1 = c1 // b1 = 10, c1 = 10
console.log(" a: "+a1 + " b: "+b1) // a: 20 b: 10

// method 2 

let a2 = 10
let b2 = 20 
console.log(" a: "+a2 + " b: "+b2) //  a: 10 b: 20

a2 = a2 + b2 // a2 = 30 ( 10 + 20 )
b2 = a2 - b2 // b2 = 10 ( 30 - 20 ) // a2 from previous line
a2 = a2 - b2 // a2 = 20 ( 30 - 10 ) // b2 from previous line

console.log(" a: "+a2 + " b: "+b2) // a: 20 b: 10


// method 3  destructuring assignment

let a3 = 10;
let b3 = 20;
console.log(a3, b3); // Output: 10 20

[a3, b3] = [b3, a3]; // Swaps values

console.log(a3, b3); // Output: 20 10

console.log("---------------------------------------------------------");

let a4 = 12, b4 = 22
console.log(a4+b4); // 34
console.log(a4-b4); // -10
console.log(a4/b4); // 0.5454545454545454
console.log(Math.floor(a4/b4)); // 0
console.log(a4%b4); // 12
console.log(a4*b4); // 264

console.log(a4%10); // 2  => used to get the last degit

console.log("---------------------------------------------------------");

console.log(10>5);  //true
console.log(10<5);  //false
console.log(10>=5);  //true
console.log(10<=5);  //false
console.log(10>=10);  //true
console.log(10!=5);  //true
console.log(10!==5);  //true strict version(both should be number)
console.log(10===5);  //false strict version(both should be number)
console.log("10"==5);  //false strict version(both should be number)
console.log("10"==="10");  //true strict version(both should be str)
console.log("10"==="3");  //false strict version(both should be str with same value)
console.log("10"== 10);  //true

// a = b // = => assignment operator
        // == => it checks both value are same
        // === => it checks both value are same and also their type

console.log("---------------------------------------------------------");

console.log(10>6 && 5<9); // true  both case should be true
console.log(10<6 && 5<9); // false
console.log(10>6 && 5<9 && 15==15); // true
console.log(10>6 || 5<9); // true any one case should be true
console.log(10<6 || 5<9); // true
console.log(10<6 || 5<9 || 5!=10); // true

console.log("---------------------------------------------------------");

// post increment (Dabha)
    // use -> change
    // eat -> pay

    let x = 10
    let y = x++
    console.log(x, y); // 11 10
    
    let x2 = 10
    let y2 = x2--
    console.log(x2, y2); // 9 10

// post increment (Dominos)
    // change -> use
    // pay -> eat

    let x1 = 10
    let y1 = ++x1
    console.log(x1, y1); // 11 11
    
    let x3 = 10
    let y3 = --x3
    console.log(x3, y3); // 9 9

console.log("---------------------------------------------------------");

let i = 11;
i = i++ + ++i; // 11+1 + 1+11
console.log(i);



let i1 = 11, j1 = 22;
let k1 = i1 + j1 + i1++ + j1++ + ++i1 + ++j1;
// let k1 = i1 + j1 +   i1++   +   j1++   +    ++i1    +  ++j1;
//          11 + 22 + 12(11+1) + 23(22+1) +  13(1+12)  +  24(1+23)
console.log("a: "+ i1); // 13
console.log("b: "+ j1); // 24
console.log("c: "+ k1); // 103



let p = true;
p++
console.log(p); // 2, true is considered as 1 so 1+1



// let o = 11++;
// console.log(o);  // cannot apply unary operator on nums SyntaxError: 




// let u = 11;
// let r = --(u++);   // r = --12   => cannot apply unary on nums
// console.log(u, r);

console.log("---------------------------------------------------------");

console.log(Math.round(5.9)); // 6 rounds off to nearest value
console.log(Math.round(5.2)); // 5 
console.log(Math.ceil(5.1)); // 6 if any . value changes it takes top value 
console.log(Math.ceil(5.9)); // 6 
console.log(Math.floor(5.9)); // 5 conversion of floor to int, it brings down the value
console.log(Math.trunc(5.9)); // 5 removes decimal part, it removes decimal parts not change the value

// difference b/w floor and trunc
// console.log(Math.floor(5.9));  // Output: 5
// console.log(Math.floor(-5.9)); // Output: -6 (rounds down)

// console.log(Math.trunc(5.9));  // Output: 5
// console.log(Math.trunc(-5.9)); // Output: -5 (simply removes decimal, does not round down)

console.log(Math.pow(2,5)); // 32   2^5
console.log(Math.sqrt(25)); // 5  squreroot
console.log(Math.cbrt(25)); // 2.924017738212866  cuberoot  
console.log(Math.abs(-25)); // 25 converts negative to pos value and pos value to pos
console.log(Math.max(2,4,6,10)); // 10
console.log(Math.min(2,4,6,10)); // 2
console.log(Math.random()); // 0.23318158731136007
console.log(Math.floor(Math.random()*9000)+1000); // 8759   used to generate otp
  
let o = 56.89234
console.log(o.toFixed(2));  // 56.89  fixes after 2 digits

console.log("---------------------------------------------------------");

function rectArea(l, b) {
    console.log(l*b);
}
function rectPeri(l, b) {
    peri = 2*(l+b)
    console.log(peri);
}
function circleCircum(r) {
    console.log(2 * (Math.PI) * r);
}

rectArea(5, 10) // 50
rectPeri(5, 10) // 30
circleCircum(5)

console.log(Math.floor(Math.random()*999999) + 100000);


