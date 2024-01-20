// https://school.programmers.co.kr/learn/courses/30/lessons/131705
// 삼총사
//
// 배열 길이가 최대 13밖에 안 돼서 그냥 3중 반복문으로 모든 조합을
// 다 확인해도 충분함. 세 명을 뽑아서 합이 0이면 카운트.

function solution(number) {
  let count = 0;

  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          count++;
        }
      }
    }
  }

  return count;
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution([-2, 3, 0, 2, -5])); // 2
  console.log(solution([-3, -2, -1, 0, 1, 2, 3])); // 5
  console.log(solution([-1, 1, -1, 1])); // 0
}
