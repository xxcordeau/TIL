// https://www.acmicpc.net/problem/2503
// 숫자 야구
//
// 정답 후보는 세 자리 숫자가 모두 다른 100~999 사이의 수뿐이라
// 그냥 다 돌면서 각 힌트(스트라이크, 볼)와 맞는지 검증하는 브루트
// 포스로 푼다. 자릿수가 같고 값도 같으면 스트라이크, 값만 같으면
// 볼로 세면 됨.

function judge(guess, answer) {
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < 3; i++) {
    if (guess[i] === answer[i]) {
      strike++;
    } else if (answer.includes(guess[i])) {
      ball++;
    }
  }
  return { strike, ball };
}

function solve(lines) {
  const n = Number(lines[0].trim());
  const hints = [];
  for (let i = 1; i <= n; i++) {
    const [guessStr, s, b] = lines[i].trim().split(' ');
    hints.push({
      guess: guessStr.split('').map(Number),
      strike: Number(s),
      ball: Number(b),
    });
  }

  let count = 0;

  for (let num = 123; num <= 987; num++) {
    const digits = String(num).split('').map(Number);
    if (digits.includes(0)) continue;
    if (new Set(digits).size !== 3) continue;

    let ok = true;
    for (const hint of hints) {
      const { strike, ball } = judge(hint.guess, digits);
      if (strike !== hint.strike || ball !== hint.ball) {
        ok = false;
        break;
      }
    }

    if (ok) count++;
  }

  return String(count);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
