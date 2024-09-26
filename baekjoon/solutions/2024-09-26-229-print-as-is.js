// https://www.acmicpc.net/problem/11718
// 그대로 출력하기
//
// 입력이 끝날 때까지 한 줄씩 읽어서 그대로 출력만 하면 되는 문제.
// stdin을 통째로 읽어서 줄바꿈 기준으로 나눈 다음, 파일 끝에 붙는
// 빈 줄 하나만 제거하고 그대로 다시 합쳐서 출력했다.

function solve(lines) {
  const out = lines.slice();
  if (out.length && out[out.length - 1] === '') out.pop();
  return out.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
