// key in present in a obj or not

const checkKeyInObj = (key, obj) =>{
    if(!obj) return false;

    // return key.tostring() in obj; // checking the key is present in obj or not
    // it returns true in case of "toString" and "hasOwnProperty" also beacuse it checks the prototype chain (object prototype)
    return obj.hasOwnProperty(key);
}

const object = {name: "prateek", age: 21}

console.log(checkKeyInObj("name", object)); // checking the name property is present in object or not
console.log(checkKeyInObj("gender", object));
console.log(checkKeyInObj("tostring", object));
