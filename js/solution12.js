function basicOp(operation, value1, value2)
{
  if(operation === '+'){
    return value1 + value2
  }else if(operation === '-'){
    return value1 - value2
  }else if(operation === '*'){
    return value1 * value2
  }else if(operation === '/'){
    return value1 / value2
  }
}

let answer = basicOp('+', 30, 20)
console.log(answer)