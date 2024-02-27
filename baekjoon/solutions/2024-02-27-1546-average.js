// https://www.acmicpc.net/problem/1546
// 평균
//
// 최댓값을 기준으로 각 점수를 다시 계산(점수/최댓값*100)한 다음
// 평균을 내면 됨.

function solve(lines) {
  const n = Number(lines[0].trim());
  const scores = lines[1].trim().split(' ').map(Number);
  const max = Math.max(...scores);

  const rescored = scores.map((s) => (s / max) * 100);
  const average = rescored.reduce((sum, s) => sum + s, 0) / n;

  return average.toFixed(6);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
