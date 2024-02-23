// https://www.acmicpc.net/problem/2439
// 별 찍기 - 2
//
// 별 찍기 - 1이랑 같은데 오른쪽 정렬이라 앞에 공백을 (N-i)개 채워주면
// 됨.

function solve(lines) {
  const n = Number(lines[0].trim());
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(' '.repeat(n - i) + '*'.repeat(i));
  }
  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
