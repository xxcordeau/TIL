// https://www.acmicpc.net/problem/15829
// Hashing
//
// 각 글자를 (아스키값-'a'+1)로 바꾸고, r의 거듭제곱을 곱해서 다
// 더한 다음 M으로 나눈 나머지를 구하는 다항식 해시. 거듭제곱은
// 매번 이전 값에 r을 곱해서 갱신하고, 곱할 때마다 미리 mod를 해줘야
// 값이 안전하게 유지된다.

function solve(lines) {
  const s = lines[1].trim();
  const R = 31;
  const M = 1234567891;

  let hash = 0;
  let power = 1;

  for (const char of s) {
    const value = char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    hash = (hash + value * power) % M;
    power = (power * R) % M;
  }

  return String(hash);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
