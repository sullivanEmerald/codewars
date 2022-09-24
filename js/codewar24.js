

 function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
  }
  let result = findOdd([3,6,3,3,5,8])
  console.log(result)
  