
function biggerIsGreater(w) {
    let inputArr = w.split("");
    let l = inputArr.length;
    let pivot = -1;
    for (let k = l - 1; k > 0; k--) {
        if (inputArr[k] > inputArr[k - 1]) {
            pivot = k - 1;
            break;
        }
    }

    if (pivot == -1) {
        return "no answer"
    }

    let nextArr = [...inputArr]

    for (let j = l - 1; j > 0; j--) {
        if (inputArr[j] > inputArr[pivot]) {
            nextArr[pivot] = inputArr[j];
            nextArr[j] = inputArr[pivot]  
            break; 
        }
    }

    let sortWord = nextArr.slice(pivot + 1, l).sort();
    let notSort = nextArr.slice(0, pivot + 1);
    notSort.push(...sortWord)
    return notSort.join('');

}

console.log(biggerIsGreater("fedcbabcd"));