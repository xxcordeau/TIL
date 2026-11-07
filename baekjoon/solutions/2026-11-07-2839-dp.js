// https://www.acmicpc.net/problem/2839
// 설탕 배달
//
// 3kg, 5kg 봉지로 N kg을 만들 때 봉지 수 최솟값.
// 5kg을 최대한 많이 쓰면서 나머지를 3kg으로 채울 수 있는지 확인한다.

function solve(lines) {
  let n = parseInt(lines[0].trim(), 10);
  let count = 0;
  while (n >= 0) {
    if (n % 3 === 0) return count + n / 3;
    n -= 5;
    count++;
  }
  return -1;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}