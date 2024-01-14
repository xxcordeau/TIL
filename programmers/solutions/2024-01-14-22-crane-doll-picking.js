// https://school.programmers.co.kr/learn/courses/30/lessons/64061
// 크레인 인형뽑기 게임
//
// 각 열을 스택처럼 생각하면 편함. moves에 있는 열에서 맨 위 인형을
// 하나씩 꺼내서 바구니(스택)에 쌓다가, 바구니 맨 위 두 개가 같으면
// 터뜨리면서 pop, 다르면 그냥 쌓는 식으로 시뮬레이션.

function solution(board, moves) {
  const columns = board[0].map((_, col) => board.map((row) => row[col]).filter((v) => v !== 0));
  const basket = [];
  let popped = 0;

  for (const move of moves) {
    const col = columns[move - 1];
    if (col.length === 0) continue;

    const doll = col.shift();

    if (basket.length > 0 && basket[basket.length - 1] === doll) {
      basket.pop();
      popped += 2;
    } else {
      basket.push(doll);
    }
  }

  return popped;
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  const board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ];
  console.log(solution(board, [1, 5, 3, 5, 1, 2, 1, 4])); // 4
}
