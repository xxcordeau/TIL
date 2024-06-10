// https://www.acmicpc.net/problem/4949
// 균형잡힌 세상
//
// 한 줄이 "."만 있으면 입력 종료. 그 전까지 각 줄에 대해 괄호
// 짝이 맞는지 스택으로 검사. ()와 []만 신경 쓰고 나머지 문자는
// 무시하면 됨. 여는 괄호는 스택에 쌓고, 닫는 괄호가 나오면 스택
// 맨 위와 짝이 맞는지 확인해서 안 맞거나 스택이 비어있으면 실패,
// 끝까지 다 봤는데 스택이 남아있어도 실패.

function isBalanced(line) {
  const stack = [];
  for (const ch of line) {
    if (ch === '(' || ch === '[') {
      stack.push(ch);
    } else if (ch === ')') {
      if (stack.pop() !== '(') return false;
    } else if (ch === ']') {
      if (stack.pop() !== '[') return false;
    }
  }
  return stack.length === 0;
}

function solve(lines) {
  const result = [];

  for (const raw of lines) {
    const line = raw.replace(/\r$/, '');
    if (line === '.') break;
    result.push(isBalanced(line) ? 'yes' : 'no');
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
