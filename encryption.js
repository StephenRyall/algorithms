function encryption(s) {
    let l = s.length
    let ansText = "";
    let row = Math.floor(Math.sqrt(l));
    let column = Math.ceil(Math.sqrt(l))
    if (row * column < l) {
        row++;
    }
    let wordPSplit = s.split("");
    let start = 0;
    let count = 0;
    while (count < column) {
        for (let k = start; k < l; k += column) {
            ansText = ansText + wordPSplit[k]
        }
        ansText = ansText + " ";
        start++;
        count++;
    }
    return ansText;
}

console.log(encryption("chillout"))