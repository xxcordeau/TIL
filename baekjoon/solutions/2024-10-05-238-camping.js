// https://www.acmicpc.net/problem/4796
// 캠핑
//
// P일 주기마다 L일만 캠핑장을 쓸 수 있다는 조건. V일의 휴가 중 몇 번의
// 완전한 주기가 도는지 구해서 그만큼은 L일씩 다 쓰고, 남은 날은 L일을
// 넘지 않는 선에서 그대로 쓰면 된다.

function solve(lines) {
  const out = [];
  let caseNum = 1;

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed === '') continue;

    const [l, p, v] = trimmed.split(/\s+/).map(Number);
    if (l === 0 && p === 0 && v === 0) break;

    const fullCycles = Math.floor(v / p);
    const remainder = v % p;
    const days = fullCycles * l + Math.min(l, remainder);

    out.push(`Case ${caseNum}: ${days}`);
    caseNum++;
  }

  return out.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
