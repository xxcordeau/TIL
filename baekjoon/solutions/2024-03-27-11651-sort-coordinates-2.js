// https://www.acmicpc.net/problem/11651
// 좌표 정렬하기 2
//
// 좌표 정렬하기랑 기준만 반대(y 먼저, 같으면 x)로 바뀐 버전.

function solve(lines) {
  const n = Number(lines[0].trim());
  const points = lines.slice(1, 1 + n).map((line) => line.trim().split(' ').map(Number));

  points.sort((a, b) => (a[1] !== b[1] ? a[1] - b[1] : a[0] - b[0]));

  return points.map(([x, y]) => `${x} ${y}`).join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
