// https://www.acmicpc.net/problem/5543
// 상근날드
//
// 세트 할인은 가장 싼 버거와 가장 싼 음료를 묶을 때 적용하는 게
// 항상 최선이라, 각각의 최솟값을 더하고 할인 50원을 빼주면 끝.

function solve(lines) {
  const burgers = lines.slice(0, 3).map((line) => Number(line.trim()));
  const drinks = lines.slice(3, 5).map((line) => Number(line.trim()));

  const cheapestBurger = Math.min(...burgers);
  const cheapestDrink = Math.min(...drinks);

  return String(cheapestBurger + cheapestDrink - 50);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
