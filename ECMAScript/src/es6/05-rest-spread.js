// Arrays destructuring
let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, fruits[1]);

let fruits2 = ['Apple', 'Banana', 'Orange'];
let [,,fruit] = fruits2;

console.log(fruit); /*arroja "Orange"*/


// Object desctruturing
let user = {username: "Jose", age: 31};
let {username, age} = user;
console.log(username, user.age);
