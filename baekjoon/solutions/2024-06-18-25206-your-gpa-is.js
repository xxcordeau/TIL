// https://www.acmicpc.net/problem/25206
// 너의 평점은
//
// 20개 과목의 "이름 학점 성적"이 주어짐. 성적을 평점으로 바꿔서
// (학점 * 평점)의 합을 학점의 합으로 나누면 평균 평점. 단 P는
// 평점 계산에서 통째로 제외(분자, 분모 모두 안 더함).

const GRADE_POINT = {
  'A+': 4.5,
  A0: 4.0,
  'B+': 3.5,
  B0: 3.0,
  'C+': 2.5,
  C0: 2.0,
  'D+': 1.5,
  D0: 1.0,
  F: 0.0,
};

function solve(lines) {
  let creditSum = 0;
  let pointSum = 0;

  for (let i = 0; i < 20; i++) {
    const parts = lines[i].trim().split(' ');
    const grade = parts[parts.length - 1];
    const credit = Number(parts[parts.length - 2]);

    if (grade === 'P') continue;

    creditSum += credit;
    pointSum += credit * GRADE_POINT[grade];
  }

  return (pointSum / creditSum).toFixed(6);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
