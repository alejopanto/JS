var lastName = 'Alejandro'
lastName = 'Jose'
console.log(lastName)

let lastName = 'Alejandro'
lastName = 'Jose'
console.log(lastName)

const lastName = 'Alejandro'
lastName = 'Jose'
console.log(lastName)

const fruits = () => {
    if (true) {
        var fruit1 = 'Apple'; // function Scope
        let fruit2 = 'Kiwi';  // block scope
        const fruit3 = 'Banana';  // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits()