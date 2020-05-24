//assume us phone number (XXX) XXX-XXXX

function convert(arr){
    let t='('+arr.slice(0,3).join('')+') '+arr.slice(3,6).join('')+'-'+arr.slice(6,9).join('')
    console.log(t)
}

convert([1,2,3,4,5,6,7,8,9,0])