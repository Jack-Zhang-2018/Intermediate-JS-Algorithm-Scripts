// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  let newArr = [];
  let concatArr = arr1.concat(arr2)
  let el

  for(let i = 0; i < concatArr.length; i++){
    el = concatArr.splice(i,1)[0]
    if (!concatArr.includes(el)) {
      newArr.push(el)
    }
    concatArr.splice(i,0,el)
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])
