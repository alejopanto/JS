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


// Spread operator
let person = {name: "Alejandro", age: 28};
let country = "COl"
let data = {id:1, ...person, country}
console.log(data);

let kissEmoji = [..."👩‍❤️‍💋‍👩"]
console.log(kissEmoji)

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(familyEmoji)


// Rest
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}
sum(1, 1, 2, 3);