const fs = require('fs');
let [N,...arr] = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : // 예제 입력부분 (예제와 똑같이 입력!)
      `2
6 12 10
30 50 72`).trim().split('\n');

//data에는 호텔 층 수, 방 수, 몇 번째 손님인지 순으로 나타냄(층보다 방이 가까운게 우선)

nArrNumber = Number(N)
let nAnswer = "";

let newArr = arr.map((e)=> e.split(" "));

for(let i=0;i<nArrNumber;i++){
    let H = newArr[i][0];
    N = newArr[i][2];

    let answerH = N % H;
    if(answerH === 0){
        answerH = H;
    }
    let answerW = Math.ceil(N/H);
    answerW < 10 ? (answerW = String(0)+answerW): answerW;

    nAnswer += `${answerH}${answerW}` + '\n';
}
console.log(nAnswer);