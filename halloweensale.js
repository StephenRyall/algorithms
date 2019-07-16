function howManyGames(p, d, m, s) {
    let gameCount = 0;
    let money = s;
    while (money >= p) {
        money = money - p;
        p = p - d;
        if (p > m) {
            gameCount++;
        }
        else {
            p = m;
            gameCount++;
        }
    }
    return gameCount;
}


console.log(howManyGames(20, 3, 6, 80))