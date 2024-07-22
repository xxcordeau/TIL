// https://www.acmicpc.net/problem/15651
// N과 M (4)
//
// 이번엔 같은 수를 여러 번 골라도 되고, 그러면서도 비내림차순으로
// 나열해야 한다. 15650이랑 거의 같은 백트래킹인데, 다음 재귀에서
// start를 i+1이 아니라 i로 넘겨서 자기 자신도 다시 뽑을 수 있게
// 해주면 된다.

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
      backtrack(i);
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
