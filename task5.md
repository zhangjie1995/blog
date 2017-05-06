- ## form表单的作用？有哪些常用的input标签，分别有什么作用
```
1. form表单用于包含一些需要提交数据给服务端的标签
2. 常见的input标签及其作用:
  a. <input type="text" name="text">
    输入框
  b. <input type="button" name="button">
     普通按钮
  c. <input type="submit" value="提交">
    提交按钮 
  d. <input type="checkbox" name="cb" value="xx">
      复选框 name相同的为一组 键值对为 cb:xx
      <input type="radio" name="rd1" value="xxyy">
      单选框 name相同的为一组 键值对为 rd1:xxyy
  e. <input type="reset" name="reset">
      用于重置form表单中input标签的值
  f. <input type="password" name="password">
      输入密码
  g. <label for="id">用户名</label>
      input标签前面的文字，点击label时会选中对应id的input标签
  h. <select name="city">
        <option value="shanghai">city</option>
     </select>
     下拉框
  i. <input type="hidden" name="" value="">
     用于暂存数据和安全用途
  j . <textarea name="">
      </textarea>
      输入多段文字
```
- ## post和get方式的区别
```
1.安全性
    使用get时，form数据集被附加到form元素action属性所指定的URL后面 形式如url?key1=value1&key2=value2..,继而在浏览历史中通过可以看到数据集
    使用post时，会把数据集包裹在请求的body中。
2.数据长度限制
    因URL长度限制为2083个字符，从而限制了get提交的数据长度。而post不用考虑这个问题
3.用途
    get用来从服务器上获取数据
    post用来向服务器上传递数据
```
- ## 在input中，name有什么作用
```
提交数据时是以键值对的形式，而name的值对于键
同时在checkbox和radio中用于区分是否为一组
```
- ## radio如何分组
```
有相同name的为一组
```
- ## placeholder属性的作用
```
用于在输入框中显示提示，当用户输入时自动消失
```
- ## type=hidden隐藏域有什么作用？举例说明
```
隐藏域用户不可预见，在表单中插入隐藏域的目的在于暂存信息和安全用途。可以提高安全性。比如csrf-value键值对，可以使服务器端区分是否为仿造网站。
```
- ## HTML表单的用法
见第一题
- ## 预览地址
[预览地址](https://zhangjie1995.github.io/blog/form.html)

  