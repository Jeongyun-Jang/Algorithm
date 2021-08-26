let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n")

function findBalance(string) {
  let stack = [];
  let pair = null;

  for (let char of string) {
    if (char === "(" || char === "[") stack.push(char);
    else if (char === ")") {
      pair = stack.pop();
      if ((pair === null) || (pair !== "(")) return false;
    } else if (char === "]") {
      pair = stack.pop();
      if (pair === null || pair !== "[") return false;
    }
  }
  return stack.length === 0 ? true : false;
}

for (let i = 0; i < input.length; i++) {
  if (input[i] === ".") {
    break;
  }
  let result = findBalance(input[i]);
  result === true ? console.log("yes") : console.log("no");
}