// https://www.acmicpc.net/problem/10162
// 전자레인지
//
// 5초 단위가 아니면 애초에 불가능. 가능하면 30초 버튼을 최대한 많이
// 쓰고, 남은 시간에서 10초, 마지막에 5초 순으로 그리디하게 채우면
// 버튼 개수가 최소가 된다.

function solve(lines) {
  let t = Number(lines[0].trim());

  if (t % 5 !== 0) {
    return '-1';
  }

  const thirty = Math.floor(t / 30);
  t %= 30;
  const ten = Math.floor(t / 10);
  t %= 10;
  const five = Math.floor(t / 5);

  return `${thirty} ${ten} ${five}`;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
