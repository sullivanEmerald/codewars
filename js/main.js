// function betterThanAverage(classPoints, yourPoints) {
//     let result = classPoints.reduce((acc,c) => acc + c)
//     let average = result / classPoints.length
    
//     if(yourPoints > average){
//       return true
//     }else{
//       return false
//     }
// }

// let display = betterThanAverage([5,20,30], 10)
// console.log(display)


// const result = (classPoints, yourPoints) => classPoints.reduce((accumulate, index) => accumulate + index) / classPoints.length < yourPoints ? true : false

// console.log(result([4,5,6,10],50))


// second codewar
let array = [5,6,6,5,5]
function sum (numbers) {
  
    if(numbers.length === 0 && Array.isArray(numbers)){
      return 0 
  
    }else{
    
    return numbers.reduce((acc, b) => acc + b)
    
  }

}

let result = sum ( array )
console.log(result)
    
