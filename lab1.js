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
function findAngle(degree){
    if(degree < 0 && degree>360){
        return "Degree should be less than 360 and more than 0";
    }

    if(degree === 0 || degree === 360 || degree === 180){
        return "Straight angle";
    }
        else if(degree > 0 && degree <90){
            return "Acute angle";
        }
        else if(degree === 90){r
            return "Right angle"
        }
        else if(degree > 90 && degree < 180){
            return "Obtuse angle";
        }
    }

console.log(findAngle(47))
console.log(findAngle(90))
console.log(findAngle(145))
console.log(findAngle(180))
