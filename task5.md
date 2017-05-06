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
get方式是将form表单中的数据以拼接到url的方式来传递给服务器端,因为url的长度有限，所以数据大小同样受限。
post则是包裹在http包中，相较get方式更加安全。
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

  