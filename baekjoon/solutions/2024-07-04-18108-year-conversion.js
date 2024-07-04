// https://www.acmicpc.net/problem/18108
// 1998년생인 내가 태국에서는 무슨 띠?
//
// 태국은 불기(佛紀)를 쓰기 때문에 서기보다 543년이 빠름. 그래서
// 입력받은 불기 연도에서 543을 빼면 서기 연도가 됨.

function solve(lines) {
  const year = Number(lines[0].trim());
  return String(year - 543);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
