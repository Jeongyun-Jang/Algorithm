const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map((num) => parseInt(num));

let N = input.shift(); // N은 무조건 홀수다.
let ary = input.sort((a, b) => a - b);

let sum = ary.reduce((accu, curr) => accu + curr, 0);

const modeMap = new Map();

for (let i = 0; i < ary.length; i++) {
  if (modeMap.has(ary[i])) modeMap.set(ary[i], modeMap.get(ary[i]) + 1);
  else modeMap.set(ary[i], 1);
}

let maxNum = [];
let maxCount = 0;

for (let key of modeMap.keys()) {
  if (modeMap.get(key) > maxCount) {
    maxNum = [key];
    maxCount = modeMap.get(key);
  } else if (modeMap.get(key) === maxCount) {
    maxNum.push(key);
  }
}

// 산술평균
let mean = Math.round(sum / N);

// 중앙값
let medianIndex = (N - 1) / 2;
let median = ary[medianIndex];

// 최빈값(두 개 이상인 경우 두 번째로 작은 수를 출력)
let mode = maxNum.length > 1 ? maxNum.sort((a, b) => a - b)[1] : maxNum[0];

// 범위
let range = ary[N - 1] - ary[0];

console.log(mean);
console.log(median);
console.log(mode);
console.log(range);
