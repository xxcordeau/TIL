// https://www.acmicpc.net/problem/1032
// 명령 프롬프트
//
// 문자열들이 길이가 다 같으니까 자리마다 세로로 훑으면서 모든 단어가
// 같은 글자면 그 글자를, 하나라도 다르면 물음표를 채워넣으면 끝.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const words = [];
  for (let i = 0; i < n; i++) words.push(lines[i + 1]);

  const len = words[0].length;
  const result = [];
  for (let col = 0; col < len; col++) {
    const ch = words[0][col];
    const allSame = words.every((w) => w[col] === ch);
    result.push(allSame ? ch : '?');
  }
  return result.join('');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
