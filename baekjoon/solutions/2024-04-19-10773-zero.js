// https://www.acmicpc.net/problem/10773
// 제로
//
// 딱 스택 문제. 0이 아니면 push, 0이면 pop. 다 처리하고 나서 스택에
// 남은 값들 합을 구하면 됨.

function solve(lines) {
  const k = Number(lines[0].trim());
  const stack = [];

  for (let i = 1; i <= k; i++) {
    const num = Number(lines[i].trim());
    if (num === 0) {
      stack.pop();
    } else {
      stack.push(num);
    }
  }

  return String(stack.reduce((sum, n) => sum + n, 0));
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
