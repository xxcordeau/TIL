// https://school.programmers.co.kr/learn/courses/30/lessons/87389
// 나머지가 1이 되는 수 찾기
//
// n이 최대 백만이라 그냥 2부터 n까지 순서대로 돌면서 나머지가 1이
// 되는 가장 작은 x를 찾으면 됨. 어차피 정답이 항상 존재한다고 하니까
// 굳이 최적화 안 해도 충분히 빠름.

function solution(n) {
  for (let x = 2; x <= n; x++) {
    if (n % x === 1) {
      return x;
    }
  }
  return n - 1;
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution(10)); // 3
  console.log(solution(12)); // 11
}
