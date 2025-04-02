const { strict } = require("assert");
const fs = require("fs");
let input = (
process.platform === "linux"
? fs.readFileSync("/dev/stdin").toString()
:`100 99 1000000000`  
).trim() 
.split(" ");

let noon = Number(input[0]);
let night = Number(input[1]);
let distance = Number(input[2]);
let day_cnt = 0;

//달팽이가 하루에 noon-night미터씩 총 distance미터를 올라가면 됨
//목표지점 도달한 날은 미끄러지는거 감안 x so distance-night미터 올라감

day_cnt = Math.ceil((distance-night) / (noon-night));
console.log(day_cnt)

