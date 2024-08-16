// https://www.acmicpc.net/problem/1094
// 막대기
//
// 처음엔 길이 64인 막대기 하나뿐이고, 필요할 때마다 절반으로 잘라 쓴다.
// N을 이진수로 나타냈을 때 켜진 비트 하나하나가 "그 길이만큼 잘라서 쓴 조각"
// 이므로, 결국 자른 횟수는 64를 N보다 큰 조각들로 반씩 쪼개나가는 과정과 같다.
// 큰 조각부터 보면서 N에 그 조각이 필요한지(비트가 켜져 있는지) 확인하고,
// 필요 없으면 반으로 쪼개서 컷 수를 하나 늘리는 식으로 시뮬레이션한다.

function solve(lines) {
  const n = Number(lines[0].trim());

  let length = 64;
  let cuts = 0;
  let remaining = n;

  while (length > remaining) {
    length /= 2;
    cuts++;
  }
  remaining -= length;

  while (remaining > 0) {
    while (length > remaining) {
      length /= 2;
      cuts++;
    }
    remaining -= length;
  }

  return String(cuts);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
