// capitalizing first letter
// Steps
/*
1. Make the string lowercase
2. Convert string to array
3. Capitalize each word
4. Convert array back to string
*/


function capitalWord(str){
    let lowercase = str.toLowerCase().split(" ").map((word)=>word[0].toUpperCase()+word.slice(1)).join("");
    return lowercase;
 
}
console.log(capitalWord("hello manish"))

// fizzbuzz challenge

function fizzbuzz(arr){
   for(let num of arr){
    if(num % 3===0 && num % 5===0){
        console.log("FizzBuzz");
     }else if(num % 3===0){
        console.log("Fizz")
     }else if(num % 5===0){
        console.log("Buzz");
     }else{
        console.log(`The num is: ${num}`)
     }
   } 
  
}

fizzbuzz([2,1,4,6,3,1,5,7,15,7,9,11,12,15,21])