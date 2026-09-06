// https://www.acmicpc.net/problem/10816
// 숫자 카드 2
//
// 각 숫자가 상근이 손에 몇 개 있는지 세는 문제.
// Map에 빈도를 저장해두고 쿼리마다 꺼내면 O(N+M)으로 처리된다.
// 이진 탐색으로도 풀 수 있지만 Map이 훨씬 간단하다.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const cards = lines[1].trim().split(' ');
  const m = parseInt(lines[2].trim(), 10);
  const queries = lines[3].trim().split(' ');

  const freq = new Map();
  for (const c of cards) {
    freq.set(c, (freq.get(c) || 0) + 1);
  }

  const result = [];
  for (const q of queries) {
    result.push(freq.get(q) || 0);
  }

  return result.join(' ');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
