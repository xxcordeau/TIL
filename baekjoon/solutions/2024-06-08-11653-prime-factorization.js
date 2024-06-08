// https://www.acmicpc.net/problem/11653
// 소인수분해
//
// N을 2부터 차례로 나눠보면서 나눠지면 그 수를 출력하고 N을 나눈
// 몫으로 갱신, 안 나눠지면 다음 수로 넘어가는 방식. 이렇게 하면
// 작은 소인수부터 순서대로 출력되고, sqrt(N)까지만 봐도 남은 N이
// 1보다 크면 그 자체가 소인수라 마지막에 따로 처리해줌.

function solve(lines) {
  let n = Number(lines[0].trim());
  const result = [];

  for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
      result.push(i);
      n /= i;
    }
  }
  if (n > 1) result.push(n);

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
