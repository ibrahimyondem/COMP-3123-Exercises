//COMP 3123 – Full Stack Development I – Lab 2
//Exercise 1
// gretter = (myArray, counter) => {
//     let greetText = 'Hello';

//     for(let i of myArray){
//         console.log(`${greetText} ${i}`);
//     }
// }

// gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

// //Exercise 2
// function capitalize(string){
//     const [first, ...rest] = string.trim();
//     return first.toUpperCase() + rest.join('').toLowerCase();
// }

// console.log(capitalize("fooBar"));
// console.log(capitalize("nodeJs"));

// //Exercise 3
// const colors = ['red', 'green', 'blue'];
// const capitalizedColors = colors.map(capitalize);
// console.log(capitalizedColors);

//Exercise 4
var values = [1,60,34,30,20,5]

const findNum = (num) => num < 20;

const filterLessThan20 = values.filter(findNum);

console.log(filterLessThan20);

//Exercise 5