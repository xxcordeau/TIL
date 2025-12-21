// https://www.acmicpc.net/problem/3278
// EXCHANGE
//
// 입력을 앞에서부터 하나씩 처리하면서 스택에 쌓아두었다가
// 조건을 만족할 때 꺼내는 방식으로 짝을 맞춰나가는 문제.
// 스택이 비어있는데 꺼내야 하는 경우를 예외로 처리해줬다.

function solve(lines) {
  const s = lines[0].trim();
  const stack = [];
  for (const ch of s) {
    if (ch === '(') {
      stack.push(ch);
    } else if (ch === ')') {
      if (stack.length === 0) {
        return 'NO';
      }
      stack.pop();
    }
  }
  return stack.length === 0 ? 'YES' : 'NO';
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
