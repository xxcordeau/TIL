// https://www.acmicpc.net/problem/8393
// 합
//
// 1부터 n까지 더한 값을 출력. n이 작아서 그냥 반복문으로 더해도
// 충분하지만 가우스 공식으로 바로 계산.

function solve(lines) {
  const n = Number(lines[0].trim());
  return String((n * (n + 1)) / 2);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
