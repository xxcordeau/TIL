// https://www.acmicpc.net/problem/1152
// 단어의 개수
//
// 앞뒤에 공백이 여러 개 붙어 있을 수 있어서 trim부터 하고, 공백
// 기준으로 split한 다음 빈 문자열(연속 공백 때문에 생기는)만
// filter로 걸러내면 정확한 단어 개수가 나옴.

function solve(lines) {
  const words = lines[0].trim().split(/\s+/).filter((w) => w.length > 0);
  return String(words.length);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
