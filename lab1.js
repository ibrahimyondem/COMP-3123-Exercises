// LAB 1 
// EXERCISE 1

function capitalizeWords(str) {
    let words = str.split(" ");
    for(let i=0; i < words.length; i++){
        let word = words[i];
        words[i] = word[0].toUpperCase() + word.slice(1);
    }
    return words.join(" ");
}

console.log(capitalizeWords("the quick brown fox"));

// EXERCISE 2

function max(int1,int2,int3){
    let largest = int1;
    if(int2>largest){
        largest = int2;
    }
    if(int3> largest){
        largest = int3;
    }
    return largest;
}

console.log(max(1,0,1));
console.log(max(0,-10,-20));
console.log(max(1000,510,440));

//EXERCISE 3
