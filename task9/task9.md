# text-align: center的作用是什么，作用在什么元素上？能让什么元素水平居中
* 元素中文本的水平对齐方式为居中
* 作用在块级元素上
* 可以让块级元素中的文本水平居中
# IE 盒模型和W3C盒模型有什么区别?
* IE盒模型宽高计算content+padding和border
* W3C盒模型只计算content的实际宽高
# *{ box-sizing: border-box;}的作用是什么？
所有元素的宽高按照IE盒模型的方式计算
#　line-height: 2和line-height: 200%有什么区别?
当父元素设置line-height属性时，
* 数字：子元素会继承属性，然后按照子元素的行高计算数值。
* 当父元素设置这个属性后，其所有子元素的行高都是一个具体的值，即父元素字体大小的200%。子元素会继承属性及值。
#　inline-block有什么特性？如何去除缝隙？高度不一样的inline-block元素如何顶端对齐?
* inline-bolck占据空间仍为内容大小，但可以设置宽高，magin和padding的上下也有效果。
* 可以删除元素间的空格或者将字体大小设置为0来去除缝隙。
* vertical-align:top;该属性定义行内元素的基线相对于该元素所在行的基线的垂直对齐。
# CSS sprite 是什么?
精灵图，是将不同的小icon放置在一张图片。可以减少网络请求。
# 让一个元素"看不见"有几种方式？有什么区别?
1. opacity：0;透明度为0
2. display：none 占据空间也消失
3. visibility: hidden;和opacity：0;类似
4. background-color: rgba(0,0,0,0.2);只是背景色透明