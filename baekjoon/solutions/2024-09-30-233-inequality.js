// https://www.acmicpc.net/problem/2529
// 부등호
//
// 0~9 중 서로 다른 숫자 k+1개를 뽑아서 주어진 부등호 조건을 전부
// 만족시키는 수 중 최댓값과 최솟값을 구하는 문제. 어차피 숫자가
// 10개뿐이라 백트래킹으로 자리마다 하나씩 채워가면서, 바로 앞
// 부등호 조건을 만족 못하면 그 자리에서 가지치기하는 식으로 풀었다.
// 나온 모든 경우를 문자열로 모아두고 정렬해서 양 끝을 answer로 뽑았다.

function solve(lines) {
  const k = parseInt(lines[0].trim(), 10);
  const symbols = lines[1].trim().split(/\s+/);
  const used = new Array(10).fill(false);
  const seq = [];
  const results = [];

  function satisfies(pos) {
    if (pos === 0) return true;
    const prev = seq[pos - 1];
    const cur = seq[pos];
    const sym = symbols[pos - 1];
    return sym === '<' ? prev < cur : prev > cur;
  }

  function dfs(pos) {
    if (pos === k + 1) {
      results.push(seq.join(''));
      return;
    }
    for (let d = 0; d <= 9; d++) {
      if (used[d]) continue;
      seq.push(d);
      used[d] = true;
      if (satisfies(pos)) dfs(pos + 1);
      seq.pop();
      used[d] = false;
    }
  }

  dfs(0);
  results.sort();

  return `${results[results.length - 1]}\n${results[0]}`;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
