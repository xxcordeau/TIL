// https://www.acmicpc.net/problem/1874
// 스택 수열
//
// 목표 수열을 하나씩 보면서: 현재 push할 다음 수(cur)가 목표보다
// 작거나 같으면 목표까지 계속 push한 다음 바로 pop, 이미 cur이
// 목표를 넘어섰으면 스택 맨 위가 목표와 같은지 확인해서 같으면 pop,
// 다르면 애초에 불가능한 수열이라 NO.

function solve(lines) {
  const n = Number(lines[0].trim());
  const targets = lines.slice(1, 1 + n).map((line) => Number(line.trim()));

  const stack = [];
  const ops = [];
  let cur = 1;
  let possible = true;

  for (const target of targets) {
    if (cur <= target) {
      while (cur <= target) {
        stack.push(cur);
        ops.push('+');
        cur++;
      }
      stack.pop();
      ops.push('-');
    } else if (stack[stack.length - 1] === target) {
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
