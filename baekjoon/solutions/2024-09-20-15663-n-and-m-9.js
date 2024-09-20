// https://www.acmicpc.net/problem/15663
// N과 M (9)
//
// 입력에 중복된 수가 섞여 있는데, 결과에서는 같은 수열이 중복으로
// 나오면 안 된다. 수를 정렬해두고 DFS를 돌리되, 같은 깊이에서 직전과
// 값이 같은 원소를 "아직 안 썼는데 건너뛰는" 상황이면 스킵해서 중복
// 순열이 생기는 걸 막았다.

function solve(lines) {
  const [n, m] = lines[0].trim().split(' ').map(Number);
  const nums = lines[1].trim().split(' ').map(Number).sort((a, b) => a - b);

  const used = new Array(n).fill(false);
  const picked = [];
  const result = [];

  function dfs() {
    if (picked.length === m) {
      result.push(picked.join(' '));
      return;
    }
    for (let i = 0; i < n; i++) {
      if (used[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

      used[i] = true;
      picked.push(nums[i]);
      dfs();
      picked.pop();
      used[i] = false;
    }
  }

  dfs();

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
