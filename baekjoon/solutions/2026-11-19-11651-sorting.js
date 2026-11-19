// https://www.acmicpc.net/problem/11651
// 좌표 정렬하기 2
//
// y 기준으로 정렬하고 y가 같으면 x 기준으로 정렬한다.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const points = [];
  for (let i = 1; i <= n; i++) {
    const [x, y] = lines[i].trim().split(' ').map(Number);
    points.push([x, y]);
  }
  points.sort((a, b) => a[1] !== b[1] ? a[1] - b[1] : a[0] - b[0]);
  return points.map(([x, y]) => `${x} ${y}`).join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}