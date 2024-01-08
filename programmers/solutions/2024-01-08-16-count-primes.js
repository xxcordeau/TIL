// https://school.programmers.co.kr/learn/courses/30/lessons/12921
// 소수 찾기
//
// 에라토스테네스의 체로 1부터 n까지 소수 여부를 미리 다 걸러내고
// true인 개수만 세면 됨. n이 백만까지 갈 수 있어서 매번 나누기로
// 판별하면 느리니까 체 방식으로 처리.

function solution(n) {
  const isComposite = new Array(n + 1).fill(false);
  let count = 0;

  for (let i = 2; i <= n; i++) {
    if (!isComposite[i]) {
      count++;
      for (let j = i * 2; j <= n; j += i) {
        isComposite[j] = true;
      }
    }
  }

  return count;
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution(10)); // 4
  console.log(solution(5)); // 3
}
