# inline-block元素间间隙产生及去除
```
<div id="demo">
	<span>我是一个span</span>
	<span>我是一个span</span>
	<span>我是一个span</span>
	<span>我是一个span</span>
</div>
```
* 不对span做任何处理，你会发现span元素间也存在间隙。
```
<div id="demo">
	<span>我是一个span</span><span>我是一个span</span><span>我是一个span</span><span>我是一个span</span>
</div>

```
* 由上例可知，间隙由换行导致。
## 去除办法
```
<div id="demo">
	<span>我是一个span</span>
	<span>我是一个span</span>
	<span>我是一个span</span>
	<span>我是一个span</span>
	<span>我是一个span</span>
</div>
#demo{
	font-size:0;
}
#demo span{
	display:inline-block;
	*display:inline;
	*zoom:1;
	font-size:14px;
}
```
* 