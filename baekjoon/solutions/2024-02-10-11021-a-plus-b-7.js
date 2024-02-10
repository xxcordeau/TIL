// https://www.acmicpc.net/problem/11021
// A+B - 7
//
// 테스트케이스 개수 T를 먼저 읽고, 그 다음 줄부터 T개를 순회하면서
// "Case #번호: 결과" 형식으로 출력. 인덱스는 1부터 시작.

function solve(lines) {
  const t = Number(lines[0].trim());
  const result = [];

  for (let i = 1; i <= t; i++) {
    const [a, b] = lines[i].trim().split(' ').map(Number);
    result.push(`Case #${i}: ${a + b}`);
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
