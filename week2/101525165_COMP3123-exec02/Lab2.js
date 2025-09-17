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

// //Exercise 4
// var values = [1,60,34,30,20,5]

// const findNum = (num) => num < 20;

// const filterLessThan20 = values.filter(findNum);

// console.log(filterLessThan20);

// //Exercise 5
// var array = [1,2,3,4]

// const calculateSum = array.reduce((acc, value) => {
//     return acc + value;
// }, 0);

// const calculateProduct = array.reduce((acc, value) => {
//     return acc * value;
// }, 1);

// console.log(calculateSum);
// console.log(calculateProduct);

//Exercise 6
class Car{
    constructor(brand, year){
        this.brand = brand;
        this.year = year;
    }
    details(){
        return (`Model:${this.brand} ${this.year}`)
    }
}
class Sedan extends Car{
    constructor(brand, year, price){
        super(brand,year);
        this.price = price;
    }
    info(){
        return (`${this.brand} has a balance of $${this.price}`)
    }
}

const car2 = new Car('Pontiac Firebird', 1976); 
console.log(car2.details());

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());

