// https://www.acmicpc.net/problem/1991
// 트리 순회
//
// 전위/중위/후위 순회 결과를 출력하는 문제.
// 입력을 파싱해서 트리를 구성한 다음 각각 재귀로 순회하면 된다.
// '.' 은 자식이 없다는 뜻.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const tree = {};

  for (let i = 1; i <= n; i++) {
    const [node, left, right] = lines[i].trim().split(' ');
    tree[node] = { left: left === '.' ? null : left, right: right === '.' ? null : right };
  }

  const pre = [], mid = [], post = [];

  function traverse(node) {
    if (!node) return;
    pre.push(node);
    traverse(tree[node].left);
    mid.push(node);
    traverse(tree[node].right);
    post.push(node);
  }

  traverse('A');
  return `${pre.join('')}\n${mid.join('')}\n${post.join('')}`;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}