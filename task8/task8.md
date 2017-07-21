# 块级元素和行内元素分别有哪些？动手测试并列出4条以上的特性区别
* 块级元素
div,p,table,tr,td,th,ul,li,ol,h1...
* 行内元素
span,em,strong,img,input,label,textaera,button,a...
### 区别
1. 块级元素可以设置宽高
2. 块级元素占据一整行，而行内元素只占内容所占空间。
3. 块级元素设置magin、padding上下左右均有效果，行内元素只有左右有效果。
4. 块级元素可以包含块级元素及行内元素，行内元素不能包含块级元素。
# 什么是css继承？哪些属性能继承，哪些不能？
csss继承是指我们设置父级的css样式，父级及自己都具有此属性，一般只有文字文本具有继承特性。
* ### 可以被继承的属性
```
1、字体系列属性

font：组合字体

font-family：规定元素的字体系列

font-weight：设置字体的粗细

font-size：设置字体的尺寸

font-style：定义字体的风格

font-variant：设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，但是所有使用小型大写字体的字母与其余文本相比，其字体尺寸更小。

font-stretch：对当前的 font-family 进行伸缩变形。所有主流浏览器都不支持。

font-size-adjust：为某个元素规定一个 aspect 值，这样就可以保持首选字体的 x-height。

2、文本系列属性

text-indent：文本缩进

text-align：文本水平对齐

line-height：行高

word-spacing：增加或减少单词间的空白（即字间隔）

letter-spacing：增加或减少字符间的空白（字符间距）

text-transform：控制文本大小写

direction：规定文本的书写方向

color：文本颜色

3、元素可见性：visibility

4、表格布局属性：caption-side、border-collapse、border-spacing、empty-cells、table-layout

5、列表布局属性：list-style-type、list-style-image、list-style-position、list-style

6、生成内容属性：quotes

7、光标属性：cursor

8、页面样式属性：page、page-break-inside、windows、orphans

9、声音样式属性：speak、speak-punctuation、speak-numeral、speak-header、speech-rate、volume、voice-family、pitch、pitch-range、stress、richness、、azimuth、elevation
```
* ### 不可继承属性
```
1、display：规定元素应该生成的框的类型

2、文本属性：

vertical-align：垂直文本对齐

text-decoration：规定添加到文本的装饰

text-shadow：文本阴影效果

white-space：空白符的处理

unicode-bidi：设置文本的方向

3、盒子模型的属性：width、height、margin 、margin-top、margin-right、margin-bottom、margin-left、border、border-style、border-top-style、border-right-style、border-bottom-style、border-left-style、border-width、border-top-width、border-right-right、border-bottom-width、border-left-width、border-color、border-top-color、border-right-color、border-bottom-color、border-left-color、border-top、border-right、border-bottom、border-left、padding、padding-top、padding-right、padding-bottom、padding-left

4、背景属性：background、background-color、background-image、background-repeat、background-position、background-attachment

5、定位属性：float、clear、position、top、right、bottom、left、min-width、min-height、max-width、max-height、overflow、clip、z-index

6、生成内容属性：content、counter-reset、counter-increment

7、轮廓样式属性：outline-style、outline-width、outline-color、outline

8、页面样式属性：size、page-break-before、page-break-after

9、声音样式属性：pause-before、pause-after、pause、cue-before、cue-after、cue、play-during
```

# 如何让块级元素水平居中？如何让行内元素水平居中？
* magin: 0 auto;   
* text-align: center;
# 单行文本溢出加 ...如何实现?
```
white-space: nowrap;    #禁止换行
overflow: hidden;       #溢出部分隐藏
text-overflow: ellipsis； #溢出部分用省略号代替

```
#　px, em, rem 有什么区别
px 像素。相对长度单位。相对于显示器屏幕分辨率而言。
em。相对长度单位。是相对于其父级的字体大小。
rem。相对长度单位。始终基于根元素html。
# 解释下面代码的作用？为什么要加引号？字体里\5b8b\4f53代表什么？
```
body{
  font: 12px/1.5 tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif;
}
```
* 代码的作用是设置body内字体的大小，行宽，字体
* 加引号表示这引号内为一种字体
* ‘\5b8b\4f53’代表宋体
