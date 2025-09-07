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


