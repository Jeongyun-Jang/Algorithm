const fs = require("fs");
const [N, ...arr] = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4
abbbbbb
abaccccccccc
abccctcccffff
aaaaaj
`
)
  .trim()
  .split("\n");

let numWords = Number(N);
let count = 0;

for (let i = 0; i < numWords; i++) {
  let newArr = [];
  let nowArr = arr[i];

  for (let j = 0; j < nowArr.length; j++) {
    if (newArr.indexOf(nowArr[j]) === -1 || nowArr[j - 1] === nowArr[j]) {//기존에 없는 문자이거나, 왼쪽 요소안에 문자와 같으면
      newArr += nowArr.slice(j, j + 1); // 비교한 요소를 새배열에 집어 넣는다.
    } else {
      break;
    }
  }

  if (newArr.length === nowArr.length) { //모든 요건이 충족하면 배열의 길이가 서로 같아짐(그룹단어라는 뜻!) count하기
    count++;
  }
}

console.log(count);