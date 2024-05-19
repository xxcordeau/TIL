// https://www.acmicpc.net/problem/5397
// 키로거
//
// 커서를 기준으로 왼쪽 스택, 오른쪽 스택 두 개를 둬서 관리하는 게
// 핵심 아이디어. 문자를 입력하면 왼쪽 스택에 push, '<'는 왼쪽에서
// 오른쪽으로, '>'는 오른쪽에서 왼쪽으로 옮기고, '-'는 왼쪽 스택에서
// pop(백스페이스). 다 끝나면 왼쪽 스택 + 오른쪽 스택을 뒤집은 것을
// 이어붙이면 최종 화면.

function solve(lines) {
  const t = Number(lines[0].trim());
  const result = [];

  for (let i = 1; i <= t; i++) {
    const log = lines[i].replace(/\r$/, '');
    const left = [];
    const right = [];

    for (const char of log) {
      if (char === '-') {
        left.pop();
      } else if (char === '<') {
        if (left.length > 0) right.push(left.pop());
      } else if (char === '>') {
        if (right.length > 0) left.push(right.pop());
      } else {
        left.push(char);
      }
    }

    result.push(left.join('') + right.reverse().join(''));
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
