// https://www.acmicpc.net/problem/2884
// 알람 시계
//
// 45분 일찍 울리게 하려면 그냥 전체를 분 단위로 바꿔서 45를 빼고
// 음수가 되면 하루(1440분)를 더해준 다음, 다시 시/분으로 나눠주면
// 깔끔하게 처리된다.

function solve(lines) {
  const [h, m] = lines[0].trim().split(' ').map(Number);

  let totalMinutes = h * 60 + m - 45;
  if (totalMinutes < 0) {
    totalMinutes += 24 * 60;
  }

  const newH = Math.floor(totalMinutes / 60);
  const newM = totalMinutes % 60;

  return `${newH} ${newM}`;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
