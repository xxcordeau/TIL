// https://www.acmicpc.net/problem/20920
// 영단어 암기는 어려워
//
// 길이가 M 미만인 단어는 애초에 외울 필요가 없으니 걸러낸다. 남은
// 단어들을 (등장 횟수, 길이, 사전순)이 큰 순서로 정렬해서 출력하면
// 되는데, 등장 횟수를 세려면 Map을 쓰고, 정렬 기준은 문제에서 시키는
// 그대로 비교 함수에 넣으면 된다.

function solve(lines) {
  const [n, m] = lines[0].trim().split(' ').map(Number);
  const words = [];
  for (let i = 1; i <= n; i++) words.push(lines[i].trim());

  const filtered = words.filter((w) => w.length >= m);
  const count = new Map();
  for (const w of filtered) {
    count.set(w, (count.get(w) || 0) + 1);
  }

  const unique = [...new Set(filtered)];

  unique.sort((a, b) => {
    const ca = count.get(a);
    const cb = count.get(b);
    if (ca !== cb) return cb - ca;
    if (a.length !== b.length) return b.length - a.length;
    return a < b ? -1 : a > b ? 1 : 0;
  });

  return unique.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
