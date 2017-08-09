# 说一说你平时写代码遵守的编码规范
1. 标签类名小写，使用-连接两个单词
2. 属性名冒号加空格，类名和括号之间加空格
3. 闭合标签
* 编码规范参照 http://codeguide.bootcss.com/
# 垂直居中有几种实现方式，给出代码范例
1. 上下padding
```
.ct {
	width: 300px;
	border:1px solid ;
	padding: 100px;
}
```
2. vertical-align(作用于行内元素和表格元素)
* 使用伪元素
```
.ct:before {
	height: 100%;
	content: " ";
	display: inline-block;
	vertical-align: middle;
}
```
 * display为table-cell
```
.ct {
	display: table-cell;
	width: 100px;
	height: 300px;
	border: 1px solid;
	vertical-align: middle;
	}
```
3. 高度固定，使用绝对定位垂直居中
```
.ct {
	position: absolute;
	left: 50%;
	height: 50%;
	transform: translate(-50%,-50%);
}
```
4. 使用line-height
```
.ct{
	height: 300px; 
	line-height: 300px;
}
```