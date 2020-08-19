// 把 code 写道 #code 和 style标签 里
function writeCode(prefix, code, fn) {
  let domCode = document.querySelector("#code");
  let n = 0;
  const id = setInterval(() => {
    n += 1;
    domCode.innerHTML = Prism.highlight(
      prefix + code.substring(0, n),
      Prism.languages.css
    );
    styleTag.innerHTML = prefix + code.substring(0, n);
    domCode.scrollTop = domCode.scrollHeight;

    if (n >= code.length) {
      window.clearInterval(id);
      fn && fn.call();
    }
  }, 10);
}

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
  border: 1px solid red;
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
#code{
  position: fixed;
  left: 0;
  width: 50%;
  height: 100%;
}
#paper{
  position: fixed;
  background: black;
  right: 0;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
}
#paper > .content{
  background: white;
  width: 100%;
  height: 100%;
}
`;
let result2 = `
#paper{

}
`;
writeCode("", result, () => {
  // writeCode call the function
  createPaper(() => {
    writeCode(result, result2);
  });
});

function createPaper(fn) {
  const paper = document.createElement("div");
  const content = document.createElement("div");

  paper.id = "paper";
  content.className = "content";

  document.body.appendChild(paper);
  paper.appendChild(content);

  fn.call();
}
