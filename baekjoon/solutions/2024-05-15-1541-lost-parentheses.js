// https://www.acmicpc.net/problem/1541
// 잃어버린 괄호
//
// '-'를 기준으로 식을 덩어리로 나누면, 첫 덩어리는 그대로 더하고
// 나머지 덩어리는 통째로 괄호로 묶어서 빼는 게 항상 최소값을 만든다.
// 각 덩어리 안의 '+'는 그냥 다 더하면 됨.

function solve(lines) {
  const expr = lines[0].trim();
  const chunks = expr.split('-');

  const chunkSum = (chunk) =>
    chunk.split('+').reduce((sum, num) => sum + Number(num), 0);

  let result = chunkSum(chunks[0]);
  for (let i = 1; i < chunks.length; i++) {
    result -= chunkSum(chunks[i]);
  }

  return String(result);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
