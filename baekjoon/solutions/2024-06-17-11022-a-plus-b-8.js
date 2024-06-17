// https://www.acmicpc.net/problem/11022
// A+B - 8
//
// 테스트케이스 개수 T가 주어지고, 각 케이스마다 "Case #i: a + b = 결과"
// 형식으로 출력해야 함. 케이스 번호는 1부터 시작.

function solve(lines) {
  const t = Number(lines[0].trim());
  const result = [];

  for (let i = 1; i <= t; i++) {
    const [a, b] = lines[i].trim().split(' ').map(Number);
    result.push(`Case #${i}: ${a} + ${b} = ${a + b}`);
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
