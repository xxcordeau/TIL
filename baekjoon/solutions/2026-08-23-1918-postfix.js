// https://www.acmicpc.net/problem/1918
// 후위표기식
//
// 스택을 이용한 전형적인 중위 -> 후위 변환 문제다. 피연산자(알파벳)는
// 바로 출력에 붙이고, 여는 괄호는 무조건 스택에 쌓는다. 연산자가 들어오면
// 스택 top이 자기보다 우선순위가 높거나 같은 동안 계속 꺼내서 출력에
// 붙인 다음 자기 자신을 스택에 넣으면 된다. 닫는 괄호를 만나면 여는
// 괄호가 나올 때까지 스택에서 꺼내 출력하고 여는 괄호는 버린다.
// 마지막에 스택에 남은 연산자를 전부 출력에 붙여주면 끝.

function solve(lines) {
  const expr = lines[0].trim();
  const prec = { '+': 1, '-': 1, '*': 2, '/': 2 };
  const stack = [];
  const out = [];

  for (const ch of expr) {
    if (/[A-Z]/.test(ch)) {
      out.push(ch);
    } else if (ch === '(') {
      stack.push(ch);
    } else if (ch === ')') {
      while (stack.length && stack[stack.length - 1] !== '(') {
        out.push(stack.pop());
      }
      stack.pop();
    } else if (ch in prec) {
      while (
        stack.length &&
        stack[stack.length - 1] !== '(' &&
        prec[stack[stack.length - 1]] >= prec[ch]
      ) {
        out.push(stack.pop());
      }
      stack.push(ch);
    }
  }

  while (stack.length) out.push(stack.pop());

  return out.join('');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
