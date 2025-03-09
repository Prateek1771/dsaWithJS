// filter method
// similar to 2nd 

const checkKeyInObj = (key, obj) =>{
    if(!obj) return false;

    return key.toString() in obj;
}

const object = {name: "prateek", age: 21}

console.log(checkKeyInObj("name", object)); // checking the name property is present in object or not
console.log(checkKeyInObj("gender", object));
console.log(checkKeyInObj("tostring", object));
