# 数据可视化项目-数据可视化大屏

> 本项目为数据可视化简易学习项目，技术栈为 Vue + AntV



## 1. 适配方案

本项目选用 flexible.js 来实现自适应适配

```shell
$npm i lib-flexible -S
```

注意，本项目中需要更改一下 rem 的定义规则，在`node_modules/lib/flexible.js`中将文件将 setRemUnit 函数进行修改

```js
// set 1rem = viewWidth / 10
function setRemUnit() {
  var rem = docEl.clientWidth / 24;
  docEl.style.fontSize = rem + "px";
}
```

在项目开发过程中可以借助一些插件来将设计稿中的 px 转化为 rem，从而到达自适应的目的。



------

如果发现本项目有错误，欢迎提交 issues 指正。