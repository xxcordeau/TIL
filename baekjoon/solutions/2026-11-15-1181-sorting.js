// https://www.acmicpc.net/problem/1181
// 단어 정렬
//
// 길이 짧은 순, 같으면 사전순으로 정렬하고 중복은 제거한다.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const words = new Set();
  for (let i = 1; i <= n; i++) words.add(lines[i].trim());
  return [...words]
    .sort((a, b) => a.length !== b.length ? a.length - b.length : a.localeCompare(b))
    .join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}