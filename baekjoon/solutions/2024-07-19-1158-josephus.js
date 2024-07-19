// https://www.acmicpc.net/problem/1158
// 요세푸스 문제
//
// 1번부터 N번까지 원형으로 앉혀놓고 큐에 순서대로 넣은 다음, 앞에서부터
// K-1명은 다시 뒤로 보내고 K번째 사람은 뽑아서 결과에 담는 걸 큐가 빌
// 때까지 반복하면 요세푸스 순열이 그대로 나온다.

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
