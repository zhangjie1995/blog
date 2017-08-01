# 浮动元素有什么特征？对父容器、其他浮动元素、普通元素、文字分别有什么影响?
* 脱离文档流，不占据空间。浮动的框可以左右移动，直到它的外边缘碰到包含框或者另一个浮动元素的框的边缘。
* 不会占据父容器空间，会导致父容器高度塌陷；如果包含块太窄无法容纳水平排列的三个浮动元素，那么其他浮动块会向下移动，指导有足够的空间，如果浮动元素的高度不同，那么向下移动的时候可能会被卡住；普通元素会表现的就像浮动元素不存在一样，浮动元素会覆盖普通元素；文字会围绕浮动元素。
# 清除浮动指什么? 如何清除浮动? 两种以上方法
* 浮动会导致父容器高度塌陷，所以我们需要闭合浮动元素，使其包含框表现出正常的高度。
* 清除浮动的方法：
```
1.添加额外的标签，通过在浮动元素末尾添加一个空的标签；
2.BFC清理浮动(对父容器添加如下属性来形成BFC达到"清浮动"效果)
    a:float为left|right
    b:overflow为hidden|auto|scroll
    c:display为table-cell|table-caption|inline-block
    d:position为absolute|fixed
3.常用方法
  .clearfix{
      *zoom:1;
  }
  .clearfix:after{
      content:'';
      display:block;
      clear:both;
  }
```
# 有几种定位方式，分别是如何实现定位的，参考点是什么，使用场景是什么？
1. 相对定位（relative）。position:relative。参考点是元素原来的位置。使用场景是对元素位置进行调整，且不影响其他元素的位置。
2. 绝对定位(absolute).position:absolute.相对于static定位以外的第一个祖先元素进行定位,元素的位置通过 left, top, right以及 bottom 属性进行规定。
3. 固定定位(fix)。fixed生成绝对定位的元素，相对于浏览器窗口进行定位。元素的位置通过 left, top, right 以及 bottom 属性进行规定。


# z-index 有什么作用? 如何使用?
* z-index可以设置盒模型元素的Z轴顺序，数字越大，元素越接近观察者。z-indx仅对有定位元素生效。
* 设置整数数字，数字越大，表示该盒模型元素越接近观察者（同级元素）。分辨出层叠元素在Z轴上的渲染顺序的简单方法是将它们想象成一系列的版本号，子元素是其父元素版本号之下的次要版本。
# position:relative和负margin都可以使元素位置发生偏移?二者有什么区别
区别是position:relative虽然使元素位置发生偏移，但元素的实际位置并没有发生变化。
# BFC 是什么？如何生成 BFC？BFC 有什么作用？举例说明
* BFC(Block formatting context)直译为"块级格式化上下文"。它是一个独立的渲染区域，只有Block-level box参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。
* 根元素
float属性不为none
position为absolute或fixed
display为inline-block, table-cell, table-caption, flex,inline-flex
overflow不为visible  
* 1. 两栏布局；
    ![01](http://upload-images.jianshu.io/upload_images/249906-ed2eb6b2fef48269.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
  2. 清除浮动；
    ![02](http://upload-images.jianshu.io/upload_images/249906-83918fe134bc586a.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
  3.  防止垂直margin重叠。   
  ![03](http://upload-images.jianshu.io/upload_images/249906-234f8b6b501b2c3a.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)   
# 在什么场景下会出现外边距合并？如何合并？如何不让相邻元素外边距合并？给个父子外边距合并的范例
*  处于同一个BFC的相邻元素垂直外边距会合并；块级元素父元素和它的第一个.最后一个子元素会合并；空的块级元素。
*  合并规则：取偏移量最大的值。
*  将相邻元素放在不同的BFC中
* 父子外边距合并范例：
 ![04](http://upload-images.jianshu.io/upload_images/249906-e0276e1c6896d505.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
