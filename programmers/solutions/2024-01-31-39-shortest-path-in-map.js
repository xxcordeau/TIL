// https://school.programmers.co.kr/learn/courses/30/lessons/1844
// 게임 맵 최단거리
//
// 전형적인 BFS 최단거리 문제. (0,0)에서 시작해서 상하좌우로 퍼져나가면서
// 방문한 적 없는 "길"인 칸만 큐에 넣고, 각 칸까지의 거리를 누적해서
// 기록. 도착점에 못 가면 거리가 그대로 초기값(못 감)이라 -1 리턴.

function solution(maps) {
  const rows = maps.length;
  const cols = maps[0].length;
  const distance = Array.from({ length: rows }, () => new Array(cols).fill(0));

  const queue = [[0, 0]];
  distance[0][0] = 1;

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length > 0) {
    const [r, c] = queue.shift();

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      if (
        nr >= 0 &&
        nr < rows &&
        nc >= 0 &&
        nc < cols &&
        maps[nr][nc] === 1 &&
        distance[nr][nc] === 0
      ) {
        distance[nr][nc] = distance[r][c] + 1;
        queue.push([nr, nc]);
      }
    }
  }

  const answer = distance[rows - 1][cols - 1];
  return answer === 0 ? -1 : answer;
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(
    solution([
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 0, 1],
      [0, 0, 0, 0, 1],
    ])
  ); // 11
  console.log(
    solution([
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 0, 0],
      [0, 0, 0, 0, 1],
    ])
  ); // -1
}
