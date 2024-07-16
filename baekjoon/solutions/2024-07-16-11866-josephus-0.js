// https://www.acmicpc.net/problem/11866
// 요세푸스 문제 0
//
// 1158번이랑 똑같은 문제인데 출력 형식만 살짝 다르다. 큐에 1부터
// N까지 순서대로 넣고, K-1명은 다시 뒤로 보내고 K번째 사람을
// 뽑아서 결과에 담는 걸 큐가 빌 때까지 반복.

function solve(lines) {
  const [n, k] = lines[0].trim().split(' ').map(Number);
  const queue = [];
  for (let i = 1; i <= n; i++) queue.push(i);

  const result = [];
  while (queue.length > 0) {
    for (let i = 0; i < k - 1; i++) {
      queue.push(queue.shift());
    }
    result.push(queue.shift());
  }

  return '<' + result.join(', ') + '>';
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
