// https://school.programmers.co.kr/learn/courses/30/lessons/42583
// 다리를 지나는 트럭
//
// 다리 위에 올라간 트럭들을 큐로 관리하면서 1초씩 시간을 흘려보내는
// 시뮬레이션. 매초마다 맨 앞 트럭이 다리를 다 건넜으면 큐에서 빼고
// 현재 다리 위 무게에서도 제외. 그 다음 대기 중인 트럭이 다리 무게를
// 넘지 않으면 올려보내는 식으로 처리했다.

function solution(bridge_length, weight, truck_weights) {
  const bridge = new Array(bridge_length).fill(0);
  let bridgeWeight = 0;
  let time = 0;
  const trucks = [...truck_weights];

  while (trucks.length > 0 || bridgeWeight > 0) {
    time++;

    bridgeWeight -= bridge.shift();

    if (trucks.length > 0 && bridgeWeight + trucks[0] <= weight) {
      const nextTruck = trucks.shift();
      bridge.push(nextTruck);
      bridgeWeight += nextTruck;
    } else {
      bridge.push(0);
    }
  }

  return time;
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution(2, 10, [7, 4, 5, 6])); // 8
  console.log(solution(100, 100, [10])); // 101
  console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); // 110
}
