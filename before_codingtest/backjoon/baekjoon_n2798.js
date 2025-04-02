const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    :
      `5 21
5 6 7 8 9`).split('\n');

let [N,M] = stdin[0].split(" ").map(Number)


let sum = 0;
let maxNum = 0;
let cardArr = stdin[1].split(" ").map(Number).sort((a,b)=>b-a);

function balckJack(depth, start,cardArr,N,M){
    if(depth === 3){
        if(sum <= M){
            maxNum < sum ? (maxNum = sum) : null;
        }
        return;
    }
    for(let i=start;i<N;i++){
        sum += cardArr[i];
        balckJack(depth+1,i+1,cardArr,N,M);
        sum -= cardArr[i];
    }
}

balckJack(0,0,cardArr,N,M);
console.log(maxNum);