// https://www.acmicpc.net/problem/3190
// 뱀
//
// 뱀이 이동하는 시뮬레이션. 사과를 먹으면 길이가 늘고, 못 먹으면 꼬리가 사라진다.
// 벽이나 자기 몸에 닿으면 종료. 방향 전환 명령을 큐로 관리한다.

function solve(lines) {
  const N = parseInt(lines[0].trim(), 10);
  const K = parseInt(lines[1].trim(), 10);
  const apples = new Set();
  for (let i = 2; i < 2+K; i++) {
    const [r, c] = lines[i].trim().split(' ').map(Number);
    apples.add(`${r},${c}`);
  }
  const L = parseInt(lines[2+K].trim(), 10);
  const turns = [];
  for (let i = 3+K; i < 3+K+L; i++) {
    const [t, d] = lines[i].trim().split(' ');
    turns.push([parseInt(t,10), d]);
  }

  const dr = [0,1,0,-1], dc = [1,0,-1,0];
  let dir = 0, r = 1, c = 1, time = 0;
  const body = [[r,c]];
  const bodySet = new Set([`${r},${c}`]);
  let turnIdx = 0;

  while (true) {
    time++;
    r += dr[dir]; c += dc[dir];
    if (r < 1 || r > N || c < 1 || c > N || bodySet.has(`${r},${c}`)) break;
    body.push([r,c]); bodySet.add(`${r},${c}`);
    if (apples.has(`${r},${c}`)) apples.delete(`${r},${c}`);
    else { const [tr,tc] = body.shift(); bodySet.delete(`${tr},${tc}`); }
    if (turnIdx < turns.length && turns[turnIdx][0] === time) {
      dir = turns[turnIdx][1] === 'L' ? (dir+3)%4 : (dir+1)%4;
      turnIdx++;
    }
  }
  return time;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}