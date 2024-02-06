// https://www.acmicpc.net/problem/10869
// 사칙연산
//
// 덧셈, 뺄셈, 곱셈, 몫, 나머지를 순서대로 한 줄씩 출력. 몫은
// 자바스크립트에 정수 나눗셈 연산자가 없어서 Math.floor로 처리했다.

function solve(lines) {
  const [a, b] = lines[0].trim().split(' ').map(Number);
  return [a + b, a - b, a * b, Math.floor(a / b), a % b].join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
