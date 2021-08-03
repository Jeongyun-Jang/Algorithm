const fs = require("fs");
const input = (
    process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `3 16`
).trim()
    .split(" ");

const MAX = 1000000;
let M = Number(input.shift());//shift연산자는 배열의 첫번째 요소를 제거하고 제거된 요소를 반환함
let N = Number(input.shift());
let primeArr = new Array(N + 1);
let squre = 0;

primeArr.fill(true);
primeArr[0] = primeArr[1] = false;

for (let i = 2; i < N + 1; i++) {
    if (primeArr[i]) {
        if (parseInt(Math.pow(i, 2)) > MAX) {
            break;
        } else {
            for (squre = parseInt(Math.pow(i, 2)); squre < N + 1;) {
                primeArr[squre] = false;
                squre += i;
            }
        }
    }
}
for (let i = M; i < N + 1; i++) {
    if (primeArr[i]) {
        console.log(i)
    }
}