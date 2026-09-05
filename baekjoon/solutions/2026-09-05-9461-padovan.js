// https://www.acmicpc.net/problem/9461
// 파도반 수열
//
// P(1)~P(5)까지는 1이고, P(N) = P(N-1) + P(N-5)로 구할 수 있다.
// 숫자가 커지므로 BigInt를 쓰거나 직접 큰 수 처리를 해야 한다.
// N이 최대 100까지라서 미리 테이블을 채워두면 빠르게 처리된다.

function solve(lines) {
  const T = parseInt(lines[0].trim(), 10);
  const dp = new Array(101).fill(BigInt(0));
  dp[1] = BigInt(1);
  dp[2] = BigInt(1);
  dp[3] = BigInt(1);
  dp[4] = BigInt(1);
  dp[5] = BigInt(2);
  for (let i = 6; i <= 100; i++) {
    dp[i] = dp[i - 1] + dp[i - 5];
  }

  const result = [];
  for (let t = 1; t <= T; t++) {
    const n = parseInt(lines[t].trim(), 10);
    result.push(dp[n].toString());
  }
  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
