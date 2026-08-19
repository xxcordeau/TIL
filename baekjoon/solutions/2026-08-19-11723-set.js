// https://www.acmicpc.net/problem/11723
// 집합
//
// 원소가 최대 20개라 정수 하나를 비트마스크로 써서 집합을 표현하면
// 편하다. x번째 비트가 켜져있으면 x가 집합에 포함된 것으로 보고,
// add는 OR, remove는 AND NOT, toggle은 XOR, all은 20비트 다 채우기,
// empty는 0으로 리셋, check는 해당 비트만 뽑아서 확인.

function solve(lines) {
  const m = Number(lines[0].trim());
  let set = 0;
  const result = [];

  for (let i = 1; i <= m; i++) {
    const parts = lines[i].trim().split(' ');
    const command = parts[0];

    if (command === 'add') {
      const x = Number(parts[1]);
      set |= 1 << x;
    } else if (command === 'remove') {
      const x = Number(parts[1]);
      set &= ~(1 << x);
    } else if (command === 'check') {
      const x = Number(parts[1]);
      result.push((set & (1 << x)) !== 0 ? 1 : 0);
    } else if (command === 'toggle') {
      const x = Number(parts[1]);
      set ^= 1 << x;
    } else if (command === 'all') {
      set = 0;
      for (let x = 1; x <= 20; x++) set |= 1 << x;
    } else if (command === 'empty') {
      set = 0;
    }
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
