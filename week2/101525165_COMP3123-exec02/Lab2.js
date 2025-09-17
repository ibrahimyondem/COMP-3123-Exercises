//COMP 3123 – Full Stack Development I – Lab 2
//Exercise 1

// gretter = (myArray, counter) => {
//     let greetText = 'Hello';

//     for(let i of myArray){
//         console.log(`${greetText} ${i}`);
//     }
// }

// gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

//Exercise 2
function capitalize(string){
    const [first, ...rest] = string.trim();
    return first.toUpperCase() + rest.join('').toLowerCase();
}

console.log(capitalize("fooBar"));
console.log(capitalize("nodeJs"));