function minimumDistances(a) {
    let ans = [];
    for (let k = 0; k < a.length; k++) {
        for (let j = 0; j < a.length; j++) {
            if (a[k] == a[j] && k !== j) {
                ans.push(Math.abs(k -j))
            }
        }
    }
    if (ans.length === 0) {
        return -1
    }
    else {
        let uniqueArray = ans.filter(function(item, pos) {
            return ans.indexOf(item) == pos;
        })
        return Math.min(...uniqueArray)
    }
}

console.log(minimumDistances([1, 2, 3, 4, 10]))