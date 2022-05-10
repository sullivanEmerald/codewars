let array3 = [5,6,6,5,5]
function sum (numbers) {
  
    if(numbers.length === 0 && Array.isArray(numbers)){
      return 0 
  
    }else{
    
    return numbers.reduce((acc, b) => acc + b)
    
  }

}

let result = sum ( array3)
console.log(result)