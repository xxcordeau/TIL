// https://www.acmicpc.net/problem/2437
// 저울
//
// 추를 오름차순으로 정렬해서 하나씩 보면서, "지금까지 추들로 만들 수
// 있는 무게는 0부터 sum까지 전부"라는 상태를 유지한다. 다음 추가
// (sum+1)보다 크면 그 sum+1이 못 만드는 최소 무게가 되고, 그렇지
// 않으면 sum에 더해서 범위를 넓혀간다.

function solve(lines) {
  const n = Number(lines[0].trim());
  const weights = lines[1].trim().split(' ').map(Number).sort((a, b) => a - b);

  let sum = 0;

  for (const w of weights) {
    if (w > sum + 1) {
      break;
    }
    sum += w;
  }

  return String(sum + 1);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
