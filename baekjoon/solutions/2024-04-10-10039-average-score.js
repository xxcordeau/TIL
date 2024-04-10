// https://www.acmicpc.net/problem/10039
// 평균 점수
//
// 5개 점수를 받아서 40점 미만이면 40점으로 보정한 다음 평균을 내고,
// 정수로 떨어뜨리기 위해 Math.floor를 썼다.

function solve(lines) {
  const scores = lines.slice(0, 5).map((line) => {
    const score = Number(line.trim());
    return score < 40 ? 40 : score;
  });

  const average = scores.reduce((sum, s) => sum + s, 0) / 5;
  return String(Math.floor(average));
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
