// Write a function `canSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.

const canSum = (targetSum, numbers) => {
    if(targetSum === 0) return true
    if(targetSum < 0) return false

    for(let num of numbers) {
        const remainder = targetSum - num
        if(canSum(remainder, numbers) === true) {
            return true
        }
    }

    return false
}

console.log(canSum(7, [2, 3]))
console.log(canSum(7, [5, 3, 4, 7]))
console.log(canSum(300, [7, 14]))