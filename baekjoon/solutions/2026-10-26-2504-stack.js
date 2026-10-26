// https://www.acmicpc.net/problem/2504
// 괄호의 값
//
// 스택으로 괄호 값을 계산하는 문제.
// ( 는 현재 값에 2를 곱하고, [ 는 3을 곱한다.
// ) 나 ] 가 나오면 대응되는 여는 괄호까지 합산하고 나누거나 더한다.

function solve(lines) {
  const s = lines[0].trim();
  const stack = [];
  let cur = 0;
  let result = 0;

  for (const ch of s) {
    if (ch === '(') {
      stack.push(cur);
      cur = 0;
    } else if (ch === '[') {
      stack.push(cur);
      cur = 0;
    } else if (ch === ')') {
      if (stack.length === 0) return 0;
      const prev = stack.pop();
      cur = prev + (cur === 0 ? 2 : cur * 2);
    } else if (ch === ']') {
      if (stack.length === 0) return 0;
      const prev = stack.pop();
      cur = prev + (cur === 0 ? 3 : cur * 3);
    }
  }

  return stack.length === 0 ? cur : 0;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}