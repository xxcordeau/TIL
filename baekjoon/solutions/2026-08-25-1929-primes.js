// https://www.acmicpc.net/problem/1929
// 소수 구하기
//
// 에라토스테네스의 체를 사용해서 M 이상 N 이하의 소수를 전부 출력한다.
// N까지 체를 돌려서 소수 배열을 구한 다음, M부터 N 사이만 필터링하면 된다.
// 직접 나누기를 반복하면 시간 초과가 나서 체 방식이 훨씬 빠르다.

function solve(lines) {
  const [M, N] = lines[0].trim().split(' ').map(Number);
  const sieve = new Array(N + 1).fill(true);
  sieve[0] = false;
  sieve[1] = false;

  for (let i = 2; i * i <= N; i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= N; j += i) {
        sieve[j] = false;
      }
    }
  }

  const result = [];
  for (let i = M; i <= N; i++) {
    if (sieve[i]) result.push(i);
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
