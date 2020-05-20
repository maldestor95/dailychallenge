/*
Your goal is to create a function that removes the first and last letters of a string. 
Strings with two characters or less are considered invalid. 
You can choose to have your function return null or simply ignore.
*/

function removeExtChr(candidateString){
if (candidateString.length<=2) return null
return candidateString.slice(1,candidateString.length-1)
}

console.log(removeExtChr('alphabet'))
console.log(removeExtChr('az'))
console.log(removeExtChr('aze'))
