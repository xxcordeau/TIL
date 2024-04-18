// https://www.acmicpc.net/problem/9012
// 괄호
//
// 스택 대신 카운터 하나로도 충분하다. 여는 괄호면 +1, 닫는 괄호면 -1,
// 중간에 0 밑으로 내려가면 그 순간 이미 잘못된 문자열이니까 바로
// NO로 판정. 끝까지 다 봤는데 0이면 YES.

function isValid(s) {
  let balance = 0;

  for (const char of s) {
    balance += char === '(' ? 1 : -1;
    if (balance < 0) return false;
  }

  return balance === 0;
}

function solve(lines) {
  const t = Number(lines[0].trim());
  const result = [];

  for (let i = 1; i <= t; i++) {
    result.push(isValid(lines[i].trim()) ? 'YES' : 'NO');
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
