function beautifulTriplets(d, arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let finAns = 0;
    for (let k = 0; k < sortedArr.length; k++) {
        let pivot = sortedArr[k];
        let smallCount = 1;
        for (let j = k + 1; j < sortedArr.length; j++) {
            let diff = sortedArr[j] - pivot;
            if (Math.abs(diff) == d) {
                smallCount++;
                pivot = sortedArr[j];
            }
            if (smallCount == 3) {
                finAns++;
                break;
            }
        }
    }
    return finAns
}

console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]));