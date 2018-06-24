//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(...args) {
  let allArgs = Array.from(arguments)
  let initArr = allArgs.shift()
  let finalArr = []

  initArr.forEach((el) => {
    if(!allArgs.includes(el)) {
      finalArr.push(el)
    }
  })

  return finalArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
