Example_Checkbook=`
1000.00
125 Market 125.45
126 Hardware 34.95
127 Video 7.45
128 Book 14.32
129 Gasoline 16.10
`

ChallengeCheckbook=`
1233.00
125 Hardware;! 24.8?;
123 Flowers 93.5
127 Meat 120.90
120 Picture 34.00
124 Gasoline 11.00
123 Photos;! 71.4?;
122 Picture 93.5
132 Tires;! 19.00,?;
129 Stamps 13.6
129 Fruits{} 17.6
129 Market;! 128.00?;
121 Gasoline;! 13.6?;
`

function sanitize(st){
    let reg=/[^0-9a-zA-Z .\n]+/g
    return st.replace(reg,'')
}
function prepareBalance(checkbookString){

    let checkbookArray=sanitize(checkbookString)
    checkbookArray=checkbookArray.split('\n')
    checkbookArray=checkbookArray.filter(x=>x.length!=0)
    let finalArray=['Original Balance : '+checkbookArray.shift()]
    
    let numberOfOperation=0
    let sommeOfOperation=0
    
    while (checkbookArray.length>0) {
        numberOfOperation +=1
        let current = checkbookArray.shift().split(' ')
        sommeOfOperation  +=Number(current[2])
        finalArray.push( current.reduce((a,b)=>a+' '+b)+' Balance '+sommeOfOperation.toFixed(2))
    }
    
    finalArray.push('Total expense '+sommeOfOperation.toFixed(2))
    finalArray.push('Average expense '+(sommeOfOperation/numberOfOperation).toFixed(2))
    
    return finalArray.join('\n')
}

console.log(ChallengeCheckbook)

console.log(prepareBalance(ChallengeCheckbook))
