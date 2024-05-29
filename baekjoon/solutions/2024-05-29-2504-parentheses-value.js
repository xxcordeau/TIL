// https://www.acmicpc.net/problem/2504
// 괄호의 값
//
// 여는 괄호를 만날 때마다 현재 배율(temp)에 2 또는 3을 곱해서 쌓아두고,
// 바로 직전 문자가 짝이 되는 여는 괄호였다면(즉 "()"나 "[]"로 바로
// 닫힌 경우) 그 순간의 배율을 값으로 더한다. 짝이 안 맞으면(스택이
// 비어있거나 다른 종류의 괄호가 나오면) 0을 리턴.

function solve(lines) {
  const s = lines[0].trim();
  const stack = [];
  let temp = 1;
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (c === '(') {
      temp *= 2;
      stack.push('(');
    } else if (c === '[') {
      temp *= 3;
      stack.push('[');
    } else if (c === ')') {
      if (stack.length === 0 || stack[stack.length - 1] !== '(') return '0';
      if (s[i - 1] === '(') answer += temp;
      temp /= 2;
      stack.pop();
    } else if (c === ']') {
      if (stack.length === 0 || stack[stack.length - 1] !== '[') return '0';
      if (s[i - 1] === '[') answer += temp;
      temp /= 3;
      stack.pop();
    }
  }

  if (stack.length > 0) return '0';

  return String(answer);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
