// https://www.acmicpc.net/problem/15654
// N과 M (5)
//
// 1..N이 아니라 주어진 N개의 서로 다른 수 중에서 M개를 뽑아 만든
// 순열을 오름차순으로 출력하는 문제다. 일단 입력받은 수를 정렬해두고,
// 방문 배열로 중복 사용을 막으면서 DFS로 순열을 만들면 자동으로
// 오름차순 순서가 나온다.

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
