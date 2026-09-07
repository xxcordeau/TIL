// https://www.acmicpc.net/problem/1764
// 듣보잡
//
// 두 리스트의 교집합을 구하는 문제. 첫 번째 리스트를 Set에 넣고,
// 두 번째 리스트를 순회하면서 Set에 있는 이름만 추려낸다.
// 결과는 사전순 정렬 후 출력.

function solve(lines) {
  const [N, M] = lines[0].trim().split(' ').map(Number);
  const setA = new Set();
  for (let i = 1; i <= N; i++) {
    setA.add(lines[i].trim());
  }

  const result = [];
  for (let i = N + 1; i <= N + M; i++) {
    const name = lines[i].trim();
    if (setA.has(name)) result.push(name);
  }

  result.sort();
  return `${result.length}\n${result.join('\n')}`;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
