// https://www.acmicpc.net/problem/10989
// 수 정렬하기 3
//
// 수가 최대 10000까지밖에 안 되니까 일반 비교 정렬 대신 카운팅 정렬을
// 쓰는 게 이 문제의 의도. 각 값이 몇 번 나왔는지 세어두고, 작은
// 값부터 등장 횟수만큼 출력하면 정렬한 것과 같은 효과.

function solve(lines) {
  const n = Number(lines[0].trim());
  const MAX = 10000;
  const counts = new Array(MAX + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    const num = Number(lines[i].trim());
    counts[num]++;
  }

  const result = [];
  for (let value = 1; value <= MAX; value++) {
    for (let c = 0; c < counts[value]; c++) {
      result.push(value);
    }
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
