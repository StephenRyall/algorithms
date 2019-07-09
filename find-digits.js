function findDigits(n) {
    let count = 0;
    let numArr = n.toString().split("").map(item => {
        return parseInt(item)
    })
    numArr.map(num => {
        if (n % num == 0) {
            count++;
        }
    })
    return count
}


console.log(findDigits(12))