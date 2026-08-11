// https://school.programmers.co.kr/learn/courses/30/lessons/1845
// 폰켓몬
//
// N/2 마리를 가져갈 수 있는데, 결국 종류 수를 최대화하려면 서로 다른 종류를
// 최대한 많이 뽑으면 됨. 그런데 애초에 서로 다른 종류의 개수가 N/2보다 적으면
// 그 이상은 못 뽑으니까, 결국 답은 (서로 다른 종류 수)랑 (N/2) 중 작은 값.
// Set으로 중복 제거해서 종류 수만 세면 끝.

function solution(nums) {
  const uniqueCount = new Set(nums).size;
  const canTake = nums.length / 2;
  return Math.min(uniqueCount, canTake);
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution([3, 1, 2, 3])); // 2
  console.log(solution([3, 3, 3, 2, 2, 4])); // 3
  console.log(solution([3, 3, 3, 2, 2, 2])); // 2
}
