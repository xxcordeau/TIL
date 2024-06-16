// https://www.acmicpc.net/problem/10953
// A+B - 6
//
// 첫 줄에 테스트케이스 개수 T, 그 다음 줄부터 "a,b" 형태로
// 콤마로 구분된 두 수가 주어짐. split(',')로 나눠서 더하면 됨.

function solve(lines) {
  const t = Number(lines[0].trim());
  const result = [];

  for (let i = 1; i <= t; i++) {
    const [a, b] = lines[i].trim().split(',').map(Number);
    result.push(a + b);
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
