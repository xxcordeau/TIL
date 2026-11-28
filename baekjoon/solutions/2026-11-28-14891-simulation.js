// https://www.acmicpc.net/problem/14891
// 톱니바퀴
//
// 4개의 톱니바퀴가 서로 맞닿아서 회전하는 시뮬레이션.
// 회전할 때 인접 바퀴의 맞닿는 부분이 같으면 돌지 않고, 다르면 반대 방향으로 돈다.

function solve(lines) {
  const wheels = [];
  for (let i = 0; i < 4; i++) wheels.push(lines[i].trim().split('').map(Number));
  const K = parseInt(lines[4].trim(), 10);

  for (let k = 0; k < K; k++) {
    const [num, dir] = lines[5+k].trim().split(' ').map(Number);
    const idx = num - 1;
    const dirs = [0,0,0,0];
    dirs[idx] = dir;
    for (let i = idx-1; i >= 0; i--) {
      if (wheels[i][2] !== wheels[i+1][6]) dirs[i] = -dirs[i+1];
      else break;
    }
    for (let i = idx+1; i < 4; i++) {
      if (wheels[i][6] !== wheels[i-1][2]) dirs[i] = -dirs[i-1];
      else break;
    }
    for (let i = 0; i < 4; i++) {
      if (dirs[i] === 1) wheels[i].unshift(wheels[i].pop());
      else if (dirs[i] === -1) wheels[i].push(wheels[i].shift());
    }
  }

  return wheels.reduce((s, w, i) => s + w[0] * (1 << i), 0);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}