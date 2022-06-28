function minMax(arr){
  
    let result  = arr.sort((a,b) => a - +b)

    return [result[0], result[result.length -1]]

}

let answer = minMax([7, 8, 13, 3, 1, 2,4,9,10,12,20,19,35])
console.log(answer)