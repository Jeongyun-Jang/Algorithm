const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    :
      `2
4 2
`).split('\n');//\n으로 구분하기 때문에 stdin[0]에 첫줄 숫자, stdin[1]에 2 3 4 6이 담김

const data = stdin[1].split(' ').map(Number); //stdin[1]를 ' ' 공백으로 구분해 담은 원소를 data 배열에 숫자 형태로 저장
const max = Math.max.apply(null,data)
const min = Math.min.apply(null,data)

console.log(max*min)
