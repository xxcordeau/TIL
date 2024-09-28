// https://www.acmicpc.net/problem/10172
// 개
//
// 역시 그림 출력 문제. 이번엔 강아지 그림이라 백슬래시랑 따옴표가
// 더 많이 섞여있어서 이스케이프에 좀 더 신경써야 했다.

function solve() {
  const art = [
    '|\\_/|',
    '|q p|   /}',
    '( 0 )"""\\',
    '|"^"    |',
    '||_/=\\\\__|',
  ];
  return art.join('\n');
}

module.exports = solve;

if (require.main === module) {
  console.log(solve());
}
