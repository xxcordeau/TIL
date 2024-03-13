// https://www.acmicpc.net/problem/2941
// 크로아티아 알파벳
//
// 여러 글자가 합쳐져서 한 글자 취급되는 패턴들을 길이가 긴 것부터
// (dz= 를 먼저) 문자열 치환해서 하나의 표시 문자로 바꿔버린 다음,
// 남은 문자열 길이를 세면 그게 곧 크로아티아 알파벳 개수가 된다.

function solve(lines) {
  const word = lines[0].trim();

  const patterns = ['dz=', 'c=', 'c-', 'd-', 'lj', 'nj', 's=', 'z='];
  let replaced = word;

  for (const pattern of patterns) {
    replaced = replaced.split(pattern).join('#');
  }

  return String(replaced.length);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
