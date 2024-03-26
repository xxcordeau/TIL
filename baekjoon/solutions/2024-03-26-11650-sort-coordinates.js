// https://www.acmicpc.net/problem/11650
// 좌표 정렬하기
//
// 좌표 배열을 x기준으로 먼저, x가 같으면 y기준으로 정렬. 비교함수에서
// 두 조건을 순서대로 체크하면 됨.

function solve(lines) {
  const n = Number(lines[0].trim());
  const points = lines.slice(1, 1 + n).map((line) => line.trim().split(' ').map(Number));

  points.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));

  return points.map(([x, y]) => `${x} ${y}`).join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
