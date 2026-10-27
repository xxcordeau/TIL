// https://www.acmicpc.net/problem/1874
// 스택 수열
//
// 1부터 n까지 순서대로 push하면서 목표 수열을 만들 수 있는지 확인한다.
// 스택 top이 목표값과 같으면 pop(-)하고, 아직 안 넣은 수가 있으면 push(+)한다.
// 불가능한 경우 NO 출력.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const seq = [];
  for (let i = 1; i <= n; i++) seq.push(parseInt(lines[i].trim(), 10));

  const stack = [];
  const ops = [];
  let next = 1;
  let possible = true;

  for (const target of seq) {
    while (next <= target) {
      stack.push(next++);
      ops.push('+');
    }
    if (stack[stack.length - 1] === target) {
      stack.pop();
      ops.push('-');
    } else {
      possible = false;
      break;
    }
  }

  return possible ? ops.join('\n') : 'NO';
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}