const sCode = (t) => {
    let baseNum = 1;
    let globCount = 1;
    let diff = 3;
    while (t >= baseNum) {
        if (t < baseNum + (diff * Math.pow(2, globCount - 1))) {
            if (t == baseNum) {
                return t + 2
            }
            else {
                return t - (t - baseNum - 1) * 2
            }
        }
        else {
            baseNum = baseNum + (diff * Math.pow(2, globCount - 1))
        }
        globCount++
    }
}

console.log(sCode(5));