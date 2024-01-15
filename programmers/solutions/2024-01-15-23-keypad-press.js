// https://school.programmers.co.kr/learn/courses/30/lessons/67256
// 키패드 누르기
//
// 키패드 좌표를 미리 정의해두고, 왼쪽 열(1,4,7,*)은 왼손 고정,
// 오른쪽 열(3,6,9,#)은 오른손 고정. 가운데 열(2,5,8,0)만 현재 양손
// 위치에서의 거리를 계산해서 더 가까운 손을 쓰고, 거리가 같으면
// hand 파라미터로 정해진 손을 쓰는 식으로 처리했다.

function solution(numbers, hand) {
  const positions = {
    1: [0, 0], 2: [0, 1], 3: [0, 2],
    4: [1, 0], 5: [1, 1], 6: [1, 2],
    7: [2, 0], 8: [2, 1], 9: [2, 2],
    '*': [3, 0], 0: [3, 1], '#': [3, 2],
  };

  const distance = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);

  let left = positions['*'];
  let right = positions['#'];
  let result = '';

  for (const num of numbers) {
    if (num === 1 || num === 4 || num === 7) {
      left = positions[num];
      result += 'L';
    } else if (num === 3 || num === 6 || num === 9) {
      right = positions[num];
      result += 'R';
    } else {
      const target = positions[num];
      const leftDist = distance(left, target);
      const rightDist = distance(right, target);

      if (leftDist < rightDist) {
        left = target;
        result += 'L';
      } else if (rightDist < leftDist) {
        right = target;
        result += 'R';
      } else if (hand === 'left') {
        left = target;
        result += 'L';
      } else {
        right = target;
        result += 'R';
      }
    }
  }

  return result;
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right')); // "LRLLLRLLRRL"
  console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left')); // "LRLLRRLLLRR"
}
