// https://www.acmicpc.net/problem/9012
// 괄호
//
// 주어진 괄호 문자열이 올바른지 판단한다.
// 스택으로 여는 괄호를 쌓고, 닫는 괄호가 나오면 pop한다.
// 최종적으로 스택이 비어있으면 YES, 아니면 NO.

function solve(lines) {
  const T = parseInt(lines[0].trim(), 10);
  const result = [];
  for (let t = 1; t <= T; t++) {
    const s = lines[t].trim();
    let stack = 0;
    let valid = true;
    for (const c of s) {
      if (c === '(') stack++;
      else {
        if (stack === 0) { valid = false; break; }
        stack--;
      }
    }
    result.push(valid && stack === 0 ? 'YES' : 'NO');
  }
  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}