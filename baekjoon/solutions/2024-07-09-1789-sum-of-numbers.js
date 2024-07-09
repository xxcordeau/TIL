// https://www.acmicpc.net/problem/1789
// 수들의 합
//
// 서로 다른 자연수를 최대한 많이 써서 합이 S가 되게 하려면, 1부터
// 차례로 더해나가는 게 제일 유리하다. 1+2+...+k가 S를 넘지 않는
// 가장 큰 k를 구하면 그게 답의 개수.

function solve(lines) {
  const s = Number(lines[0].trim());
  let sum = 0;
  let count = 0;

  while (sum + count + 1 <= s) {
    count++;
    sum += count;
  }

  return String(count);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
