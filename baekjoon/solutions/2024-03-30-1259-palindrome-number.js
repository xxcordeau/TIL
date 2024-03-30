// https://www.acmicpc.net/problem/1259
// 팰린드롬수
//
// 0이 나올 때까지 계속 입력받으면서, 문자열을 뒤집어서 원래랑
// 같은지만 비교하면 됨.

function solve(lines) {
  const result = [];

  for (const line of lines) {
    const num = line.trim();
    if (num === '' || num === '0') break;

    const reversed = num.split('').reverse().join('');
    result.push(num === reversed ? 'yes' : 'no');
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
