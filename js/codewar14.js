function countPositivesSumNegatives(input) {
  
    if(input.length === 0 || input === null){
      return []
    }
   let positive = 0
   let negative = 0
   
   
   
    for(let i = 0; i < input.length; i++){
      
     if(input[i] > 0){
        ++ positive    
     }
       
     else if(input[i] < 0){
        negative += input[i]
     }
      
    }
    return [positive, negative]
}
  let answer = countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
  console.log(answer)