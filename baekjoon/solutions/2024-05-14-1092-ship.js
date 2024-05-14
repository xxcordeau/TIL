// https://www.acmicpc.net/problem/1092
// 배
//
// 크레인과 박스를 둘 다 내림차순 정렬해두고, 매 라운드마다 가장 큰
// 크레인부터 순서대로 "지금 남은 박스 중 자신이 들 수 있는 가장
// 무거운 박스"를 옮기는 그리디. 한 라운드에 하나도 못 옮기면 남은
// 박스가 모든 크레인보다 무겁다는 뜻이라 -1.

function solve(lines) {
  const n = Number(lines[0].trim());
  const cranes = lines[1].trim().split(' ').map(Number).sort((a, b) => b - a);
  const m = Number(lines[2].trim());
  let boxes = lines[3].trim().split(' ').map(Number).sort((a, b) => b - a);

  const maxCrane = cranes[0];
  if (boxes.some((box) => box > maxCrane)) {
    return '-1';
  }

  let rounds = 0;

  while (boxes.length > 0) {
    rounds++;

    // 이번 라운드에 각 크레인이 옮길 박스를 정함(무거운 크레인부터,
    // 자신이 들 수 있는 것 중 가장 무거운 박스를 순서대로 선택)
    const used = new Array(boxes.length).fill(false);
    let bi = 0;
    for (const capacity of cranes) {
      while (bi < boxes.length && (used[bi] || boxes[bi] > capacity)) {
        bi++;
      }
      if (bi < boxes.length) {
        used[bi] = true;
      }
    }

    boxes = boxes.filter((_, i) => !used[i]);
  }

  return String(rounds);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
