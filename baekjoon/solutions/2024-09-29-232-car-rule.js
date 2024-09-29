// https://www.acmicpc.net/problem/10797
// 10부제
//
// 오늘 날짜 끝자리랑 차량 번호판 끝자리가 같으면 그 차는 운행할 수 없는
// 10부제에 걸린다. 자동차 5대의 끝자리를 받아서 날짜 끝자리랑 같은
// 개수만 세면 되는 아주 단순한 문제.

function solve(lines) {
  const dateDigit = parseInt(lines[0].trim(), 10);
  const plates = lines[1].trim().split(/\s+/).map(Number);
  const violated = plates.filter((p) => p === dateDigit).length;
  return String(violated);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
