const num = [-5,  10,  5, 55,  -1, 22,  -4 , 36, -45];
const a = num.filter(numbers => numbers < 0);
console.log(a);

const arr = (a, b) => {
    let x= a > b ? 1 : -1;
    return a === b ? 0 : x;
}
let result = arr(0, 0);
alert(result);