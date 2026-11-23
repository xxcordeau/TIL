// https://www.acmicpc.net/problem/1935
// 후위 표기식2
//
// 후위 표기식을 계산하는 문제. 숫자면 스택에 push, 연산자면 두 개 pop해서 계산 후 push.
// 피연산자는 A=1, B=2... 로 대응.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const expr = lines[1].trim();
  const vals = [];
  for (let i = 2; i < 2 + n; i++) vals.push(parseFloat(lines[i].trim()));

  const stack = [];
  for (const c of expr) {
    if (c >= 'A' && c <= 'Z') {
      stack.push(vals[c.charCodeAt(0) - 65]);
    } else {
      const b = stack.pop(), a = stack.pop();
      if (c === '+') stack.push(a + b);
      else if (c === '-') stack.push(a - b);
      else if (c === '*') stack.push(a * b);
      else if (c === '/') stack.push(a / b);
    }
  }
  return stack[0].toFixed(2);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}