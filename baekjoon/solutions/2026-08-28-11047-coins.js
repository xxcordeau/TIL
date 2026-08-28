// https://www.acmicpc.net/problem/11047
// 동전 0
//
// 그리디 문제. 가장 큰 동전부터 최대한 많이 사용하면 된다.
// K를 해당 동전 액면가로 나눈 몫만큼 동전을 쓰고, 나머지를 다음 단계로 넘긴다.
// 동전이 K의 배수인 경우에만 사용하므로, 큰 것부터 탐욕적으로 선택하면 최솟값이 보장된다.

function solve(lines) {
  const [N, K] = lines[0].trim().split(' ').map(Number);
  const coins = [];
  for (let i = 1; i <= N; i++) {
    coins.push(parseInt(lines[i].trim(), 10));
  }

  let remain = K;
  let count = 0;

  for (let i = N - 1; i >= 0; i--) {
    if (coins[i] <= remain) {
      count += Math.floor(remain / coins[i]);
      remain %= coins[i];
    }
  }

  return count;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
