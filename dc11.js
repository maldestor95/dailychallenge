// https://dev.to/thepracticaldev/daily-challenge-11-cubic-numbers-21am


function isCubic(num) {
    let numToTest=[0,0,0]
    switch (typeof (num)) {
        case 'number':
            if (num < 0 | num > 999) return false
            numToTest[0]=(num-num%100)/100
            numToTest[1]=(num%100-num%10)/10
            numToTest[2]=num%100%10
            break;
        case 'string':
            if (num.length > 3) return false
            return isCubic(Number(num))
            break;
        default:
            return false
            break;
    }
    return {num:num, numToTest:numToTest, res: Math.pow(numToTest[2],3) +Math.pow(numToTest[1],3)+Math.pow(numToTest[0],3)}
}

primaryObj(-1)
primaryObj(5)
primaryObj(1000)
primaryObj('5')
primaryObj('5555')
primaryObj(621)
primaryObj(153)

function primaryObj(val){
    console.log(val,isCubic(val),val===isCubic(val).res?'Cubic':'notCubic')
}