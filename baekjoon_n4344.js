const fs = require('fs');
const stdin = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : 
        `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91
`
).split('\n');
for (let i = 1; i <= stdin[0]; i++) {
    let avg = 0;
    let result = 0;

    const data = stdin[i].split(' ').map(Number);
    for (let j = 1; j <= data[0]; j++) {
        avg += data[j]
    }
    avg /= data[0]
    //  console.log(result)
    for (let j = 1; j <= data[0]; j++) {
        if (data[j] > avg) {
            result += 1
        }
    }
    result = `${(result / data[0] * 100).toFixed(3)}%`
    console.log(result)
}