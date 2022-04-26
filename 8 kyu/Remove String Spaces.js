
// Simple, remove the spaces from the string, then return the resultant string.

// My Solution
function noSpace(x){
    let splitString = x.split("")
    for (let i = splitString.length - 1; i>=0; i--){
       if(splitString[i] == " "){
        splitString.splice(i,1)
       }
    }
    return splitString.join("")
}

noSpace("T H I S             W O R K S")