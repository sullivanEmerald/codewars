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
// let array = [5,6,6,5,5]
// function sum (numbers) {
  
//     if(numbers.length === 0 && Array.isArray(numbers)){
//       return 0 
  
//     }else{
    
//     return numbers.reduce((acc, b) => acc + b)
    
//   }

// }

// let result = sum ( array )
// console.log(result)
// let input = [80, 85, 75, 55, 65, 60, 60, 80]

// function calculateScore(arr){
//     return result = arr.sort((a,b) => a-b)
//     const obj = {

//     }
// }
    
// console.log(calculateScore(input))
// let array = [50, 70, 80, 90]

// // let result  = Math.min(...arr)
// // console.log(result)

// function smallestInteger(arr){
//     let sorterd = arr.sort((a,b) => a-b)
//     let max = sorterd[sorterd.length -1]
//     return max
// }

// let answer = smallestInteger(array)
// console.log(answer)

// function litres(time) {
//     let result = time * 0.5
//     return Math.floor(result)
    
//   }

// let answer = litres(80.5)
// console.log(answer)

function hoopCount (n) {
   //your code goes here 
  
  return (n >= 10) ? "Great, now move on to tricks" : "Keep at it until you get it"
  
}

console.log(hoopCount(10))