//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//My solution
function removeExclamationMarks(s) {
    let splitString = s.split("");
    for(let i = splitString.length - 1; i >=0; i--){
        if (splitString[i] == "!") {
            splitString.splice(i,1);  
            }
    }
    return splitString.join("")
}  