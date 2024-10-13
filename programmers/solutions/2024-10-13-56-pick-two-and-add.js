// https://school.programmers.co.kr/learn/courses/30/lessons/68644
// 두 개 뽑아서 더하기
//
// 배열에서 서로 다른 인덱스 두 개를 뽑아서 만들 수 있는 모든 합을
// Set에 넣어서 중복을 없앤 다음 오름차순으로 정렬해서 반환하면 된다.

function solution(numbers) {
  const sums = new Set();
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      sums.add(numbers[i] + numbers[j]);
    }
  }
  return [...sums].sort((a, b) => a - b);
}

module.exports = solution;

if (require.main === module) {
  console.log(solution([2, 1, 3, 4, 1])); // [2, 3, 4, 5, 6, 7]
  console.log(solution([5, 0, 2, 7])); // [2, 5, 7, 9, 12]
}
