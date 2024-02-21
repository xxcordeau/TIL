// https://www.acmicpc.net/problem/10809
// 알파벳 찾기
//
// a부터 z까지 하나씩 돌면서 indexOf로 처음 등장 위치를 찾고, 없으면
// -1을 넣는 식으로 결과 배열을 만들어서 공백으로 이어붙였다.

function solve(lines) {
  const s = lines[0].trim();
  const result = [];

  for (let code = 97; code <= 122; code++) {
    const char = String.fromCharCode(code);
    result.push(s.indexOf(char));
  }

  return result.join(' ');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
