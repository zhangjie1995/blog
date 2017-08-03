# class和id的使用场景？
id用于识别页面内的唯一元素；
class用于识别页面内的一类元素。
# CSS选择器常见的有几种？
## 1. 基础选择器
* 通用选择器 *
* id选择器 #name
* 类选择器 .name
* 标签选择器 标签名
## 2. 组合选择器
* E,F 多元素选择器，匹配E，同时也匹配F
* E F 后代选择器，匹配E元素的所有F后代
* E>F 直接后代选择器，匹配E元素的直接子元素中的F元素
* E+F 直接相邻选择器，匹配E元素之后直接相邻的同级F元素
* E~F 普通相邻选择器
* EF 多条件选择器，匹配E,F都满足的元素
##　3. 属性选择器
* E[attr] 匹配所有具有attr属性的E元素
* E[attr=value] 匹配所有attr属性值为value的E元素
## 4. 伪类选择器
* E：hover 当鼠标悬停在E元素上时
* E：active 当鼠标点击E元素并未释放时
* E：visited 当鼠标点击过E元素时
* E：first-child 匹配E元素父元素的第一个子元素
* E：first-of-type 匹配E元素父元素的子元素中第一个使用相同标签的子元素
## 5. 伪元素选择器
* E::before 在E元素之前插入生成的内容
```
#p1::before{
    contents:'aaa';
}
```
* E::after 在E元素之后插入生成的内容
# 选择器的优先级是怎样的？对于复杂场景是如何计算优先级的？
## 优先级从高到低如下：
```
1. 后面标有important的样式
2. 写在元素标签上的内联样式
3. id选择器
4. 类选择器
5. 伪类选择器
6. 属性选择器
7. 标签选择器
8. 通配符选择器
9. 浏览器默认
```
## 复杂场景计算
```
将选择器分为4类：
a：内联
b：id
c：类，伪类，属性
d：元素，伪元素
按照a-d的顺序进行比较。

```
## a:link,a:hover，a:active,a:visited的顺序是怎样的？为什么？
顺序为：
* a:link
* a:visited
* a:hover
* a:active
满足从一般到特殊的顺序,遵循LVHY(爱恨原则love/hate)的先后顺序，即:link,:visited,:hover,:active

由于伪类选择器优先级一致，后面的a链接样式会覆盖前面的，所有我们需要按照特殊性排列，将最特殊的放到最后。
## 以下选择器分别是什么意思?
```
#header{    
}
<!-- id=header的元素 -->
.header{
}
<!-- class=header的元素 -->
.header .logo{
}
<!-- class=header的子元素中类为logo的元素 -->
.header p, .header h3{
}
<!-- class=header元素的后代中的p元素和h3元素 -->
#header .nav>li{
}
<!-- id=headr元素后代中class=nav元素中直接后代li元素 -->
#header a:hover{
}
<!-- id=header元素后代中鼠标悬浮a链接时的样式 -->
#header .logo~p{
}
<!-- id=header元素后代中'class=logo'元素之后的同级元素p标签 -->
#header input[type='text']{
}
<!-- id=header元素后代中type属性为text的input元素 -->
```
# div:first-child，div:first-of-type、div :first-child和div :first-of-type的作用和区别 （注意空格的作用）
* div:first-child div元素父类元素后代中的第一个子元素，且必须为div元素。
* div:first-of-type div元素父类元素后代中第一个div类型的元素
* div :first-child div元素下的第一个子元素
* div :first-of-type 选择div元素下的同类元素的第一个子元素(所有不同类型中第一个)。

后两者选择的元素无需是div元素。
# 
```
<style>
.item1:first-child{
  color: red;
}
<!-- 选择class=item1元素父元素后代中第一个子元素（且class=itm1） -->
.item1:first-of-type{
  background: blue;
}
<!-- 选择class=item1元素父元素后代中第一个同类型元素。 -->
</style>
 <div class="ct">
   <p class="item1">aa</p>
   <h3 class="item1">bb</h3>
   <h3 class="item1">ccc</h3>
 </div>
```



