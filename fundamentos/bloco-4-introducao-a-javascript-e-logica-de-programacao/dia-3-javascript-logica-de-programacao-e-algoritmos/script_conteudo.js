
// como funciona FOR dentro de FOR


for (let index = 0; index < 10; index += 1) {
    console.log("executou fora:", index);
    for (let index = 0; index < 10; index +=1 ) {
        console.log("executou dentro: ", index);
    }
}