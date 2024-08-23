// https://www.acmicpc.net/problem/1764
// 듣도 못한 사람, 보도 못한 사람
//
// 듣지 못한 사람 명단을 Set에 넣어두고, 보지 못한 사람 명단을 돌면서
// 그 Set에 있는지 확인하면 교집합을 바로 구할 수 있다.
// 출력은 이름 순으로 정렬해야 해서 마지막에 sort 한 번 해준다.

function solve(lines) {
  const [n, m] = lines[0].trim().split(' ').map(Number);
  const notHeard = new Set();
  for (let i = 1; i <= n; i++) notHeard.add(lines[i].trim());

  const both = [];
  for (let i = 0; i < m; i++) {
    const name = lines[n + 1 + i].trim();
    if (notHeard.has(name)) both.push(name);
  }

  both.sort();

  return `${both.length}\n${both.join('\n')}`;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
