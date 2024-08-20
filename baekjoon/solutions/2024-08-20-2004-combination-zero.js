// https://www.acmicpc.net/problem/2004
// 조합 0의 개수
//
// nCm의 값을 직접 구하면 너무 커지니까, 끝에 붙는 0의 개수는
// 소인수 2와 5의 개수 중 작은 쪽으로 정해진다는 사실을 이용한다.
// n!의 소인수 개수는 n/p + n/p^2 + ... 로 구할 수 있으므로
// nCm = n! / (m! * (n-m)!) 의 소인수 개수는 세 팩토리얼의 소인수 개수를
// 각각 구해서 빼주면 된다.

function countFactor(n, p) {
  let count = 0;
  let div = p;
  while (div <= n) {
    count += Math.floor(n / div);
    div *= p;
  }
  return count;
}

function solve(lines) {
  const [n, m] = lines[0].trim().split(' ').map(Number);

  const count2 = countFactor(n, 2) - countFactor(m, 2) - countFactor(n - m, 2);
  const count5 = countFactor(n, 5) - countFactor(m, 5) - countFactor(n - m, 5);

  return String(Math.min(count2, count5));
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
