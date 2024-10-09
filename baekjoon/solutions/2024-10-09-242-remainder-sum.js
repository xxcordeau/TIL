// https://www.acmicpc.net/problem/10986
// 나머지 합
//
// 누적합을 M으로 나눈 나머지별로 몇 번 등장했는지 세어두면, 같은
// 나머지를 가진 두 접두사 구간 사이의 부분합은 항상 M으로 나누어
// 떨어진다. 그래서 나머지별 등장 횟수 c에 대해 c개 중 2개를 뽑는
// 조합 수를 다 더하면 답이 나온다. 빈 접두사(합 0)도 나머지 0으로
// 한 번 세줘야 한다.

function solve(lines) {
  const [, m] = lines[0].trim().split(/\s+/).map(Number);
  const nums = lines[1].trim().split(/\s+/).map(Number);

  const remCount = new Array(m).fill(0);
  remCount[0] = 1;

  let prefix = 0;
  for (const x of nums) {
    prefix = ((prefix + x) % m + m) % m;
    remCount[prefix]++;
  }

  let answer = 0n;
  for (const c of remCount) {
    answer += (BigInt(c) * BigInt(c - 1)) / 2n;
  }

  return answer.toString();
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
