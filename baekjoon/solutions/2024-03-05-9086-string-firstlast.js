// https://www.acmicpc.net/problem/9086
// 문자열
//
// 테스트케이스 개수만큼 돌면서 각 문자열의 첫 글자와 마지막 글자만
// 이어붙여 출력.

function solve(lines) {
  const t = Number(lines[0].trim());
  const result = [];

  for (let i = 1; i <= t; i++) {
    const s = lines[i].trim();
    result.push(s[0] + s[s.length - 1]);
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
