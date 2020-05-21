
const friends=["A1","A2","A3","A4","A5"]
const location=[ ["A1", "X1"], ["A2", "X2"], ["A3", "X3"], ["A4", "X4"] ]
const distances=[ ["X1", 100.0], ["X2", 200.0], ["X3", 250.0], ["X4", 300.0] ]

function distanceBetweenCities(D1,D2){
    let dist=Math.sqrt(Math.abs(D2*D2-D1*D1))
    console.log('D1 :'+D1+'    D2 :'+D2+'    dist:'+dist.toFixed(2))
    return dist
}
function findHomeDistance(friendName){
    if (!friends.includes(friendName)) return 0
    let loc=location.filter(l=>l.includes(friendName))
    if (loc[0]){

        let dist=distances.filter(l=>l.includes(loc[0][1]))[0]
        return dist[1]
    }
    else 
    return 0
}

let distanceToCover=0
let friendsLoop=["A0",...friends,"A0"]
let f1=""
let f2=friendsLoop.shift()
while (friendsLoop.length>0) {
    f1=f2
    f2=friendsLoop.shift()
    distanceToCover += distanceBetweenCities(findHomeDistance(f2),findHomeDistance(f1))
    // console.log(f1, f2, distanceToCover.toFixed(2))
}
// console.log(friendsLoop)
console.log(distanceToCover.toFixed(2))
