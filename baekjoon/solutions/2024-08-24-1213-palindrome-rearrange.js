// https://www.acmicpc.net/problem/1213
// 팰린드롬 만들기
//
// 팰린드롬이 되려면 홀수 번 나온 알파벳이 최대 한 개여야 한다.
// 두 개 이상이면 애초에 만들 수 없으니 NI 출력.
// 만들 수 있으면 각 알파벳을 절반씩 앞쪽에 배치하고(사전순으로 정렬),
// 홀수 개인 알파벳이 있으면 그건 정중앙에 하나만 두고,
// 뒷부분은 앞부분을 뒤집어서 붙이면 된다.

function solve(lines) {
  const s = lines[0].trim();
  const count = new Array(26).fill(0);
  for (const ch of s) count[ch.charCodeAt(0) - 65]++;

  let oddChar = -1;
  let oddCnt = 0;
  for (let i = 0; i < 26; i++) {
    if (count[i] % 2 === 1) {
      oddCnt++;
      oddChar = i;
    }
  }

  if (oddCnt > 1) return 'I\'m Sorry Hansoo';

  let half = '';
  for (let i = 0; i < 26; i++) {
    half += String.fromCharCode(65 + i).repeat(Math.floor(count[i] / 2));
  }

  const middle = oddCnt === 1 ? String.fromCharCode(65 + oddChar) : '';
  const reversedHalf = [...half].reverse().join('');

  return half + middle + reversedHalf;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
