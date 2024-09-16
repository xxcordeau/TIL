// https://www.acmicpc.net/problem/1316
// 그룹 단어 체커
//
// 그룹 단어인지 확인하려면 문자가 바뀔 때마다 그 문자를 이미 예전에
// 쓰고 지나간 적이 있는지만 체크하면 된다. 직전 문자와 같으면 그냥
// 넘어가고, 다르면 이미 등장했던 문자 집합에 있는지 검사해서 있으면
// 그룹 단어가 아니다.

function isGroupWord(word) {
  const seen = new Set();
  let prev = null;

  for (const ch of word) {
    if (ch !== prev) {
      if (seen.has(ch)) return false;
      seen.add(ch);
    }
    prev = ch;
  }

  return true;
}

function solve(lines) {
  const n = Number(lines[0].trim());
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (isGroupWord(lines[i].trim())) count++;
  }

  return String(count);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
