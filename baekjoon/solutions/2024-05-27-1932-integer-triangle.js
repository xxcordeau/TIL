// https://www.acmicpc.net/problem/1932
// 정수 삼각형
//
// 위에서부터 내려오는 대신 아래에서부터 위로 올라가며 dp를 채우면
// 편하다. 각 칸의 dp값 = 자기 값 + 바로 아래 두 칸의 dp값 중 더 큰
// 값. 맨 위 칸까지 다 채우면 dp[0][0]이 정답.

function solve(lines) {
  const n = Number(lines[0].trim());
  const triangle = lines.slice(1, 1 + n).map((line) => line.trim().split(' ').map(Number));

  for (let row = n - 2; row >= 0; row--) {
    for (let col = 0; col <= row; col++) {
      triangle[row][col] += Math.max(triangle[row + 1][col], triangle[row + 1][col + 1]);
    }
  }

  return String(triangle[0][0]);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
