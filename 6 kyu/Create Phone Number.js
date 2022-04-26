// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// My Solution
function createPhoneNumber(numbers){

    let placeHolder = ["(",0,0,0,")"," ",0,0,0,"-",0,0,0,0]
  
    placeHolder[1] = numbers[0] 
    placeHolder[2] = numbers[1] 
    placeHolder[3] = numbers[2] 
  
    placeHolder[6] = numbers[3] 
    placeHolder[7] = numbers[4] 
    placeHolder[8] = numbers[5] 
  
    placeHolder[10] = numbers[6] 
    placeHolder[11] = numbers[7] 
    placeHolder[12] = numbers[8] 
    placeHolder[13] = numbers[9] 
  
    return placeHolder.join("")
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])