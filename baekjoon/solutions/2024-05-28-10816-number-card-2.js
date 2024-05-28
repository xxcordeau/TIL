// https://www.acmicpc.net/problem/10816
// 숫자 카드 2
//
// 카드들의 값별 등장 횟수를 Map에 미리 세어두고, 질문마다 그 값이
// Map에 있으면 개수를, 없으면 0을 바로 조회하면 됨.

function solve(lines) {
  const n = Number(lines[0].trim());
  const cards = lines[1].trim().split(' ').map(Number);
  const m = Number(lines[2].trim());
  const queries = lines[3].trim().split(' ').map(Number);

  const countMap = new Map();
  for (const card of cards) {
    countMap.set(card, (countMap.get(card) || 0) + 1);
  }

  return queries.map((q) => countMap.get(q) || 0).join(' ');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
