//1의 자리에 있는 수 구하기: num % 10
//10의 자리에 있는 수 구하기: Math.floor(num / 10)
//1의 자리에 있는 수 10의 자리 수로 만들기 : (num % 10) * 10


//문자열은 숫자형 변수에 담고, 문자열을 나눠 더한 값 new_num에 저장
// 1번째 *10+ new_num해 변수에 담음
// new_num가 최초 숫자 일 때까지 반복
//let prev = prompt();

const { strict } = require("assert");
const fs = require("fs");
let input = (
process.platform === "linux"
? fs.readFileSync("/dev/stdin").toString()
:`1`  
).trim()

input = Number(input);
let cnt = 0;
let result = input;

while(true){
    let first = Math.floor(result/10);
    let second = result % 10;
    result = second*10+((first+second)%10); 
    cnt += 1;

    if(result === input){
        console.log(cnt);
        break;
    }
}