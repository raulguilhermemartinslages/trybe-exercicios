const a = 35;
const b = 40;
const c = -105;

if (a > 0 && b > 0 && c >0) {
    if (a + b + c == 180) {
        console.log(true);
    } else if ( a + b + c !== 180) {
        console.log(false);
    }
} else {
    console.log('Erro');
}