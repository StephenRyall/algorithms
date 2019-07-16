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

// console.log(minimumDistances([1, 2, 3, 4, 10]))

let array = ["12 Melbourne", "12 Melbourne 1", "12 Melbourne 2", "12 Melbourne 3"]

for (let k = 0; k < array.length; k++) {
    let pivot = array[k];
    for (let j = 0; j < array.length; j++) {
        let string = "";
        let holdString = array[j].split(" ");
        let afterPop = holdString.pop();
        if (holdString.length > 0) {
            holdString.map(item => {
                string = string + " " + item
            })
        }
        else {
            string = holdString
        }
        if (string.trim() == pivot && k != j) {
            array[j] = string
        }
    }
}

console.log("array", array)