// https://www.acmicpc.net/problem/11399
// ATM
//
// 인출 시간이 짧은 사람부터 세우는 게 전체 대기시간 합을 최소로
// 만든다는 그리디. 오름차순 정렬한 다음 누적합을 계속 더해가면 그게
// 곧 각자의 "완료 시각"이고, 그 완료 시각들의 총합이 답.

function solve(lines) {
  const n = Number(lines[0].trim());
  const times = lines[1].trim().split(' ').map(Number).sort((a, b) => a - b);

  let cumulative = 0;
  let total = 0;

  for (const t of times) {
    cumulative += t;
    total += cumulative;
  }

  return String(total);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
