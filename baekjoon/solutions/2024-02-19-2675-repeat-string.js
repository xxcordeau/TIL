// https://www.acmicpc.net/problem/2675
// 문자열 반복
//
// 테스트케이스마다 "반복횟수 문자열"이 주어지니까, 문자열의 각 글자를
// repeat으로 늘려서 이어붙이면 됨.

function solve(lines) {
  const t = Number(lines[0].trim());
  const result = [];

  for (let i = 1; i <= t; i++) {
    const [rStr, s] = lines[i].trim().split(' ');
    const r = Number(rStr);
    result.push(
      s
        .split('')
        .map((c) => c.repeat(r))
        .join('')
    );
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
