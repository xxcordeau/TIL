// https://www.acmicpc.net/problem/4344
// 평균은 넘겠지
//
// 각 케이스마다 평균을 구하고, 평균을 초과하는 학생 수를 세서
// 전체 학생 수 대비 비율(%)을 소수점 셋째 자리까지 출력.

function solve(lines) {
  const c = Number(lines[0].trim());
  const result = [];

  for (let i = 1; i <= c; i++) {
    const parts = lines[i].trim().split(' ').map(Number);
    const n = parts[0];
    const scores = parts.slice(1);
    const average = scores.reduce((sum, s) => sum + s, 0) / n;
    const aboveCount = scores.filter((s) => s > average).length;
    const ratio = (aboveCount / n) * 100;

    result.push(`${ratio.toFixed(3)}%`);
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
