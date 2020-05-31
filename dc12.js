var assert = require("chai").assert;

function minTwoDigit(s) {
    let t = typeof (s) === 'number' ? s.toString() : s
    return t.length < 2 ? ['0', t].join('') : t
}

function swap(nn) {
    let ss = minTwoDigit(nn).toString()
    return [ss[1], ss[0]].join('')
}

function nextBig(num) {
    if (num < 10) return '-1'
    if (num > 99) {
        let lownum = num % 100
        let res = (num - lownum)
        let final= lownum.toString()[1] < lownum.toString()[0] ? -1 : res+ Number(swap(lownum))
        return final.toString()
    }
    let numString = num.toString()
    // console.log(numString[1] > numString[0])
    return numString[1] < numString[0] ? '-1' : swap(num).toString()
}

describe("NextBig", function () {
    it("min two digit", done => {
        assert.deepEqual(minTwoDigit(1), '01');
        assert.deepEqual(minTwoDigit(10), '10');
        done()
    })
    it("test swap", done => {
        assert.deepEqual(swap(1), '10')
        assert.deepEqual(swap(10), '01')
        done()
    })
    it("shall pass", done => {
        assert.deepEqual(nextBig(9), '-1');
        assert.deepEqual(nextBig(13), '31');
        assert.deepEqual(nextBig(130), '-1');
        assert.deepEqual(nextBig(1013), '1031');
        done()
    })
    it.skip("new", done => {
        assert.deepEqual(nextBig(1003), 1030);
        done()
    })
})