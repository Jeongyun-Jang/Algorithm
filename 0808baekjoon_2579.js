const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    :
      `6
10
20
15
25
10
20`).split('\n').map(Number);

let n= stdin[0];
let dp = []; //현재까지 밟은 계단 점수가 담겨있음
dp[0] = 0; //안 밟은 경우
dp[1] = stdin[1]; // 1번 밟은 경우
dp[2] = stdin[1]+stdin[2] //연속 2번 밟은 경우

for(let i=3;i<=n;i++){
    //마지막 계단은 꼭 밟아야하고 & 연속 3번 계단을 밟을 수 없으므로 -> 이전 경우는 2가지로 나뉨
    //1.마지막 계단 전을 밟은 경우 : 마지막 계단 전전(i-2)을 밟지 못함 => stdin[i-1]+stdin[i]
    //2.마지막 계단 전을 밟지 않은 경우 : 마지막 계단 전전(i-2)을 밟음 => dp[i-2]+stdin[i]
    dp[i] = Math.max( dp[i-3]+stdin[i]+stdin[i-1], dp[i-2]+stdin[i])
}
console.log(dp[n])