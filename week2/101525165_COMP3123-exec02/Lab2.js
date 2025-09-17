//COMP 3123 – Full Stack Development I – Lab 2
//Exercise 1

gretter = (myArray, counter) => {
    let greetText = 'Hello';

    for(let i of myArray){
        console.log(`${greetText} ${i}`);
    }
}

gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

