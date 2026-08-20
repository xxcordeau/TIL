// https://www.acmicpc.net/problem/1181
// 단어 정렬
//
// 정렬 기준이 두 개(길이, 사전순)라 자바스크립트 sort의 비교 함수에
// 그대로 넣으면 된다. 길이가 다르면 짧은 게 앞, 같으면 사전순 비교.
// 중복 단어는 하나만 남겨야 해서 Set으로 먼저 걸러낸다.

function solve(lines) {
  const n = Number(lines[0].trim());
  const words = [];
  for (let i = 1; i <= n; i++) words.push(lines[i].trim());

  const unique = [...new Set(words)];

  unique.sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length;
    return a < b ? -1 : a > b ? 1 : 0;
  });

  return unique.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
