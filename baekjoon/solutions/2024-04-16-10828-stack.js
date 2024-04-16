// https://www.acmicpc.net/problem/10828
// 스택
//
// 자바스크립트 배열이 push/pop을 기본으로 지원해서, 사실상 배열
// 자체가 스택 역할을 그대로 해준다. 명령어를 파싱해서 각 케이스에
// 맞는 배열 메서드를 호출하고, pop/top은 비어있을 때 -1을 반환하도록
// 처리했다.

function solve(lines) {
  const n = Number(lines[0].trim());
  const stack = [];
  const result = [];

  for (let i = 1; i <= n; i++) {
    const parts = lines[i].trim().split(' ');
    const command = parts[0];

    if (command === 'push') {
      stack.push(Number(parts[1]));
    } else if (command === 'pop') {
      result.push(stack.length === 0 ? -1 : stack.pop());
    } else if (command === 'size') {
      result.push(stack.length);
    } else if (command === 'empty') {
      result.push(stack.length === 0 ? 1 : 0);
    } else if (command === 'top') {
      result.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
    }
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
