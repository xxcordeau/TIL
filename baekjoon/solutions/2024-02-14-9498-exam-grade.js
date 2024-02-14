// https://www.acmicpc.net/problem/9498
// 시험 성적
//
// 점수 구간별로 등급을 매기는 문제라 그냥 if-else 순서대로 큰 구간부터
// 체크하면 됨.

function solve(lines) {
  const score = Number(lines[0].trim());

  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
