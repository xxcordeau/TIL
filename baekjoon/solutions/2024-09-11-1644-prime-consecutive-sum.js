// https://www.acmicpc.net/problem/1644
// 소수의 연속합
//
// 에라토스테네스의 체로 N 이하 소수를 다 구해놓고, 그 소수들을 배열에
// 담아 투 포인터로 연속 구간의 합이 N이 되는 경우의 수를 센다. 구간
// 합이 N보다 작으면 오른쪽을 늘리고, 크거나 같으면 왼쪽을 줄이면서
// N과 같아질 때마다 카운트를 올린다.

function solve(lines) {
  const n = Number(lines[0].trim());

  if (n < 2) return '0';

  const isComposite = new Array(n + 1).fill(false);
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (!isComposite[i]) {
      primes.push(i);
      for (let j = i * 2; j <= n; j += i) {
        isComposite[j] = true;
      }
    }
  }

  let left = 0;
  let sum = 0;
  let count = 0;

  for (let right = 0; right < primes.length; right++) {
    sum += primes[right];

    while (sum > n) {
      sum -= primes[left];
      left++;
    }

    if (sum === n) {
      count++;
    }
  }

  return String(count);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
