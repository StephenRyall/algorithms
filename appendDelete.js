const appDel = (s, t, k) => {
    let sSplit = s.split('');
    let tSplit = t.split('');
    let changeTot = 0;
    for (let i = 0; i <= tSplit.length; i++) {
        if (sSplit[i] != tSplit[i]) {
            changeTot = (sSplit.length - i) + (tSplit.length - i);
            break
        }
    }
    if (changeTot <= k) {
        if (changeTot != 0) {
            return 'Yes'
        }
        if (changeTot == 0 && sSplit.length*2 <= k) {
            return 'Yes'
        }
        if (k == 0 && changeTot == 0) {
            return 'Yes'
        }
        return 'No'
    }
    return 'No'
}

console.log(appDel('assss', 'assss',  4));