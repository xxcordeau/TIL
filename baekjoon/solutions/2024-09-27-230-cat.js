// https://www.acmicpc.net/problem/10171
// 고양이
//
// 이것도 출력 문제. 예제로 주어진 고양이 그림을 그대로 찍으면 된다.

function solve() {
  const art = [
    '\\    /\\',
    ")  ( ')",
    '(  /  )',
    '\\(__)|',
  ];
  return art.join('\n');
}

module.exports = solve;

if (require.main === module) {
  console.log(solve());
}
