function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
function shuffle(array) { //Fisher-Yates (aka Knuth) Shuffle. https://fr.wikipedia.org/wiki/M%C3%A9lange_de_Fisher-Yates
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
function generatePath(duration){
    if (duration%2!=0) return null
    let option=[['n','s'],['w','e']]
    let out=[]
    for (let counter=0; counter<=(duration/2); counter++)
    {
        out.push(option[getRandomInt(2)])
    }
    out=out.toString().split(',')

    return shuffle(out).toString()
}

console.log(generatePath(5))
console.log(generatePath(10))
console.log(generatePath(20))