// https://www.acmicpc.net/problem/17298
// 오큰수
//
// 오른쪽 끝에서부터 왼쪽으로 훑으면서, "지금까지 본 것들 중 아직
// 자신의 오큰수를 못 찾은 후보들"을 감소하는 순서로 스택에 쌓아둔다.
// 현재 값보다 작거나 같은 건 더 이상 누구의 오큰수도 될 수 없으니
// 버리고(pop), 남은 스택의 맨 위가 바로 자신의 오큰수. 이렇게 하면
// 전체를 O(N)에 처리할 수 있다.

function solve(lines) {
  const n = Number(lines[0].trim());
  const arr = lines[1].trim().split(' ').map(Number);

  const answer = new Array(n).fill(-1);
  const stack = [];

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }
    if (stack.length > 0) {
      answer[i] = stack[stack.length - 1];
    }
    stack.push(arr[i]);
  }

  return answer.join(' ');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
