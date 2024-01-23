// https://school.programmers.co.kr/learn/courses/30/lessons/42578
// 위장
//
// 종류별로 몇 벌씩 있는지 개수만 세고, 각 종류마다 "그 종류를 안 입는
// 경우"까지 포함해서 (개수+1)을 곱한 다음, 아무것도 안 입는 경우(전부
// 종류를 스킵하는 조합) 1가지를 빼주면 됨. 조합론에서 자주 쓰는 패턴.

function solution(clothes) {
  const countByType = {};

  for (const [, type] of clothes) {
    countByType[type] = (countByType[type] || 0) + 1;
  }

  const combinations = Object.values(countByType).reduce(
    (acc, count) => acc * (count + 1),
    1
  );

  return combinations - 1;
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(
    solution([
      ['yellow_hat', 'headgear'],
      ['blue_sunglasses', 'eyewear'],
      ['green_turban', 'headgear'],
    ])
  ); // 5
  console.log(
    solution([
      ['crow_mask', 'face'],
      ['blue_sunglasses', 'face'],
      ['smoky_makeup', 'face'],
    ])
  ); // 3
}
