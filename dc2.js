
/*
https://dev.to/thepracticaldev/daily-challenge-2-string-diamond-21n2
*/

function diamond(num){
if (num<0|num%2==0) return null
    let finalString = '*'.repeat(num) +'\n'
    let n=num
    for (let count=2;count<num;count=count+2){
        currentString=' '.repeat(count/2)+'*'.repeat(num-count)+' '.repeat(count/2)+'\n'
        finalString=currentString+finalString+currentString
    }
    console.log(finalString)
}

diamond(21)
console.log(diamond(2))
console.log(diamond(-2))