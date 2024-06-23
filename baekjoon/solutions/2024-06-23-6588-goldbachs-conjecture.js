// https://www.acmicpc.net/problem/6588
// 골드바흐의 추측
//
// n이 0이 될 때까지 계속 짝수가 입력됨. 각 n을 두 소수의 합으로
// 표현하되, 그런 쌍이 여럿이면 두 수의 차이가 가장 작은 쌍을
// 출력해야 하므로 p를 n/2부터 2까지 내려가면서 p와 n-p가 둘 다
// 소수인 첫 쌍을 찾으면 됨(그게 차이가 가장 작은 쌍). 백만 이하라
// 에라토스테네스의 체를 미리 만들어서 사용.

const LIMIT = 1000000;

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
const isPrime = (x) => x >= 2 && !isComposite[x];

function solve(lines) {
  const result = [];

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    const n = Number(line);
    if (n === 0) break;

    let found = null;
    for (let p = Math.floor(n / 2); p >= 2; p--) {
      if (isPrime(p) && isPrime(n - p)) {
        found = [p, n - p];
        break;
      }
    }

    result.push(found ? `${n} = ${found[0]} + ${found[1]}` : 'Goldbach\'s conjecture is wrong.');
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
