//행의 크기(N) 와 각 행에서의 퀸의 위치(cols)를 1차원 배열로 표현하여 분리해야 함
//백트래킹을 활용
const fs = require("fs");
let stdin = (
process.platform === "linux"
? fs.readFileSync("/dev/stdin").toString()
:`8`);

let n = Number(stdin);
let result= 0;
let cols = [];

function check(level){//level : 현재 몇번째 행을 채우기 있는지 기록하는 매개변수
    for(let i=0;i<level;i++){
        //임의로 배치한 퀸이 같은행 or 같은 열 or 대각선에 있는지 살핌
        //X좌표와 Y좌표의 차이가 일정한 값을 가질 경우 해당 퀸과 대각선에 있다고 판단
        if(cols[i]== cols[level] || Math.abs(cols[level]-cols[i])=== level-i) return false;
    }
    return true;
}

function nqueen(x){//백트래킹
    if(x==n) result++; //총 배치한 행의 수 x가 n이 되면 경우의 수 1 늘려줌 
    else{
        for(let i=0;i<n;i++){ // 한 행당 한개의 퀸이 존재 함
            cols[x] = i; // col[x]번째 열에 퀸이 위치한 i행 저장
            if(check(x)) nqueen(x+1);
        }
    }
}

nqueen(0)
console.log(result)