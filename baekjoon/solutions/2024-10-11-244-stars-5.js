// https://www.acmicpc.net/problem/2442
// 별 찍기 5
//
// i번째 줄에는 (N-i)개의 공백을 채운 다음 별을 (2i-1)개 찍으면
// 가운데 정렬된 이등변삼각형 모양이 나온다.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const out = [];
  for (let i = 1; i <= n; i++) {
    out.push(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
  }
  return out.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
