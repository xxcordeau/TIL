// https://www.acmicpc.net/problem/15649
// N과 M (1)
//
// 1부터 N까지 중에서 M개를 골라 나열하는 모든 경우를, 사전 순으로
// 나오게 하려면 그냥 1부터 N까지 순서대로 시도하는 백트래킹을 쓰면
// 된다. used 배열로 이미 뽑은 수는 건너뛰고, 길이가 M이 되면 결과에
// 담는다.

function solve(lines) {
  const [n, m] = lines[0].trim().split(' ').map(Number);
  const used = new Array(n + 1).fill(false);
  const picked = [];
  const results = [];

  function backtrack() {
    if (picked.length === m) {
      results.push(picked.join(' '));
      return;
    }
    for (let i = 1; i <= n; i++) {
      if (used[i]) continue;
      used[i] = true;
      picked.push(i);
      backtrack();
      picked.pop();
      used[i] = false;
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
