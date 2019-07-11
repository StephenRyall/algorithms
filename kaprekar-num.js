function kaprekarNumbers(p, q) {
    let kapNums = [];
    let flag = false;
    if (p == 1) {
        flag = true;
        kapNums.push(p)
    }
    for (let k = p; k <= q; k++) {
        let sq = k * k;
        let sqArr = (sq).toString().split("")
        let subString = "";
        let l;
        let r;
        for (let j = 0; j < sqArr.length; j++) {
            subString = subString + sqArr[j];
            if (parseInt(subString) >= k) {
                l = parseInt((sqArr.slice(0, j)).join(''))
                r = parseInt((sqArr.slice(j)).join(''))
                break;
            }
        }
        if (l + r == k) {
            flag = true;
            kapNums.push(k)
        }
    }
    if (flag == false) {
        return "INVALID RANGE"
    }
    return kapNums.join(" ")
}

console.log(kaprekarNumbers(1,100000))