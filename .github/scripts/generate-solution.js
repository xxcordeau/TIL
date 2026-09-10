const fs = require('fs');
const path = require('path');

// 앞으로 풀 문제 목록 (번호, 제목, 태그, 풀이 코드)
const problems = [
  {
    num: 2609,
    title: '최대공약수와 최소공배수',
    tag: 'math',
    code: `// https://www.acmicpc.net/problem/2609
// 최대공약수와 최소공배수
//
// 유클리드 호제법으로 GCD를 구하고, LCM은 a*b/GCD로 계산한다.
// 재귀로 간단하게 구현할 수 있다.

function solve(lines) {
  const [a, b] = lines[0].trim().split(' ').map(Number);
  const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
  const g = gcd(a, b);
  return \`\${g}\\n\${a * b / g}\`;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\\n');
  console.log(solve(input));
}`,
  },
  {
    num: 1978,
    title: '소수 찾기',
    tag: 'number-theory',
    code: `// https://www.acmicpc.net/problem/1978
// 소수 찾기
//
// 주어진 수들 중 소수의 개수를 세는 문제.
// 각 수에 대해 2부터 sqrt(n)까지 나눠보면서 소수 판별한다.
// N이 최대 100이라 단순 판별로도 충분히 빠르다.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const nums = lines[1].trim().split(' ').map(Number);

  const isPrime = (x) => {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; i++) {
      if (x % i === 0) return false;
    }
    return true;
  };

  return nums.filter(isPrime).length;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\\n');
  console.log(solve(input));
}`,
  },
  {
    num: 1654,
    title: '랜선 자르기',
    tag: 'binary-search',
    code: `// https://www.acmicpc.net/problem/1654
// 랜선 자르기
//
// 이진 탐색으로 최대 길이를 찾는 문제.
// mid 길이로 잘랐을 때 N개 이상 나오면 더 길게, 아니면 더 짧게.
// BigInt 없이도 되는데 곱셈 시 오버플로우 주의.

function solve(lines) {
  const [K, N] = lines[0].trim().split(' ').map(Number);
  const cables = [];
  for (let i = 1; i <= K; i++) cables.push(parseInt(lines[i].trim(), 10));

  let lo = 1;
  let hi = Math.max(...cables);

  while (lo < hi) {
    const mid = Math.floor((lo + hi + 1) / 2);
    const count = cables.reduce((s, c) => s + Math.floor(c / mid), 0);
    if (count >= N) lo = mid;
    else hi = mid - 1;
  }

  return lo;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\\n');
  console.log(solve(input));
}`,
  },
  {
    num: 2110,
    title: '공유기 설치',
    tag: 'binary-search',
    code: `// https://www.acmicpc.net/problem/2110
// 공유기 설치
//
// 공유기 간 최소 거리의 최댓값을 이진 탐색으로 찾는다.
// mid 거리 이상 떨어지도록 공유기를 설치했을 때 C개 이상 설치 가능하면
// 더 큰 거리를 시도하고, 아니면 줄인다.

function solve(lines) {
  const [N, C] = lines[0].trim().split(' ').map(Number);
  const houses = [];
  for (let i = 1; i <= N; i++) houses.push(parseInt(lines[i].trim(), 10));
  houses.sort((a, b) => a - b);

  let lo = 1;
  let hi = houses[N - 1] - houses[0];

  while (lo < hi) {
    const mid = Math.floor((lo + hi + 1) / 2);
    let count = 1;
    let last = houses[0];
    for (let i = 1; i < N; i++) {
      if (houses[i] - last >= mid) {
        count++;
        last = houses[i];
      }
    }
    if (count >= C) lo = mid;
    else hi = mid - 1;
  }

  return lo;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\\n');
  console.log(solve(input));
}`,
  },
  {
    num: 1991,
    title: '트리 순회',
    tag: 'tree',
    code: `// https://www.acmicpc.net/problem/1991
// 트리 순회
//
// 전위/중위/후위 순회 결과를 출력하는 문제.
// 입력을 파싱해서 트리를 구성한 다음 각각 재귀로 순회하면 된다.
// '.' 은 자식이 없다는 뜻.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const tree = {};

  for (let i = 1; i <= n; i++) {
    const [node, left, right] = lines[i].trim().split(' ');
    tree[node] = { left: left === '.' ? null : left, right: right === '.' ? null : right };
  }

  const pre = [], mid = [], post = [];

  function traverse(node) {
    if (!node) return;
    pre.push(node);
    traverse(tree[node].left);
    mid.push(node);
    traverse(tree[node].right);
    post.push(node);
  }

  traverse('A');
  return \`\${pre.join('')}\\n\${mid.join('')}\\n\${post.join('')}\`;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\\n');
  console.log(solve(input));
}`,
  },
  {
    num: 11724,
    title: '연결 요소의 개수',
    tag: 'graph-traversal',
    code: `// https://www.acmicpc.net/problem/11724
// 연결 요소의 개수
//
// 방향 없는 그래프에서 연결된 덩어리가 몇 개인지 세는 문제.
// 방문 안 한 노드마다 BFS/DFS를 시작하면 그게 하나의 연결 요소다.

function solve(lines) {
  const [N, M] = lines[0].trim().split(' ').map(Number);
  const graph = Array.from({ length: N + 1 }, () => []);

  for (let i = 1; i <= M; i++) {
    const [u, v] = lines[i].trim().split(' ').map(Number);
    graph[u].push(v);
    graph[v].push(u);
  }

  const visited = new Array(N + 1).fill(false);
  let count = 0;

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      count++;
      const queue = [i];
      visited[i] = true;
      while (queue.length > 0) {
        const cur = queue.shift();
        for (const next of graph[cur]) {
          if (!visited[next]) {
            visited[next] = true;
            queue.push(next);
          }
        }
      }
    }
  }

  return count;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\\n');
  console.log(solve(input));
}`,
  },
  {
    num: 1197,
    title: '최소 스패닝 트리',
    tag: 'mst',
    code: `// https://www.acmicpc.net/problem/1197
// 최소 스패닝 트리
//
// 크루스칼 알고리즘으로 MST를 구한다.
// 간선을 가중치 기준으로 정렬한 뒤, Union-Find로 사이클 없이 연결한다.

function solve(lines) {
  const [V, E] = lines[0].trim().split(' ').map(Number);
  const edges = [];
  for (let i = 1; i <= E; i++) {
    const [a, b, c] = lines[i].trim().split(' ').map(Number);
    edges.push([c, a, b]);
  }
  edges.sort((a, b) => a[0] - b[0]);

  const parent = Array.from({ length: V + 1 }, (_, i) => i);
  const find = (x) => parent[x] === x ? x : (parent[x] = find(parent[x]));
  const union = (x, y) => { parent[find(x)] = find(y); };

  let total = 0;
  for (const [w, a, b] of edges) {
    if (find(a) !== find(b)) {
      union(a, b);
      total += w;
    }
  }

  return total;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\\n');
  console.log(solve(input));
}`,
  },
  {
    num: 1916,
    title: '최소비용 구하기',
    tag: 'dijkstra',
    code: `// https://www.acmicpc.net/problem/1916
// 최소비용 구하기
//
// 다익스트라 알고리즘으로 출발 도시에서 도착 도시까지의 최소 비용을 구한다.
// 우선순위 큐 대신 배열 기반으로 구현했다. N이 최대 1000이라 O(N^2)도 통과된다.

function solve(lines) {
  const N = parseInt(lines[0].trim(), 10);
  const M = parseInt(lines[1].trim(), 10);
  const graph = Array.from({ length: N + 1 }, () => []);

  for (let i = 2; i < 2 + M; i++) {
    const [u, v, w] = lines[i].trim().split(' ').map(Number);
    graph[u].push([v, w]);
  }

  const [start, end] = lines[2 + M].trim().split(' ').map(Number);
  const INF = Infinity;
  const dist = new Array(N + 1).fill(INF);
  const visited = new Array(N + 1).fill(false);
  dist[start] = 0;

  for (let i = 0; i < N; i++) {
    let u = -1;
    for (let j = 1; j <= N; j++) {
      if (!visited[j] && (u === -1 || dist[j] < dist[u])) u = j;
    }
    if (u === -1 || dist[u] === INF) break;
    visited[u] = true;
    for (const [v, w] of graph[u]) {
      if (dist[u] + w < dist[v]) dist[v] = dist[u] + w;
    }
  }

  return dist[end];
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\\n');
  console.log(solve(input));
}`,
  },
  {
    num: 11404,
    title: '플로이드',
    tag: 'floyd-warshall',
    code: `// https://www.acmicpc.net/problem/11404
// 플로이드
//
// 모든 도시 쌍 간의 최솟값을 플로이드-워셜로 구한다.
// 3중 루프로 경유지 k를 거치는 경우를 전부 확인한다.
// 같은 출발/도착 도시 간 비용은 0으로 처리.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const m = parseInt(lines[1].trim(), 10);
  const INF = 1e9;
  const dist = Array.from({ length: n + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (__, j) => (i === j ? 0 : INF))
  );

  for (let i = 2; i < 2 + m; i++) {
    const [a, b, c] = lines[i].trim().split(' ').map(Number);
    dist[a][b] = Math.min(dist[a][b], c);
  }

  for (let k = 1; k <= n; k++)
    for (let i = 1; i <= n; i++)
      for (let j = 1; j <= n; j++)
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);

  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(dist[i].slice(1).map(v => v === INF ? 0 : v).join(' '));
  }
  return result.join('\\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\\n');
  console.log(solve(input));
}`,
  },
  {
    num: 1715,
    title: '카드 정렬하기',
    tag: 'greedy',
    code: `// https://www.acmicpc.net/problem/1715
// 카드 정렬하기
//
// 매번 가장 작은 두 묶음을 합치면 최솟값이 된다. 허프만 코딩과 같은 원리.
// 최소 힙으로 구현하면 효율적이다. JS 내장 힙이 없어서 직접 구현.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const heap = [];

  const push = (v) => {
    heap.push(v);
    let i = heap.length - 1;
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (heap[p] > heap[i]) { [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; }
      else break;
    }
  };
  const pop = () => {
    if (heap.length === 1) return heap.pop();
    const top = heap[0];
    heap[0] = heap.pop();
    let i = 0;
    while (true) {
      let s = i, l = 2*i+1, r = 2*i+2;
      if (l < heap.length && heap[l] < heap[s]) s = l;
      if (r < heap.length && heap[r] < heap[s]) s = r;
      if (s === i) break;
      [heap[i], heap[s]] = [heap[s], heap[i]]; i = s;
    }
    return top;
  };

  for (let i = 1; i <= n; i++) push(parseInt(lines[i].trim(), 10));

  let total = 0;
  while (heap.length > 1) {
    const a = pop(), b = pop();
    total += a + b;
    push(a + b);
  }

  return total;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\\n');
  console.log(solve(input));
}`,
  },
  {
    num: 1780,
    title: '종이의 개수',
    tag: 'divide-conquer',
    code: `// https://www.acmicpc.net/problem/1780
// 종이의 개수
//
// 분할정복 문제. 현재 범위가 전부 같은 숫자면 그 숫자 카운트를 올리고,
// 아니면 9등분해서 재귀적으로 확인한다.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const paper = [];
  for (let i = 1; i <= n; i++) {
    paper.push(lines[i].trim().split(/\\s+/).map(Number));
  }

  const cnt = { '-1': 0, '0': 0, '1': 0 };

  function check(r, c, size) {
    const val = paper[r][c];
    let uniform = true;
    outer: for (let i = r; i < r + size; i++) {
      for (let j = c; j < c + size; j++) {
        if (paper[i][j] !== val) { uniform = false; break outer; }
      }
    }
    if (uniform) { cnt[String(val)]++; return; }
    const s = size / 3;
    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++)
        check(r + i * s, c + j * s, s);
  }

  check(0, 0, n);
  return \`\${cnt['-1']}\\n\${cnt['0']}\\n\${cnt['1']}\`;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\\n');
  console.log(solve(input));
}`,
  },
  {
    num: 9095,
    title: '1, 2, 3 더하기',
    tag: 'dp',
    code: `// https://www.acmicpc.net/problem/9095
// 1, 2, 3 더하기
//
// n을 1, 2, 3의 합으로 나타내는 경우의 수를 구하는 DP 문제.
// dp[n] = dp[n-1] + dp[n-2] + dp[n-3] 점화식이 성립한다.
// 초기값: dp[1]=1, dp[2]=2, dp[3]=4

function solve(lines) {
  const T = parseInt(lines[0].trim(), 10);
  const dp = [0, 1, 2, 4];
  for (let i = 4; i <= 10; i++) dp[i] = dp[i-1] + dp[i-2] + dp[i-3];

  const result = [];
  for (let t = 1; t <= T; t++) {
    result.push(dp[parseInt(lines[t].trim(), 10)]);
  }
  return result.join('\\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\\n');
  console.log(solve(input));
}`,
  },
  {
    num: 2156,
    title: '포도주 시식',
    tag: 'dp',
    code: `// https://www.acmicpc.net/problem/2156
// 포도주 시식
//
// 연속 3잔을 마실 수 없다는 조건이 있는 DP 문제.
// dp[i] = i번째 잔까지 마실 수 있는 최대량.
// dp[i] = max(dp[i-1], dp[i-2]+wine[i], dp[i-3]+wine[i-1]+wine[i])

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const wine = [0];
  for (let i = 1; i <= n; i++) wine.push(parseInt(lines[i].trim(), 10));

  if (n === 1) return wine[1];
  if (n === 2) return wine[1] + wine[2];

  const dp = new Array(n + 1).fill(0);
  dp[1] = wine[1];
  dp[2] = wine[1] + wine[2];
  for (let i = 3; i <= n; i++) {
    dp[i] = Math.max(dp[i-1], dp[i-2] + wine[i], dp[i-3] + wine[i-1] + wine[i]);
  }
  return dp[n];
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\\n');
  console.log(solve(input));
}`,
  },
  {
    num: 12865,
    title: '평범한 배낭',
    tag: 'dp',
    code: `// https://www.acmicpc.net/problem/12865
// 평범한 배낭
//
// 0-1 냅색 DP 문제. dp[j]를 무게 j 이하로 담을 수 있는 최대 가치로 정의한다.
// 아이템을 하나씩 보면서 역순으로 갱신하면 같은 아이템을 두 번 쓰는 걸 방지할 수 있다.

function solve(lines) {
  const [N, K] = lines[0].trim().split(' ').map(Number);
  const items = [];
  for (let i = 1; i <= N; i++) {
    const [w, v] = lines[i].trim().split(' ').map(Number);
    items.push([w, v]);
  }

  const dp = new Array(K + 1).fill(0);
  for (const [w, v] of items) {
    for (let j = K; j >= w; j--) {
      dp[j] = Math.max(dp[j], dp[j - w] + v);
    }
  }

  return dp[K];
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\\n');
  console.log(solve(input));
}`,
  },
  {
    num: 1965,
    title: '상자넣기',
    tag: 'dp',
    code: `// https://www.acmicpc.net/problem/1965
// 상자넣기
//
// 가장 긴 증가하는 부분 수열(LIS) 문제와 동일하다.
// dp[i]를 i번째 상자로 끝나는 최장 수열 길이로 정의하고
// 앞에서부터 확인하면서 더 작은 상자가 있으면 갱신한다.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const boxes = lines[1].trim().split(' ').map(Number);
  const dp = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (boxes[j] < boxes[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }

  return Math.max(...dp);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\\n');
  console.log(solve(input));
}`,
  },
  {
    num: 2504,
    title: '괄호의 값',
    tag: 'stack',
    code: `// https://www.acmicpc.net/problem/2504
// 괄호의 값
//
// 스택으로 괄호 값을 계산하는 문제.
// ( 는 현재 값에 2를 곱하고, [ 는 3을 곱한다.
// ) 나 ] 가 나오면 대응되는 여는 괄호까지 합산하고 나누거나 더한다.

function solve(lines) {
  const s = lines[0].trim();
  const stack = [];
  let cur = 0;
  let result = 0;

  for (const ch of s) {
    if (ch === '(') {
      stack.push(cur);
      cur = 0;
    } else if (ch === '[') {
      stack.push(cur);
      cur = 0;
    } else if (ch === ')') {
      if (stack.length === 0) return 0;
      const prev = stack.pop();
      cur = prev + (cur === 0 ? 2 : cur * 2);
    } else if (ch === ']') {
      if (stack.length === 0) return 0;
      const prev = stack.pop();
      cur = prev + (cur === 0 ? 3 : cur * 3);
    }
  }

  return stack.length === 0 ? cur : 0;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\\n');
  console.log(solve(input));
}`,
  },
  {
    num: 1874,
    title: '스택 수열',
    tag: 'stack',
    code: `// https://www.acmicpc.net/problem/1874
// 스택 수열
//
// 1부터 n까지 순서대로 push하면서 목표 수열을 만들 수 있는지 확인한다.
// 스택 top이 목표값과 같으면 pop(-)하고, 아직 안 넣은 수가 있으면 push(+)한다.
// 불가능한 경우 NO 출력.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const seq = [];
  for (let i = 1; i <= n; i++) seq.push(parseInt(lines[i].trim(), 10));

  const stack = [];
  const ops = [];
  let next = 1;
  let possible = true;

  for (const target of seq) {
    while (next <= target) {
      stack.push(next++);
      ops.push('+');
    }
    if (stack[stack.length - 1] === target) {
      stack.pop();
      ops.push('-');
    } else {
      possible = false;
      break;
    }
  }

  return possible ? ops.join('\\n') : 'NO';
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\\n');
  console.log(solve(input));
}`,
  },
  {
    num: 2164,
    title: '카드2',
    tag: 'queue',
    code: `// https://www.acmicpc.net/problem/2164
// 카드2
//
// 맨 위 카드를 버리고, 다음 카드를 맨 아래로 보내는 과정을 반복한다.
// 큐로 시뮬레이션하면 된다. 카드가 1장 남을 때까지 반복.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const queue = [];
  for (let i = 1; i <= n; i++) queue.push(i);

  while (queue.length > 1) {
    queue.shift();
    queue.push(queue.shift());
  }

  return queue[0];
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\\n');
  console.log(solve(input));
}`,
  },
  {
    num: 11650,
    title: '좌표 정렬하기',
    tag: 'sorting',
    code: `// https://www.acmicpc.net/problem/11650
// 좌표 정렬하기
//
// x 좌표 기준으로 정렬하고, x가 같으면 y 기준으로 정렬한다.
// JS sort 기본 동작이 문자열 비교라서 비교 함수를 꼭 넣어야 한다.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const points = [];
  for (let i = 1; i <= n; i++) {
    const [x, y] = lines[i].trim().split(' ').map(Number);
    points.push([x, y]);
  }

  points.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);
  return points.map(([x, y]) => \`\${x} \${y}\`).join('\\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\\n');
  console.log(solve(input));
}`,
  },
  {
    num: 10989,
    title: '수 정렬하기 3',
    tag: 'sorting',
    code: `// https://www.acmicpc.net/problem/10989
// 수 정렬하기 3
//
// 수가 최대 10000이라서 카운팅 정렬이 적합하다.
// 각 숫자의 빈도를 세고, 1부터 10000까지 순서대로 빈도만큼 출력.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const cnt = new Array(10001).fill(0);

  for (let i = 1; i <= n; i++) {
    cnt[parseInt(lines[i].trim(), 10)]++;
  }

  const result = [];
  for (let i = 1; i <= 10000; i++) {
    for (let j = 0; j < cnt[i]; j++) result.push(i);
  }

  return result.join('\\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\\n');
  console.log(solve(input));
}`,
  },
  {
    num: 2075,
    title: 'N번째 큰 수',
    tag: 'heap',
    code: `// https://www.acmicpc.net/problem/2075
// N번째 큰 수
//
// N*N 행렬에서 N번째로 큰 수를 찾는 문제.
// 크기 N의 최소 힙을 유지하면서 모든 원소를 보면 힙에는 상위 N개가 남는다.
// 힙의 루트가 N번째로 큰 수.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const heap = [];

  const push = (v) => {
    heap.push(v);
    let i = heap.length - 1;
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (heap[p] > heap[i]) { [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; }
      else break;
    }
  };
  const pop = () => {
    if (heap.length === 1) return heap.pop();
    const top = heap[0];
    heap[0] = heap.pop();
    let i = 0;
    while (true) {
      let s = i, l = 2*i+1, r = 2*i+2;
      if (l < heap.length && heap[l] < heap[s]) s = l;
      if (r < heap.length && heap[r] < heap[s]) s = r;
      if (s === i) break;
      [heap[i], heap[s]] = [heap[s], heap[i]]; i = s;
    }
    return top;
  };

  for (let i = 1; i <= n; i++) {
    const row = lines[i].trim().split(' ').map(Number);
    for (const v of row) {
      push(v);
      if (heap.length > n) pop();
    }
  }

  return heap[0];
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\\n');
  console.log(solve(input));
}`,
  },
];

// 오늘 날짜 기준으로 몇 번째 문제인지 계산
const startDate = new Date('2026-09-11T00:00:00+09:00');
const today = new Date();
const kstToday = new Date(today.toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));
const diffDays = Math.floor((kstToday - startDate) / (1000 * 60 * 60 * 24));

if (diffDays < 0 || diffDays >= problems.length) {
  console.log('오늘은 문제가 없습니다.');
  process.exit(0);
}

const problem = problems[diffDays];
const dateStr = kstToday.toISOString().slice(0, 10);
const fileName = `${dateStr}-${problem.num}-${problem.tag}.js`;
const filePath = path.join('baekjoon', 'solutions', fileName);
const commitMsg = `백준 ${problem.num}번 ${problem.title} 풀이 추가`;

fs.writeFileSync(filePath, problem.code, 'utf-8');
fs.writeFileSync('.github/scripts/.last-commit-msg', commitMsg, 'utf-8');

console.log(`생성: ${fileName}`);
