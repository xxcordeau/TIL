// https://www.acmicpc.net/problem/1806
// 부분합
//
// 투 포인터로 푼다. end를 늘려가면서 구간 합을 키우다가 S 이상이 되면
// start를 줄여서 최소 길이를 갱신하고, 다시 합이 S보다 작아지면 end를
// 늘리는 식으로 한 번씩만 왔다갔다 하면 O(N)에 풀린다.

function solve(lines) {
  const [n, s] = lines[0].trim().split(' ').map(Number);
  const arr = lines[1].trim().split(' ').map(Number);

  let start = 0;
  let sum = 0;
  let minLen = Infinity;

  for (let end = 0; end < n; end++) {
    sum += arr[end];
    while (sum >= s) {
      minLen = Math.min(minLen, end - start + 1);
      sum -= arr[start];
      start++;
    }
  }

  return String(minLen === Infinity ? 0 : minLen);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
