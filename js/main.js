function betterThanAverage(classPoints, yourPoints) {
    let result = classPoints.reduce((acc,c) => acc + c)
    let average = result / classPoints.length
    
    if(yourPoints > average){
      return true
    }else{
      return false
    }
}

let display = betterThanAverage([5,20,30], 10)
console.log(display)