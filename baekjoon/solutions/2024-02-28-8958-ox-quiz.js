// https://www.acmicpc.net/problem/8958
// OX퀴즈
//
// O가 연속될 때마다 점수가 1점씩 늘어나고, X를 만나면 연속 카운트가
// 0으로 리셋되는 식으로 왼쪽부터 한 글자씩 훑으면서 누적 점수를
// 더했다.

function solve(lines) {
  const t = Number(lines[0].trim());
  const result = [];

  for (let i = 1; i <= t; i++) {
    const line = lines[i].trim();
    let score = 0;
    let streak = 0;

    for (const char of line) {
      if (char === 'O') {
        streak++;
        score += streak;
      } else {
        streak = 0;
      }
    }

    result.push(score);
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
