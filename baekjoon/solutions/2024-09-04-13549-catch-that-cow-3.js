// https://www.acmicpc.net/problem/13549
// 숨바꼭질 3
//
// 순간이동(×2)은 시간이 0초, 걷기(±1)는 1초가 걸리는 게 포인트다.
// 가중치가 0 또는 1뿐이라 일반 BFS 대신 0-1 BFS(덱)를 쓰면 다익스트라
// 없이도 O(N) 정도로 풀린다. 가중치 0인 이동은 덱 앞에, 가중치 1인
// 이동은 덱 뒤에 넣으면서 처리하면 항상 오름차순으로 뽑히게 된다.

const MAXN = 100000;

function solve(lines) {
  const [n, k] = lines[0].trim().split(' ').map(Number);

  const dist = new Array(MAXN + 1).fill(-1);
  dist[n] = 0;

  // 배열 기반 덱: 가운데에서 시작해서 앞/뒤 인덱스를 늘려가며 사용한다.
  const capacity = MAXN * 6 + 10;
  const deque = new Array(capacity);
  let front = Math.floor(capacity / 2);
  let back = front;
  deque[back++] = n;

  while (front < back) {
    const cur = deque[front++];

    const next0 = cur * 2;
    if (next0 >= 0 && next0 <= MAXN && (dist[next0] === -1 || dist[next0] > dist[cur])) {
      dist[next0] = dist[cur];
      deque[--front] = next0;
    }

    for (const next1 of [cur - 1, cur + 1]) {
      if (next1 >= 0 && next1 <= MAXN && (dist[next1] === -1 || dist[next1] > dist[cur] + 1)) {
        dist[next1] = dist[cur] + 1;
        deque[back++] = next1;
      }
    }
  }

  return String(dist[k]);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
