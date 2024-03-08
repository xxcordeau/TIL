// https://www.acmicpc.net/problem/2525
// 오븐 시계
//
// 전부 분 단위로 합친 다음 24시간(1440분)으로 나눈 나머지를 구해서
// 다시 시/분으로 쪼개면 자정 넘어가는 것도 자동으로 처리됨.

function solve(lines) {
  const [h, m] = lines[0].trim().split(' ').map(Number);
  const c = Number(lines[1].trim());

  const totalMinutes = (h * 60 + m + c) % (24 * 60);
  const newH = Math.floor(totalMinutes / 60);
  const newM = totalMinutes % 60;

  return `${newH} ${newM}`;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
