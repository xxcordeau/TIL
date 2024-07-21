// https://www.acmicpc.net/problem/15650
// N과 M (2)
//
// 15649와 비슷한데 이번엔 고른 수열이 오름차순이어야 한다. 매번 1부터
// 다시 시도하는 대신, 직전에 뽑은 수보다 큰 수부터 시도하도록
// start 인덱스를 넘겨주면 자연스럽게 오름차순만 만들어진다.

function solve(lines) {
  const [n, m] = lines[0].trim().split(' ').map(Number);
  const picked = [];
  const results = [];

  function backtrack(start) {
    if (picked.length === m) {
      results.push(picked.join(' '));
      return;
    }
    for (let i = start; i <= n; i++) {
      picked.push(i);
      backtrack(i + 1);
      picked.pop();
    }
  }

  backtrack(1);
  return results.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
