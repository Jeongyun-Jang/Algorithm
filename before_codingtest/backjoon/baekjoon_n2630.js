//직접 풀지 못함
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    :
      `8
1 1 0 0 0 0 1 1
1 1 0 0 0 0 1 1
0 0 0 0 1 1 0 0
0 0 0 0 1 1 0 0
1 0 0 0 1 1 1 1
0 1 0 0 1 1 1 1
0 0 1 1 1 1 1 1
0 0 1 1 1 1 1 1`).split('\n');

const n= +stdin[0];
const paper = stdin.slice(1).map(el=> el.split(" "));//stdin[1]부터 " "기준으로 나눈 값 paper배열에 담음
//console.log(paper)

const size = [128,64,32,16,8,4,2,1].filter(el=> el<=n) //[ 8, 4, 2, 1 ]

let white = 0;
let blue = 0;

size.forEach(el=>{//8x8 ,4x4,2x2,1x1,영역 순회
    for(let i=0;i<=n-el;i+=el){
        for(let j=0;j<=n-el;j+=el){
            let color = paper[i][j];
            let mono = false;//카운팅 안된 색종이

            outer: for(let x=i;x<i+el;x++){
                for(let y=j;y<j+el;y++){
                    if(paper[x][y]=== '2'|| paper[x][y] !== color){
                        mono = true;//카운팅 된 색종이
                        break outer;
                    }
                }
            }
            //카운팅 안된 색종이들
            if(!mono){
                if(color==='0') white++;
                else if(color==='1') blue++;
                for(let x = i;x<i+el;x++){
                    for(let y=j;y<j+el;y++){
                        paper[x][y] = '2';
                    }
                }
            }
        }
    }
});
console.log(white);
console.log(blue);

/*cf.forEach 응용 
const array1 = ['a', 'b', 'c']; 
array1.forEach(element => console.log(element)); //a b c가 각 줄에 출력

slice(N,M) 메서드는 어떤 배열의 N부터 M-1에 대한 얕은 복사본을 새로운 배열 객체로 반환 함
*/