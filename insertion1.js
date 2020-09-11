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
            let insertedArr = holdArr.splice(i + 1, 0, insrtNum)
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


const sortInsertMultiple = (n, arr) => {
    let storage
    for (let i = 1; i < n; i++) {
        storage = arr.splice(i, 1)[0]
        for (let j = i; j >= 0; j--) {
            if (storage > arr[j-1] || j === 0) {
                arr.splice(j, 0, storage)
                break
            }
        }
        console.log(arr.join(' '))
    }
}

sortInsertMultiple(6, [1, 4, 3, 5, 6, 2 ])