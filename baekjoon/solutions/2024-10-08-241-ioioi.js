// https://www.acmicpc.net/problem/5525
// IOIOI
//
// 문자열을 앞에서부터 훑으면서 I, O가 번갈아 나오는 구간의 길이를
// 계속 추적한다. 그 길이가 목표 패턴 길이(2N+1) 이상이 될 때마다
// 그 위치에서 패턴이 하나 완성된 것이므로 카운트를 올린다. 매번
// 문자열을 새로 슬라이싱해서 비교하면 느리니까 이렇게 한 번 훑는
// 방식으로 처리했다.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const s = lines[2].trim();
  const target = 2 * n + 1;

  let runLen = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const expected = runLen % 2 === 0 ? 'I' : 'O';
    if (s[i] === expected) {
      runLen++;
    } else if (s[i] === 'I') {
      runLen = 1;
    } else {
      runLen = 0;
    }
    if (runLen >= target) count++;
  }

  return String(count);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
