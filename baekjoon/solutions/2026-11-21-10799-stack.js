// https://www.acmicpc.net/problem/10799
// 쇠막대기
//
// 레이저가 만나는 막대기 수만큼 자른다.
// ( 는 막대 시작 or 레이저 시작, ) 는 레이저 완성 or 막대 끝.
// 앞이 ( 인 ) 은 레이저, 그 외는 막대 끝.

function solve(lines) {
  const s = lines[0].trim();
  const stack = [];
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (s[i-1] === '(') {
        count += stack.length;
      } else {
        count += 1;
      }
    }
  }
  return count;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}