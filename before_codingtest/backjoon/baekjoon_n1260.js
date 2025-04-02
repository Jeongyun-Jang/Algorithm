const { BADFLAGS } = require('dns');
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    :
      `4 5 1
1 2
1 3
1 4
2 4
3 4`
).split('\n');

input = stdin[0].split(" ").map(Number)
let [N,M,V] = [input[0],input[1],input[2]]
let matrix = Array.from(Array(N + 1), () => new Array(N + 1).fill(0));
let result = ""
let visit = Array(N + 1).fill(false);

function dfs(v){
    result += `${v} `
    visit[v] = 1;
    for(let i=1;i<=N;i++){
        if(visit[i] == 1 || matrix[v][i] === 0){//이미 방문했거나, 방문할 수 없다면 지나치기
            continue;
        }
        dfs(i);
    }
}

function bfs(v) {
    let q = [v];
    visit[v] = 0;
    let result = "";

    while (q.length !== 0) {
      let currentNode = q.shift();
      result += `${currentNode} `;
      for (let i = 1; i < N + 1; i++) {
        if (visit[i] === 0 || matrix[currentNode][i] === 0) {
            continue;
        }
        q.push(i);
        visit[i] = 0;
      }
    }
    return result;
  }

for(let i=1;i<=M;i++){
    let data = stdin[i].split(" ").map(Number)
    let [x, y] = [data[0],data[1]];

    for(let i=0;i<M;i++){
        matrix[x][y] = 1;
        matrix[y][x] = 1;  
    }
    
}
let bfsresult;

dfs(V);
console.log(result)
visit = Array(N + 1).fill(false);
console.log(bfs(V));

return;