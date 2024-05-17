// https://www.acmicpc.net/problem/1946
// 신입 사원
//
// 서류 순위 기준으로 정렬해두면, 그 순서대로 보면서 "지금까지 본
// 사람 중 면접 순위가 가장 높았던 값(가장 작은 수)"보다 더 좋은
// 면접 순위를 가진 사람만 뽑힐 자격이 있다. 서류 순위는 이미 정렬돼
// 있어서 자동으로 자기보다 서류가 나쁜 사람 걱정은 안 해도 됨.

function solve(lines) {
  const t = Number(lines[0].trim());
  const result = [];
  let cursor = 1;

  for (let tc = 0; tc < t; tc++) {
    const n = Number(lines[cursor].trim());
    const applicants = [];
    for (let i = 1; i <= n; i++) {
      applicants.push(lines[cursor + i].trim().split(' ').map(Number));
    }
    cursor += n + 1;

    applicants.sort((a, b) => a[0] - b[0]);

    let bestInterview = Infinity;
    let count = 0;

    for (const [, interview] of applicants) {
      if (interview < bestInterview) {
        count++;
        bestInterview = interview;
      }
    }

    result.push(count);
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
