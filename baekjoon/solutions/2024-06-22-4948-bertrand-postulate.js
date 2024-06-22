// https://www.acmicpc.net/problem/4948
// 베르트랑 공준
//
// n이 0이 나올 때까지 계속 입력되고, 매번 (n, 2n] 구간에 있는
// 소수의 개수를 세면 됨. n이 최대 123,456이라 2n은 최대
// 246,912 정도라 에라토스테네스의 체를 한 번만 넉넉히 만들어
// 두고 재사용하면 빠름.

const LIMIT = 246913;

function buildSieve(limit) {
  const isComposite = new Array(limit + 1).fill(false);
  for (let i = 2; i * i <= limit; i++) {
    if (!isComposite[i]) {
      for (let j = i * i; j <= limit; j += i) {
        isComposite[j] = true;
      }
    }
  }
  return isComposite;
}

const isComposite = buildSieve(LIMIT);

function solve(lines) {
  const result = [];

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    const n = Number(line);
    if (n === 0) break;

    let count = 0;
    for (let i = n + 1; i <= 2 * n; i++) {
      if (!isComposite[i]) count++;
    }
    result.push(count);
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
