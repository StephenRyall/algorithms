function chocolateFeast(n, c, m) {
    let wrapNum = Math.floor(n/c);
    let totChoc = Math.floor(n/c);
    let rem = 0;
    while (wrapNum + rem >= m) {
        totChoc = totChoc + Math.floor((wrapNum + rem)/m);
        let holdWrap = Math.floor((wrapNum + rem)/m);
        let holdRem = (wrapNum + rem) % m;
        wrapNum = holdWrap;
        rem = holdRem;
    }
    return totChoc
}

console.log(chocolateFeast(15, 3, 2))
