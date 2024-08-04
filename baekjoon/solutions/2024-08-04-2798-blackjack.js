// https://www.acmicpc.net/problem/2798
// 블랙잭
//
// 카드가 최대 100장이라 세 장을 뽑는 모든 조합을 삼중 반복문으로
// 다 시도해봐도 충분히 빠르다. 합이 M을 넘지 않는 조합들 중에서
// 가장 큰 합을 갱신하며 찾으면 된다.

function solve(lines) {
  const [n, m] = lines[0].trim().split(' ').map(Number);
  const cards = lines[1].trim().split(' ').map(Number);

  let best = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        const sum = cards[i] + cards[j] + cards[k];
        if (sum <= m && sum > best) {
          best = sum;
        }
      }
    }
  }

  return String(best);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
