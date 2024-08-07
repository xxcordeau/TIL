// https://www.acmicpc.net/problem/10430
// 나머지
//
// 자연수 A, B, C가 주어졌을 때 나머지 연산의 성질을 확인해보는
// 문제. 그냥 정의된 네 가지 식을 그대로 계산해서 출력하면 된다.

function solve(lines) {
  const [a, b, c] = lines[0].trim().split(' ').map(Number);

  const r1 = (a + b) % c;
  const r2 = ((a % c) + (b % c)) % c;
  const r3 = (a * b) % c;
  const r4 = ((a % c) * (b % c)) % c;

  return `${r1}\n${r2}\n${r3}\n${r4}`;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
