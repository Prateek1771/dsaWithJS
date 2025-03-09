// map methods - array metod

const users = [
    {name: "prateek", age: 21},
    {name: "prateek2", age: 23},
    {name: "prateek3", age: 22},
    {name: "prateek4", age: 20},
]

// to modify the arrays obj values
let newSet = users.map((user) => {
    return {
        ...user,age:user.age + 5
    }
})
console.log(newSet);

//same as 1st
let newSet2 = users.map(user => ({
    ...user,age:user.age + 5
}))
console.log(newSet2);
