// 2 most common methods (Inbuilt methods) -JSON
// - used to convert the objects to strings and vice versa

// these are commonly used in the api data transfer and receiving the data from server

const user = {
    name: 'Prtateek',
    age: 21,
    branch: "AI and ML",
    college: undefined,
    company: () => {
        console.log('Google');
    }
}
// it will not print the function and undefined values because the datas should be in serialized data

const jsonString = JSON.stringify(user); // converts every data to string
console.log(jsonString); // {"name":"Prtateek","age":21,"branch":"AI and ML"}

const jsonString2 = JSON.parse('{"name":"Prtateek","age":21,"branch":"AI and ML"}'); // converts the string to objects
console.log(jsonString2); // { name: 'Prtateek', age: 21, branch: 'AI and ML' }
