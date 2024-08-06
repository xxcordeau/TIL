// https://www.acmicpc.net/problem/7568
// 덩치
//
// N이 최대 50이라 모든 쌍을 비교해도 충분하다. 나보다 몸무게와
// 키가 둘 다 큰 사람의 수를 세면 그게 곧 내 등수 - 1이 된다.
// (그런 사람이 없으면 내가 1등)

function solve(lines) {
  const n = Number(lines[0].trim());
  const people = [];
  for (let i = 1; i <= n; i++) {
    people.push(lines[i].trim().split(' ').map(Number));
  }

  const ranks = [];
  for (let i = 0; i < n; i++) {
    let rank = 1;
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      if (people[j][0] > people[i][0] && people[j][1] > people[i][1]) {
        rank++;
      }
    }
    ranks.push(rank);
  }

  return ranks.join(' ');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
