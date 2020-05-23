const basePoint = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10,
}

function countPoint(word) {
    let double = word[word.length - 1] == 'd' ? 2 : 1
    let triple = word[word.length - 1] == 't' ? 3 : 1
    let temp = word.split('')
    if (double > 1 | triple > 1) temp.pop()
    let total = 0
    let multi = 1

    for (let index = temp.length - 1; index > -1; index--) {
        switch (temp[index]) {
            case '*':
                multi += 1
                break;
            case '^':
                multi=1
                break;
            default:
                total += basePoint[temp[index]] * multi
                multi = 1
                break;
        }
    }
    let bonusword=word.replace(/[^A-Z]/g,"")
 
    let bonus=bonusword.length==7?50:0
    console.log(word + " : " , total * double * triple+bonus)
}

countPoint('AZEd')
countPoint('AZEt')
countPoint('AZ**Et')
countPoint('AZ*^*E')
countPoint('AZE')
countPoint('AZEEEEE')