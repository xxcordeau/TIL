// https://www.acmicpc.net/problem/2839
// 설탕 배달
//
// N킬로그램을 3kg, 5kg 봉지로 나눌 때 봉지 수의 최솟값.
// 5kg 봉지를 최대한 많이 쓰면서, 나머지가 3의 배수가 되면 된다.
// 불가능하면 -1 출력.

function solve(lines) {
  let n = parseInt(lines[0].trim(), 10);
  let count = 0;
  while (n >= 0) {
    if (n % 3 === 0) return String(count + n / 3);
    n -= 5;
    count++;
  }
  return '-1';
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
