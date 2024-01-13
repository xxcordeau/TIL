// https://school.programmers.co.kr/learn/courses/30/lessons/86491
// 최소직사각형
//
// 회전이 가능하니까 각 명함마다 가로/세로 중 큰 쪽을 항상 가로로
// 맞춰버리면 비교가 쉬워짐. 그렇게 정규화한 다음, 전체 명함 중 가장 큰
// 가로랑 가장 큰 세로를 각각 뽑아서 곱하면 그게 최소 지갑 크기.

function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  for (const [w, h] of sizes) {
    const width = Math.max(w, h);
    const height = Math.min(w, h);
    maxWidth = Math.max(maxWidth, width);
    maxHeight = Math.max(maxHeight, height);
  }

  return maxWidth * maxHeight;
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]])); // 4000
  console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]])); // 120
  console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]])); // 133
}
