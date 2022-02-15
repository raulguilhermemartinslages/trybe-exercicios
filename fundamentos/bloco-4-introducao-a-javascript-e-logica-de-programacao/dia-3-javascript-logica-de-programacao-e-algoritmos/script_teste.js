for (let i = 0; i < 24; i += 1) {
    console.log("executou fora: ", i);
    for (let j = 0; j < i; j += 1) {
        console.log("executou dentro: ", j);
    }
}
