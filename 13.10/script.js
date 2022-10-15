var num = [1, 2, 5, 7, 88, 5];
let result = 0;

for (let i = 0; i < num.length; i++){
    result += num[i];
}
console.log(result);

let sum2 = [20, 30, 40, 50, 520, 120, 220, 125, 115, 124];
let result2 = 0;
for(let i = 0; i < sum2.length; i++){
    result2 += sum2[i] * 2;
}
console.log(result2);

var sum3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let result3 = [];

for (let i = 0; i < sum3.length; i++){
    if(sum3[i] % 2 === 0){
        result3.push(sum3[i]);
    }
}
console.log(result3);