// https://www.acmicpc.net/problem/1929
// 소수 구하기
//
// 에라토스테네스의 체로 N까지 소수 여부를 미리 다 걸러둔 다음, M
// 이상인 것만 걸러서 출력.

function solve(lines) {
  const [m, n] = lines[0].trim().split(' ').map(Number);

  const isComposite = new Array(n + 1).fill(false);
  for (let i = 2; i * i <= n; i++) {
    if (!isComposite[i]) {
      for (let j = i * i; j <= n; j += i) {
        isComposite[j] = true;
      }
    }
  }

  const result = [];
  for (let i = Math.max(2, m); i <= n; i++) {
    if (!isComposite[i]) {
      result.push(i);
    }
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
