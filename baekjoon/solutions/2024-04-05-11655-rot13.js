// https://www.acmicpc.net/problem/11655
// ROT13
//
// 알파벳이면 13칸 밀어서(26으로 나눈 나머지) 바꾸고, 대소문자 구분은
// base(A 또는 a)를 다르게 잡아서 처리. 알파벳이 아니면 그대로 둠.

function rot13Char(char) {
  const code = char.charCodeAt(0);

  if (code >= 65 && code <= 90) {
    return String.fromCharCode(((code - 65 + 13) % 26) + 65);
  }

  if (code >= 97 && code <= 122) {
    return String.fromCharCode(((code - 97 + 13) % 26) + 97);
  }

  return char;
}

function solve(lines) {
  const text = lines[0] !== undefined ? lines[0].replace(/\r$/, '') : '';
  return text.split('').map(rot13Char).join('');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
