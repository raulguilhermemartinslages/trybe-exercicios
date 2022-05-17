// porque o escopo faz diferença? se highest está dentro do for não funciona igual highest declarado em escopo global

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let highest = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > highest) {
        highest = numbers[index];
    }
}
console.log(highest);

// for (let index = 0; index < numbers.length; index += 1) {
//     let highest = numbers[0];
//     if (numbers[index] > highest) {
//         highest = numbers[index];
//     }
// }
// console.log(highest);