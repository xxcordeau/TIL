// https://www.acmicpc.net/problem/9506
// 약수들의 합
//
// 자기 자신을 제외한 약수를 다 더했을 때 자기 자신과 같아지는 수가
// 완전수다. n보다 작은 약수를 전부 구해서 더한 다음 n과 비교하고,
// 완전수면 그 약수들을 어떻게 더해서 n이 되는지도 같이 출력해야 한다.
// 입력이 -1로 끝난다.

function solve(lines) {
  const out = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed === '') continue;

    const n = parseInt(trimmed, 10);
    if (n === -1) break;

    const divisors = [];
    for (let i = 1; i < n; i++) {
      if (n % i === 0) divisors.push(i);
    }
    const sum = divisors.reduce((a, b) => a + b, 0);

    if (sum === n) {
      out.push(`${n} = ${divisors.join('+')}`);
      out.push(`${n} is a perfect number.`);
    } else {
      out.push(`${n} is NOT perfect.`);
    }
  }
  return out.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
