function cutTheSticks(arr) {
    let n = arr.length;
    let ans = [n];
    let checkArr = false;
    let newArr = arr;
    arr = arr.every((val, i, arr1) => val === arr1[0])
    if (arr) {
        return [n]
    }
    else {
        while (!checkArr) {
            let min = Math.min(...newArr);
            newArr = newArr.filter(num => num !== min)
            newArr = newArr.map(num => {
                return num - min
            })
            ans.push(newArr.length)
            checkArr = newArr.every((val, i, arr1) => val === arr1[0])
        }
        return ans
    }
}


console.log(cutTheSticks([5,4,4,2,2,8]))