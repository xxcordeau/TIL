// https://www.acmicpc.net/problem/2493
// 탑
//
// 왼쪽에서부터 순서대로 보면서, 자기보다 낮거나 같은 탑은 레이저를
// 받을 수 없으니 스택에서 계속 빼버린다(그 탑들은 답이 이미 정해질
// 수 없음). 스택에 남아서 자기보다 높은 탑이 있으면 그게 수신탑,
// 없으면 0. 마지막에 자기 자신을 스택에 쌓아 올린다.

function solve(lines) {
  const n = Number(lines[0].trim());
  const heights = lines[1].trim().split(' ').map(Number);

  const stack = []; // [index, height]
  const result = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && stack[stack.length - 1][1] <= heights[i]) {
      stack.pop();
    }
    if (stack.length > 0) {
      result[i] = stack[stack.length - 1][0] + 1;
    } else {
      result[i] = 0;
    }
    stack.push([i, heights[i]]);
  }

  return result.join(' ');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
