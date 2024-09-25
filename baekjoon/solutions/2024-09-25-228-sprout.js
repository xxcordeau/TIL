// https://www.acmicpc.net/problem/25083
// 새싹
//
// 입력도 없고 로직도 없다. 그냥 예제에 나온 새싹 그림을 그대로 출력하면
// 끝나는 문제라서, 배열에 한 줄씩 담아뒀다가 join으로 출력했다.
// 백슬래시나 따옴표가 들어간 줄은 이스케이프만 조심하면 된다.

function solve() {
  const art = [
    "         ,r'\"7",
    "r`-_   ,'  ,/",
    " \\. \". L_r'",
    "   `~/",
    "      |",
    "      |",
  ];
  return art.join('\n');
}

module.exports = solve;

if (require.main === module) {
  console.log(solve());
}
