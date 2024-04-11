// https://www.acmicpc.net/problem/1085
// 직사각형에서 탈출
//
// 네 변까지의 거리(왼쪽 x, 오른쪽 w-x, 아래쪽 y, 위쪽 h-y) 중
// 가장 작은 값이 최단 탈출 거리.

function solve(lines) {
  const [x, y, w, h] = lines[0].trim().split(' ').map(Number);
  const distances = [x, w - x, y, h - y];
  return String(Math.min(...distances));
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
