// https://www.acmicpc.net/problem/11047
// 동전 0
//
// 동전들이 서로 배수 관계라 그리디가 항상 최적이 되는 케이스. 가장
// 큰 동전부터 최대한 많이 쓰고 남은 금액으로 넘어가면 됨.

function solve(lines) {
  const [n, k] = lines[0].trim().split(' ').map(Number);
  const coins = lines.slice(1, 1 + n).map((line) => Number(line.trim()));

  let remaining = k;
  let count = 0;

  for (let i = coins.length - 1; i >= 0; i--) {
    const use = Math.floor(remaining / coins[i]);
    count += use;
    remaining -= use * coins[i];
  }

  return String(count);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
