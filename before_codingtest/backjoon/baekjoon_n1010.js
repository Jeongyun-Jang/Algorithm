//N개의 다리를 만들 때 만들 수 있는 경우의 수(다리는 교차 될 수 없음)
//nCr 서로 다른 n개 중에서 r개(n>=r)를 택하는 경우 n!/r!(n-r)!
//M개의 사이트 중 N개를 골라 1:1로 연결

const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    :
      `3
2 2
1 5
13 29`).split('\n');

function factorial(n){
    if(n<1) return 1;
    return n * factorial(n-1);
}

function combination(n,m){
    return factorial(n)/(factorial(n-m)*factorial(m));
}

n = Number(stdin[0])
for(let i=1;i<=n;i++){
    let data = stdin[i].split(" ").map(Number);    
    let [N,M] = [data[0],data[1]];
    let result = Math.round(combination(M,N))
    console.log(result);
}