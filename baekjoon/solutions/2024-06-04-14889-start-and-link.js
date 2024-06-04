// https://www.acmicpc.net/problem/14889
// 스타트와 링크
//
// N이 최대 20이라 절반씩 나누는 모든 조합을 완전탐색해도 충분하다.
// 0번 사람이 포함된 팀을 고정해서 중복 조합을 절반으로 줄이고, 각
// 조합마다 두 팀의 능력치 합을 구해서 차이의 최솟값을 갱신.

function solve(lines) {
  const n = Number(lines[0].trim());
  const s = lines.slice(1, 1 + n).map((line) => line.trim().split(' ').map(Number));

  let minDiff = Infinity;
  const teamA = [];

  function teamScore(team) {
    let score = 0;
    for (const i of team) {
      for (const j of team) {
        if (i !== j) score += s[i][j];
      }
    }
    return score;
  }

  function combine(start, depth) {
    if (depth === n / 2) {
      const teamB = [];
      for (let i = 0; i < n; i++) {
        if (!teamA.includes(i)) teamB.push(i);
      }
      const diff = Math.abs(teamScore(teamA) - teamScore(teamB));
      minDiff = Math.min(minDiff, diff);
      return;
    }

    for (let i = start; i < n; i++) {
      teamA.push(i);
      combine(i + 1, depth + 1);
      teamA.pop();
    }
  }

  // 0번은 항상 teamA에 속한다고 고정해서 대칭 조합을 걸러낸다.
  teamA.push(0);
  combine(1, 1);

  return String(minDiff);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
