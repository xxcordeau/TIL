// https://www.acmicpc.net/problem/15652
// N과 M (4)
//
// 중복을 허용하되 비내림차순으로만 뽑아야 하는 조합 문제다. DFS에서
// 다음에 고를 수 있는 최소값을 "직전에 고른 값"으로 넘겨주면 같은 수를
// 또 고를 수 있으면서도 오름차순이 자동으로 유지된다.

function solve(lines) {
  const [n, m] = lines[0].trim().split(' ').map(Number);
  const result = [];
  const picked = [];

  function dfs(start) {
    if (picked.length === m) {
      result.push(picked.join(' '));
      return;
    }
    for (let i = start; i <= n; i++) {
      picked.push(i);
      dfs(i);
      picked.pop();
    }
  }

  dfs(1);

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
