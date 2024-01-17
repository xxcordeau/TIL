// https://school.programmers.co.kr/learn/courses/30/lessons/12949
// 행렬의 곱셈
//
// 그냥 행렬 곱셈 정의대로 3중 반복문 돌리면 되는 문제. arr1의 행 개수,
// arr2의 열 개수만큼 결과 행렬을 만들고 각 칸을 내적으로 채움.

function solution(arr1, arr2) {
  const rows = arr1.length;
  const cols = arr2[0].length;
  const inner = arr2.length;

  const result = Array.from({ length: rows }, () => new Array(cols).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let sum = 0;
      for (let k = 0; k < inner; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      result[i][j] = sum;
    }
  }

  return result;
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]]));
  // [[15,15],[15,15],[15,15]]
  console.log(
    solution(
      [[2, 3, 2], [4, 2, 4], [3, 1, 4]],
      [[5, 4, 3], [2, 4, 1], [3, 1, 1]]
    )
  );
  // [[22,22,11],[36,28,18],[29,20,14]]
}
