// https://www.acmicpc.net/problem/1713
// 후보 추천하기
//
// 주어진 범위 안의 소수를 여러 번 판별해야 하는 문제라
// 에라토스테네스의 체로 미리 소수 여부를 모두 계산해두고
// 질의마다 배열을 조회만 하도록 했다.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const isComposite = new Uint8Array(n + 1);
  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (!isComposite[i]) {
      count++;
      for (let j = i * 2; j <= n; j += i) {
        isComposite[j] = 1;
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
