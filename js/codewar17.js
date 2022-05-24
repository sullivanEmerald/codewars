// function between(a, b) {
//     // your code here
//     let array = []
//     if(a < b){
//       for(let i = a; i <= b; i++){
//         array.push(i)
//       }
//     }
//     return array
//   }

// let answer = between(5,20)
// console.log(answer)

function calculateYears(principal, interest, tax, desired) {
    // your code
  
  let years = 0
  
  while(principal < desired){
    principal += principal * interest * (1 - tax)
    years++
  }
  
    return years
}