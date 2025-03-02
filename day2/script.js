// question - 1 valid voter
let age = Number(("enter the age:"))
if(isNaN(age)){
    console.log("wrong input");
}
else if(age >= 18){
    console.log("allowed");
} 
else {
    console.log("not allowed");
}

// NaN === NaN  => false
// isNaN(NaN)   => true  and isNaN is a function
// isNaN(3)     => false u can pass any thing it comes as false

// question - 2 shop discount

console.log("--------------------------------------------------------------------------------------------------------");

// question - 2 Discount

let amount = Number(("enter the total price:"))
// easy way
if(amount>=0 && amount<=5000){
    console.log(amount);
} else if(amount>5000 && amount<=7000) {
    let discountAmt = Math.floor((5*amount)/100)
    console.log("discount:"+ discountAmt);
    console.log("total: " + (amount - discountAmt));

} else if(amount>7000 && amount<=9000) {
    let discountAmt = Math.floor((10*amount)/100)
    console.log("discount:"+ discountAmt);
    console.log("total: " + (amount - discountAmt));

} else if(amount>9000) {
    let discountAmt = Math.floor((20*amount)/100)
    console.log("discount:"+ discountAmt);
    console.log("total: " + (amount - discountAmt));
} else{
    console.log("Not valid input");
}

// smart way
dis = 0
if(amount>=0 && amount<=5000){
    dis = 0
} else if(amount>5000 && amount<=7000) {
    dis = 5
} else if(amount>7000 && amount<=9000) {
    dis = 10
} else if(amount>9000) {
    dis = 20
} else{
    console.log("Not valid input");
}

console.log(amount- Math.floor((dis*amount)/100));


console.log("--------------------------------------------------------------------------------------------------------");

// question - 3 Discount (bottom to top approach) commonly seen in electricity bills

//        Unit           |            Price
//      up to 100        |         rs. 4/unit
//      101 - 200        |         rs. 6/unit
//      201 - 400        |         rs. 8/unit
//     more than 400     |         rs. 13/unit

// ex: no of units: 120
//     120 => 100 | 20
//     (120 - 100) => 100 * 4 (in 120 i have used 100) => 400
//     (20 - 20) => 20 * 6 (in 20 i have used 20)  =>     120

//     --  toatal = 520

// ex: no of units: 700
//     700 => 300 | 200 | 100 | 100
//     (700 - 400) => 300 * 13 (in 700 i have used 300) => 3900
//     (400 - 200) => 200 * 8 (in 400 i have used 200)  => 1600
//     (200 - 100) => 100 * 6 (in 200 i have used 100)  =>  600 
//     (100 - 100) => 100 * 4 (in 100 i have used 100)  =>  400

//     --  toatal = 6500

let units = Number(("Enter the electricity unit")) 
let amt = 0;
if(units>400){
    amt = (units - 400) * 13
} 
if(units>200 && units<=400){
    amt += (units - 200) * 8
}
if(units>100 && units<=200){
    amt += (units - 100) * 6
}
amt += units*4


console.log("--------------------------------------------------------------------------------------------------------");


let cash = 9606861
if(cash>=500){
    console.log("500 notes: "+ (Math.floor(cash/500)));
    cash = cash % 500
}
if(cash>=200){
    console.log("200 notes: "+ (Math.floor(cash/200)));
    cash = cash % 200
}
if(cash>=100){
    console.log("100 notes: "+ (Math.floor(cash/100)));
    cash = cash % 100
}
if(cash>=50){
    console.log("50 notes: "+ (Math.floor(cash/50)));
    cash = cash % 50
}
if(cash>=20){
    console.log("20 notes: "+ (Math.floor(cash/20)));
    cash = cash % 20
}
if(cash>=10){
    console.log("10 notes: "+ (Math.floor(cash/10)));
    cash = cash % 10
}
if(cash>=5){
    console.log("5 notes: "+ (Math.floor(cash/5)));
    cash = cash % 5
}
if(cash>=2){
    console.log("2 notes: "+ (Math.floor(cash/2)));
    cash = cash % 2
}
if(cash>=1){
    console.log("1 notes: "+ (Math.floor(cash/1)));
    cash = cash % 1
}

console.log("--------------------------------------------------------------------------------------------------------");

// ternary operator  ? :
console.log(20>10?"true":"false");
// condition ? true : false

// nested ternary operator 
let num = 0
console.log(num>0?"positive":num<0?"negative":"zero");


console.log("--------------------------------------------------------------------------------------------------------");

let day = 2
let name = "prateek"

switch(day){  // used to select perticular
    case 1 : console.log("day 1");
    break
    case 2 : console.log("day 2");
    break
    default: console.log("invalid");
}
switch(day){ // used for the range
    case 1 : 
    case 2 : console.log("day 1-2");
    break
    default: console.log("invalid");
}
switch(name){ // used for strings and chars
    case "prateek" : console.log("prateek 1");
    break
    case "Prateek" : console.log("prateek 2");
    break
    default: console.log("invalid");
}
switch(true){ // used for boolean values
    case 12<10 : console.log(false);
    break
    case 12>10 : console.log(true);
    break
    default: console.log("invalid");
}