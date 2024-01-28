// https://school.programmers.co.kr/learn/courses/30/lessons/42842
// 카펫
//
// 전체 칸 수(brown+yellow)의 약수 쌍을 가로/세로 후보로 놓고, 가로가
// 세로보다 크거나 같다는 조건 아래 하나씩 확인. 테두리 칸 수 공식은
// (가로*세로) - (가로-2)*(세로-2) 인데, 이게 brown이랑 같아지는 조합을
// 찾으면 그게 정답.

function solution(brown, yellow) {
  const total = brown + yellow;

  for (let height = 3; height <= Math.sqrt(total); height++) {
    if (total % height !== 0) continue;

    const width = total / height;
    const borderCount = width * height - (width - 2) * (height - 2);

    if (borderCount === brown) {
      return [width, height];
    }
  }

  return [];
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution(10, 2)); // [4, 3]
  console.log(solution(8, 1)); // [3, 3]
  console.log(solution(24, 24)); // [8, 6]
}
