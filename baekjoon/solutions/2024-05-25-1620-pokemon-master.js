// https://www.acmicpc.net/problem/1620
// 나는야 포켓몬 마스터 이다솜
//
// 이름->번호, 번호->이름 두 방향 조회가 다 필요해서 Map을 두 개
// 만들어뒀다. 질문이 숫자로만 이루어져 있으면 번호로 보고 이름을
// 찾고, 아니면 이름으로 보고 번호를 찾는 식으로 분기.

function solve(lines) {
  const [n, m] = lines[0].trim().split(' ').map(Number);
  const nameByNumber = new Map();
  const numberByName = new Map();

  for (let i = 1; i <= n; i++) {
    const name = lines[i].trim();
    nameByNumber.set(i, name);
    numberByName.set(name, i);
  }

  const result = [];
  for (let i = 0; i < m; i++) {
    const query = lines[n + 1 + i].trim();
    if (/^\d+$/.test(query)) {
      result.push(nameByNumber.get(Number(query)));
    } else {
      result.push(numberByName.get(query));
    }
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
