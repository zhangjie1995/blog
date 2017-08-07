# 什么是 CSS hack
* 不同的浏览器对某些css代码解析会存在一定的差异，导致展现给用户的页面效果不同。因此需要针对不同浏览器的不同版本对应的写出不同的css代码，从来达到兼容的目的。这项技术就是css hack。
# 谈一谈浏览器兼容的思路
1. 是否需要兼容
2. 哪些需要兼容
3. 选择什么工具以及如何实现
* 实现过程：1.渐进增强：先对低版本浏览器构建页面，实现功能，然后对高级浏览器进行效果改进。
			2.优雅降级：一开始构建完整的功能，然后针对低版本浏览器进行兼容。
# 列举5种以上浏览器兼容的写法
### CSS属性级Hack 
```

color:red;   /* 所有浏览器可识别*/
 _color:red; /* 仅IE6 识别 */ 
 *color:red; /* IE6、IE7 识别 */ 
 +color:red; /* IE6、IE7 识别 */ 
 *+color:red; /* IE6、IE7 识别 */ 
 [color:red; /* IE6、IE7 识别 */ 
 color:red\9; /* IE6、IE7、IE8、IE9 识别 */ 
 color:red\0; /* IE8、IE9 识别*/ 
 color:red\9\0; /* 仅IE9识别 */ 
 olor:red \0; /* 仅IE9识别 */ 
 color:red!important; /* 
 IE6 不识别!important*/

```
### CSS选择符级Hack
```
*html #demo { color:red;} /* 仅IE6 识别 */ 
*+html #demo { color:red;} /* 仅IE7 识别 */ 
body:nth-of-type(1) #demo { color:red;} /* IE9+、FF3.5+、Chrome、Safari、Opera 可以识别 */ 
head:first-child+body #demo { color:red; } /* IE7+、FF、Chrome、Safari、Opera 可以识别 */ 
:root #demo { color:red\9; } : /* 仅IE9识别 */

```
### IE6下的多选择符
在IE6中，多类选择器，后一个类名会覆盖前一个类名
#　以下工具/名词是做什么的
### 条件注释
条件注释只在IE浏览器瞎才能执行，在非IE浏览器下会被当作注释。能够根据条件针对不同版本的IE，使用不同的css代码实现兼容。
### IE Hack
针对IE浏览器使用的技术，达到兼容目的。
### js 能力检测
识别浏览器的能力，然后给出解决方案。
### html5shiv.js
解决低版本浏览器对HTML5新增标签不识别的问题。
### respond.js
让不支持css3 Media Query的浏览器包括IE6-IE8等其他浏览器支持查询。
### css reset
暴力清除浏览器默认样式。
### normalize.css
是css reset替代方案，保留了有用的浏览器默认样式，修复了浏览器的bug并提供了详细的文档。
### Modernizr
提供了一种简单的方式检测任意新特性，从而让我们可以采取相应的操作。
### postCSS
PostCSS 的主要功能只有两个：第一个就是前面提到的把 CSS 解析成 JavaScript 可以操作的 AST，第二个就是调用插件来处理 AST 并得到结果。
#　一般在哪个网站查询属性兼容性？
caniuse.com
