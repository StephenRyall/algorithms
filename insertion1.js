const sortInsert = (n, arr) => {
    const insrtNum = arr[n - 1]
    arr.splice(n - 1, 1)
    for (let i = n - 2; i >= 0; i--) {
        let holdArr = [...arr];
        if (arr[i] > insrtNum) {
            let insertedArr = holdArr.splice(i, 0, arr[i])
            console.log(...holdArr)
        }
        else if (arr[i] <= insrtNum) {
            let insertedArr = holdArr.splice(i+1, 0, insrtNum)
            console.log(...holdArr)
            break;
        }
        if (i == 0 && arr[i] > insrtNum) {
            let holdArr = [...arr];
            let insertedArr = holdArr.splice(i, 0, insrtNum)
            console.log(...holdArr)
            break;
        }
    }
   
}

sortInsert(5, [2, 4, 6, 8, 3])