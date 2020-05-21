function primeNumbers(val) {
    //create a list of all prime numbers below or equal to val
    let primeList = [2]
    let divided = ''
    for (let index = 2; index <= val; index++) {
        if (primeList.filter(x => {
                return index % x == 0
            }).length == 0) primeList.push(index)
    }
    return primeList
}

function decompose(value) {
    let val = value
    let primeList = primeNumbers(val)

    let i = 0
    let decomp = {}
    p = primeList[i]
    decomp[p] = 0
    do {
        if (val % p == 0) {
            decomp[p] += 1
            val = val / p
        } else {
            p += 1
            decomp[p] = 0
        }
    } while (p < primeList.length);
    return decomp
}


function print(val) {
    let out = val+'='
    let obj = decompose(val)
    Object.keys(obj).forEach(element => {
        out += obj[element] != 0 ? `${element}x^${obj[element]} +`:''
    });
    return out.slice(0,out.length-1)
}
// console.log(decompose(20))
// console.log(decompose(21))
console.log(print(4900))