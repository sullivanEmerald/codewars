
function getDivisorsCnt(n){
    // todo
  let sum = 0
  for(let i = 0; i <= n; i++){
    if(n % i == 0){
      sum += 1
    }
  }
  return sum
}

let answer = getDivisorsCnt(30)
console.log(answer)

