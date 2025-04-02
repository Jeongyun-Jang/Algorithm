//filter()는 주어진 조건을 통과하는 요소를 모아 새로운 배열로 반환하는 메서드
const fs = require("fs");
/*let input = (
process.platform === "linux"
? fs.readFileSync("/dev/stdin").toString()
:`Mississipi`  
).split("")
*/

let input = fs.readFileSync("/dev/stdin").toString().trim().toUpperCase().split("")
//input = input.toUpperCase().split("")

let alpha = input.filter((el,idx)=>input.indexOf(el)===idx); //el= 요소, idx 인덱스 위치 ['M','i','s','p']

let count = new Array(alpha.length).fill(0) //알파펫 개수만큼 빈 배열 생성

for(let i=0;i<input.length;i++){//count에 동일한 alpha index위치에 aplha의 원소 개수 담김
    count[alpha.indexOf(input[i])]++;
}

let max = count[0];

for(let j=1;j<count.length;j++){//가장 큰 값이 담긴 count[j]찾아 max에 넣음
    if(max < count[j]){
        max = count[j];
    }
}

if(count.filter((el)=>el === max).length > 1) //count요소중 max인 개수가 2개 이상이면 '?'출력 
    console.log("?")
else{ // 아니면 가장 개수 많은 alpha 원소 값 출력
    console.log(alpha[count.indexOf(max)]);
}
