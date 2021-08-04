const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    :
      `3
1 45000
6 10
13 17
`
).split('\n');

function gcd(a,b){
    while(b > 0 ){
        let temp = a;
        a = b;
        b = temp%b;
    }
    return a;
}
for (let i = 1; i <= stdin[0]; i++) {
  const data = stdin[i].split(' ').map(Number);

  console.log(data[0]*data[1]/gcd(data[0],data[1]));
}