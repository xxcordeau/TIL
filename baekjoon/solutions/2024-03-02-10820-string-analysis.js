// https://www.acmicpc.net/problem/10820
// 문자열 분석
//
// 여러 줄이 들어오는데 각 줄마다 소문자/대문자/숫자/공백 개수를 세서
// 한 줄로 출력. 정규식으로 각 종류를 매칭해서 개수만 세면 간단하다.

function solve(lines) {
  const result = [];

  for (const line of lines) {
    if (line === '' || line === undefined) continue;

    const lower = (line.match(/[a-z]/g) || []).length;
    const upper = (line.match(/[A-Z]/g) || []).length;
    const digit = (line.match(/[0-9]/g) || []).length;
    const space = (line.match(/ /g) || []).length;

    result.push(`${lower} ${upper} ${digit} ${space}`);
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
