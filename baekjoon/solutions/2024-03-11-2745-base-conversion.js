// https://www.acmicpc.net/problem/2745
// 진법 변환
//
// 반대로 이번엔 B진법 문자열을 10진수로 바꿔야 하는데, parseInt에
// 진법을 넘기면 알아서 변환해준다.

function solve(lines) {
  const [numStr, bStr] = lines[0].trim().split(' ');
  const b = Number(bStr);
  return String(parseInt(numStr, b));
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
