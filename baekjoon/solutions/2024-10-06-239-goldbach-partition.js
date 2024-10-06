// https://www.acmicpc.net/problem/17103
// 골드바흐 파티션
//
// 에라토스테네스의 체로 1,000,000까지 소수를 미리 걸러두고, 각 N마다
// p <= n-p인 소수 p를 찾아서 p와 n-p가 둘 다 소수인 경우를 세면 된다.
// 매 테스트케이스마다 체를 새로 만들면 느리니까 가장 큰 N 기준으로
// 한 번만 만들어둔다.

function solve(lines) {
  const t = parseInt(lines[0].trim(), 10);
  const ns = [];
  for (let i = 0; i < t; i++) ns.push(parseInt(lines[i + 1].trim(), 10));

  const maxN = Math.max(...ns);
  const isComposite = new Uint8Array(maxN + 1);
  for (let i = 2; i * i <= maxN; i++) {
    if (!isComposite[i]) {
      for (let j = i * i; j <= maxN; j += i) isComposite[j] = 1;
    }
  }
  const isPrime = (x) => x >= 2 && !isComposite[x];

  const out = [];
  for (const n of ns) {
    let count = 0;
    for (let p = 2; p <= n / 2; p++) {
      if (isPrime(p) && isPrime(n - p)) count++;
    }
    out.push(count);
  }

  return out.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
