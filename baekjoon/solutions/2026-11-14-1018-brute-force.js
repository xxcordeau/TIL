// https://www.acmicpc.net/problem/1018
// 체스판 다시 칠하기
//
// N×M 보드에서 8×8 체스판 패턴으로 잘랐을 때 다시 칠해야 하는 최솟값.
// 왼쪽 위가 W인 경우와 B인 경우를 둘 다 계산해서 최솟값을 취한다.

function solve(lines) {
  const [N, M] = lines[0].trim().split(' ').map(Number);
  const board = [];
  for (let i = 1; i <= N; i++) board.push(lines[i].trim());

  let minCost = Infinity;
  for (let r = 0; r <= N - 8; r++) {
    for (let c = 0; c <= M - 8; c++) {
      let costW = 0;
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          const expected = (i + j) % 2 === 0 ? 'W' : 'B';
          if (board[r+i][c+j] !== expected) costW++;
        }
      }
      minCost = Math.min(minCost, costW, 64 - costW);
    }
  }
  return minCost;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}