
let numeros;

for(let algarismo = 2; algarismo <= 150; algarismo += 1){
  if(algarismo === 3 || (algarismo / 3) % 0){
    numeros += 1;
  } 
} console.log(numeros);