
function countVowel(word){
    let reg=/[aeiyouAEIOUY]/g
    let tempword=word.split('')
    return tempword.filter(x=> reg.exec(x)).length

}

console.log("azerty",countVowel('azerty'))
console.log('"Age CanonIx"', countVowel('"Age CanonIx"'))