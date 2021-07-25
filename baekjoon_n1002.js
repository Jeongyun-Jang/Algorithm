//조규현을 A 백승환을 B, 류재명을 C라고 가정
//A와 B의 위치는 각 두원의 중점으로 간주하며, 두사람이 계산한 거리r1,r2는 각각 두원의 반지름이 됨
//d는 ri,r2사이 거리
//1)r1+r2 < d or |r1-r2| > d  : 교점 x
//2)d=0,r1=r2 : 교점 무한개(두원이 완전히 일치한 경우)
//3)r1+r2=d : 교점 1개 (외접한 경우)
//4)|r1-r2|=d : 교점 1개(내접하는 경우)
//5)r1-r2 < d < r1+r2 : 교점 2개

const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    :
    `3
0 0 13 40 0 37
0 0 3 0 7 4
1 1 1 1 1 5`).trim().split('\n');

let N = Number(stdin.shift());
let result = 0
function getCase(x1,y1,r1,x2,y2,r2){
    let distance = Math.sqrt((x1-x2)**2+(y1-y2)**2);
    let rMinus = Math.abs(r1-r2)
    let rPlus = r1+r2

    if(rPlus < distance || rMinus > distance) result = 0
    else if(distance === 0 && r1 === r2) result = -1
    else if(rPlus === distance || rMinus ===distance)    result = 1
    else if(rPlus > distance && distance > rMinus) result = 2
    return result

}

stdin.forEach(el => {
    let [x1,y1,r1,x2,y2,r2] = el.split(" ").map(Number);
    console.log(getCase(x1,y1,r1,x2,y2,r2));
})