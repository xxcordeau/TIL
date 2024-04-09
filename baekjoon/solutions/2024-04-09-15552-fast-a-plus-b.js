// https://www.acmicpc.net/problem/15552
// 빠른 A+B
//
// 로직은 A+B - 4랑 완전히 같은데, 입력량이 커서 실제 채점 환경에서는
// 빠른 입출력이 필요하다는 의도의 문제. 여기서는 stdin 전체를 한 번에
// 읽어서 처리하는 식으로 그 취지를 살렸다.

function solve(lines) {
  const t = Number(lines[0].trim());
  const result = [];

  for (let i = 1; i <= t; i++) {
    const [a, b] = lines[i].trim().split(' ').map(Number);
    result.push(a + b);
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
