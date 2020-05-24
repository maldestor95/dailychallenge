// Calculator
// Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7


function combine(arr, pos, val) {
    // console.log(arr, typeof (arr))
    return [...arr.slice(0, pos - 1), val, ...arr.slice(pos + 2, arr.length + 1)]
}

function evaluate(query) {
    let reg= /^[\+-\/\*]|[\+-\/\*]$/
    if (reg.test(query)) return console.log(query +'=> error operators')

    let q = query.split(' ')

    // while (q.length>0 ){
    let posX = q.indexOf('*')
    let posD = q.indexOf('/')
    do {
        posX = q.indexOf('*')
        if (posX > -1) {
            let total = q[posX - 1] * q[posX + 1]
            q = combine(q, posX, total)
            // console.log('posX', posX, q)
        }
        posD = q.indexOf('/')
        if (posD > -1) {
            let total = q[posD - 1] / q[posD + 1]
            q = combine(q, posD, total)
            // console.log('posD', posD, q)
        }
    } while (posX > -1 | posD > -1);
    let posP = -1
    let posM = -1
    do {
        posP = q.indexOf('+')
        if (posP > -1) {
            let total = q[posP - 1] * q[posP + 1]
            q = combine(q, posP, total)
            // console.log('posP', posP, q)
        }
        posM = q.indexOf('-')
        if (posM > -1) {
            let total = q[posM - 1] / q[posM + 1]
            q = combine(q, posM, total)
            // console.log('posM', posD, q)
        }
    } while (posP > -1 | posM > -1);
    console.log(query +' = '+ q[0])


    // }


}

evaluate("2 / 2 + 3 * 4 - 6")
evaluate("2 / 2 + 3 * 4 - 6 * 2 / 2 + 2")
evaluate("2 / 2 + 3 * 4 - 6 * 2 / 2 + 2 +")
evaluate("- 2 / 2 + 3 * 4 - 6 * 2 / 2 + 2")
evaluate("/ 2 / 2 + 3 * 4 - 6 * 2 / 2 + 2")