// https://school.programmers.co.kr/learn/courses/30/lessons/160586
// 대충 만든 자판
//
// 각 알파벳마다 최소 몇 번 눌러야 입력할 수 있는지 keymap을 다 훑어서
// 표로 만들어두고, target 문자열의 각 글자를 그 표에서 찾아 더해주는
// 식으로 풀었다. 표에 없는 글자가 하나라도 있으면 그 target은 -1.

function solution(keymap, targets) {
  const costTable = {};

  for (const keys of keymap) {
    keys.split('').forEach((char, index) => {
      const presses = index + 1;
      if (!costTable[char] || costTable[char] > presses) {
        costTable[char] = presses;
      }
    });
  }

  return targets.map((target) => {
    let total = 0;

    for (const char of target) {
      if (!costTable[char]) {
        return -1;
      }
      total += costTable[char];
    }

    return total;
  });
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution(['ABACD', 'BCEFD'], ['ABCD', 'AABB'])); // [9, -1]
  console.log(solution(['AABB', 'BBAC'], ['ABBA', 'BAA', 'BBB'])); // [4, 3, 3]
}
