// https://www.acmicpc.net/problem/1157
// 단어 공부
//
// 전부 대문자로 바꾼 다음 알파벳별 등장 횟수를 세고, 최댓값을 가진
// 알파벳이 몇 개인지 확인해서 하나면 그 글자, 여러 개면 물음표를
// 출력.

function solve(lines) {
  const word = lines[0].trim().toUpperCase();
  const counts = {};

  for (const char of word) {
    counts[char] = (counts[char] || 0) + 1;
  }

  const max = Math.max(...Object.values(counts));
  const topChars = Object.keys(counts).filter((c) => counts[c] === max);

  return topChars.length === 1 ? topChars[0] : '?';
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
