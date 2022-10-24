// Starting array

/* Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.

For example:

[1, 4, 11, 2, 37, -4] should log true because 4 and -4 add to 0.


 Write your solution below:*/

 
let array = [28, 43, -12, 30, 4, 0, 12]

let zero = false

  for(let i = 0; i < array.length; i++){
    for(let x = 0; x < array.length; x++){
    if (i !== x) {
       if (array [i] + array [x] === 0){
        zero = true
       }
    }
    }
  }
console.log(zero)