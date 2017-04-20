![url.png](http://upload-images.jianshu.io/upload_images/5630526-9a4006a8887045c6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 域名解析
域名相当于人的名字（不重复的）

ip地址则是电话号码

存储域名-ip对应关系的服务器相当于电话簿

根据'电话簿'找到ip地址(搭建有web服务器),发送请求。

## 服务器处理

- 常见的Web服务器有Apache、Nginx、lls、Lighttpd

- web服务器接收用户的Request交给网站代码，或者接受请求反向代理其他web服务器

![本地服务器.PNG](http://upload-images.jianshu.io/upload_images/5630526-62e6be1d03aec49b.PNG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
## 网站处理流程
路由会根据该请求找到对应的控制器 

控制器读取请求然后找到相关模型索取所需数据 

根据html模板生产所需html

将html返回到请求主机
## 浏览器处理
1. HTML字符串被浏览器接受后被一句句读取解析

2. 解析到link 标签后重新发送请求获取css

3. 解析到 script标签后发送请求获取 js，并执行代码

4. 解析到img 标签后发送请求获取图片资源

## 展示

根据HTML和css文件计算得到渲染树，绘制到屏幕上。