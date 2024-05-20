// https://www.acmicpc.net/problem/2422
// 한윤정이 이탈리아에서 아이스크림을 만들었다고 한다
//
// 궁합 안 좋은 쌍을 Set으로 빠르게 조회할 수 있게 만들어두고, 재료
// N개가 최대 200개라 3중 반복문으로 모든 조합을 돌려도 충분히
// 빠르다. 조합 안에 궁합 나쁜 쌍이 하나라도 있으면 스킵.

function solve(lines) {
  const [n, m] = lines[0].trim().split(' ').map(Number);
  const badPairs = new Set();

  for (let i = 1; i <= m; i++) {
    const [a, b] = lines[i].trim().split(' ').map(Number);
    badPairs.add(`${Math.min(a, b)}-${Math.max(a, b)}`);
  }

  const isBad = (a, b) => badPairs.has(`${Math.min(a, b)}-${Math.max(a, b)}`);

  let count = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if (isBad(i, j)) continue;
      for (let k = j + 1; k <= n; k++) {
        if (isBad(i, k) || isBad(j, k)) continue;
        count++;
      }
    }
  }

  return String(count);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
