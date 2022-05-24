function between(a, b) {
    // your code here
    let array = []
    if(a < b){
      for(let i = a; i <= b; i++){
        array.push(i)
      }
    }
    return array
  }

let answer = between(5,20)
console.log(answer)