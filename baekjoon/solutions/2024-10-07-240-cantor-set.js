// https://www.acmicpc.net/problem/4779
// 칸토어 집합
//
// 재귀적으로 만들어지는 문자열이라 재귀함수로 그대로 구현하는 게 제일
// 깔끔하다. n단계 문자열은 n-1단계 문자열을 두 번 이어붙이고 그
// 사이에 같은 길이만큼 공백을 채우면 된다. n=0일 때는 그냥 "-" 하나.

function cantor(n) {
  if (n === 0) return '-';
  const part = cantor(n - 1);
  return part + ' '.repeat(part.length) + part;
}

function solve(lines) {
  const out = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed === '') continue;
    out.push(cantor(parseInt(trimmed, 10)));
  }
  return out.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
