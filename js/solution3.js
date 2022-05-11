let array = [50, 70, 80, 90]
function smallestInteger(arr){
    let sorterd = arr.sort((a,b) => a-b)
    let max = sorterd[sorterd.length -1]
    return max
}

let answer2 = smallestInteger(array)
console.log(answer2)