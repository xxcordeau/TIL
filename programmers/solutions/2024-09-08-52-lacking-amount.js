// https://school.programmers.co.kr/learn/courses/30/lessons/82612
// 부족한 금액 계산하기
//
// k번째 시도에 필요한 금액이 price*k이므로 1부터 count까지 등차수열
// 합 공식으로 총 필요 금액을 구하고, 가진 돈을 빼면 된다. 음수가
// 나오면 부족하지 않다는 뜻이니 0을 돌려준다.

function solution(price, money, count) {
  const total = (price * count * (count + 1)) / 2;
  const lacking = total - money;
  return lacking > 0 ? lacking : 0;
}

module.exports = solution;
