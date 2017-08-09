# 说一说你平时写代码遵守的编码规范
1. 标签类名小写，使用-连接两个单词
2. 属性名冒号加空格，类名和括号之间加空格
3. 闭合标签
* 编码规范参照 http://codeguide.bootcss.com/
# 垂直居中有几种实现方式，给出代码范例
1. 上下padding
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		.ct {
			width: 300px;
			border:1px solid ;
			padding: 100px;
		}
	</style>
</head>
<body>
<div class="ct">
	<span>垂直</span>
</div>	
</body>
</html>
```
2. 使用伪元素
```
.ct:before {
	height: 100%;
	content: " ";
	display: inline-block;
	vertical-align: middle;
}
```
3. display为table-cell
```
.ct {
	display: table-cell;
	width: 100px;
	height: 300px;
	border: 1px solid;
	vertical-align: middle;
	}
```