const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    :
      `10 2
2 9 5`).split('\n')//.map(Number);
let [N,M] = stdin[0].split(" ").map(Number);
let arr = stdin[1].split(" ").map(Number);

let queue = Array.from(new Array(N), (x,i) => i + 1) //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let count = 0;

function move(queue,action){
  let target = 0;

  switch(action){

    case "left":
      target = queue.shift()
      queue.push(target);
      count++;
      break;

    case "right":
       target = queue.pop();
       queue.unshift(target);
       count++;
       break;
    case "get":
      queue.shift();
      N--;
      break; 
  }
}

for(let num of arr){
  let numIdx = queue.indexOf(num);
  let left = numIdx;
  let right = N - numIdx;

  if(left<=right){
    for(let j=0;j<left;j++){
      move(queue,"left");
    }
  }else{
    for(let j=0;j<right;j++){
      move(queue,"right");
    }
  }
  move(queue,"get")
}
console.log(count);
