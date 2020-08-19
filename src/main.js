const result = `/*
 * 面试官你好，我是孔义
 * 我将以动画的形式来介绍我自己
 * 只用文字介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */

*{
  margin: 0;
  padding: 0;
  transition: all 1s;
}
html{
  background: rgb(222,222,222)
  font-size: 16px;
}
#code{
  border: 1px solid #ddd;
  padding: 16px;
}

/* 我需要一点代码高亮 */

.token.selector {
  color: #690;
}
.token.property {
  color: #905;
}
.token.function {
  color: dd4A68;
}
/* 加点 3D 效果 */
#code{
  transform: rotate(360deg);
}
/* 不玩了，我开始正式介绍我自己吧！*/
/* 首先准备一张白纸 */
`;

const result2 = `
`;
let n = 0;
const id = setInterval(() => {
  n += 1;
  code.innerHTML = result.substring(0, n);
  code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css);
  styleTag.innerHTML = result.substring(0, n);
  if (n >= result.length) {
    window.clearInterval(id);
    fn2();
    fn3(result);
  }
}, 10);

function fn2() {
  const paper = document.createElement("div");
  paper.id = "paper";
  document.body.appendChild(paper);
}

function fn3(preResult) {
  var result = `
#paper{
  width: 100px; height: 100px;
  background: red;
}
  `;
  let n = 0;
  const id = setInterval(() => {
    n += 1;
    code.innerHTML = preResult + result.substring(0, n);
    code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css);
    styleTag.innerHTML = result.substring(0, n);

    if (n >= result.length) {
      window.clearInterval(id);
    }
  }, 50);
}
