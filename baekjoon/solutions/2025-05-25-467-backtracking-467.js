// https://www.acmicpc.net/problem/2346
// 풍선 터뜨리기
//
// 가능한 모든 경우를 순서대로 만들어보되, 조건에 어긋나는
// 경로는 더 깊이 들어가지 않고 가지치기하는 백트래킹으로
// 풀었다. 선택 - 재귀 - 취소의 흐름을 그대로 구현했다.

function solve(lines) {
  const [n, m] = lines[0].trim().split(/\s+/).map(Number);
  const used = new Array(n + 1).fill(false);
  const path = [];
  const results = [];

  function backtrack() {
    if (path.length === m) {
      results.push(path.join(' '));
      return;
    }
    for (let i = 1; i <= n; i++) {
      if (!used[i]) {
        used[i] = true;
        path.push(i);
        backtrack();
        path.pop();
        used[i] = false;
      }
    }
  }

  backtrack();
  return results.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
