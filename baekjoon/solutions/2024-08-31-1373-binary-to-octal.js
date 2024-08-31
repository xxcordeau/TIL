// https://www.acmicpc.net/problem/1373
// 2진수 8진수
//
// 2진수를 8진수로 바꾸려면 뒤에서부터 3자리씩 끊어서 각각을 8진수 한
// 자리로 바꾸면 된다. 3의 배수가 안 맞을 수 있으니 앞에 0을 채워서
// 길이를 3의 배수로 맞춘 다음 잘라서 변환했다.

function solve(lines) {
  let bin = lines[0].trim();

  const pad = (3 - (bin.length % 3)) % 3;
  bin = '0'.repeat(pad) + bin;

  let result = '';
  for (let i = 0; i < bin.length; i += 3) {
    const chunk = bin.slice(i, i + 3);
    result += parseInt(chunk, 2).toString(8);
  }

  result = result.replace(/^0+(?=\d)/, '');

  return result;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
