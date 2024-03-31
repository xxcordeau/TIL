// https://www.acmicpc.net/problem/10250
// ACM 호텔
//
// 손님이 1층부터 아래에서 위로 채워지고 한 라인이 꽉 차면 다음
// 라인으로 넘어가는 규칙이라, N번째 손님의 층수는 (N-1)%H + 1,
// 라인 번호는 (N-1)/H를 내림한 값 + 1로 바로 계산할 수 있다.

function solve(lines) {
  const t = Number(lines[0].trim());
  const result = [];

  for (let i = 1; i <= t; i++) {
    const [h, , n] = lines[i].trim().split(' ').map(Number);
    const floor = ((n - 1) % h) + 1;
    const line = Math.floor((n - 1) / h) + 1;
    result.push(floor * 100 + line);
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
