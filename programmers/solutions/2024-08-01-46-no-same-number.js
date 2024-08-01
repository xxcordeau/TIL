// https://school.programmers.co.kr/learn/courses/30/lessons/12906
// 같은 숫자는 싫어
//
// 바로 앞에 쌓인 숫자와 같은 숫자만 걸러내면 되니까, 결과 배열의
// 마지막 원소와 지금 보는 숫자를 비교해서 다를 때만 넣어주면 된다.

function solution(arr) {
  const result = [];

  for (const num of arr) {
    if (result[result.length - 1] !== num) {
      result.push(num);
    }
  }

  return result;
}

module.exports = solution;

if (require.main === module) {
  console.log(solution([1, 1, 3, 3, 0, 1, 1])); // [1, 3, 0, 1]
  console.log(solution([4, 4, 4, 3, 3])); // [4, 3]
}
