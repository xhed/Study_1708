<!-- TOC -->

- [1. 作息要求](#1-作息要求)
- [3.上课要求](#3上课要求)
    - [1.1. 作业](#11-作业)
- [文本标签](#文本标签)
- [标题](#标题)
- [段落](#段落)
- [换行](#换行)
- [水平线](#水平线)
- [分区元素](#分区元素)
- [预格式化](#预格式化)
- [转义字符](#转义字符)
    - [作业](#作业)

<!-- /TOC -->

# 1. 作息要求
1. 早上9点之前必须到，迟到群里发红包10块钱
2. 上午12点下课吃饭，课程11点结束
3. 下午2点上课，中午注意休息
4. 下午6点下课，课程5点结束
5. 晚上7点到9点自习
6. 周六自习，不要求晚自习，周日放假
7. 每天晚上发日报

# 3.上课要求
1. 讲课过程中有问题直接说
2. 练习过程中，有问题相互讨论
3. 作业，会在上课过程中布置，所以做好记录
4. 第二天早上，班长负责检查作业
5. 上午以讲作业和新知识点为主
6. 下午，主要新知识点
## 1.1. 作业
1. 自学（复习） markdown


```
<html lang="en"> // 整个网页，一定都在html标签里面
    <head>  // 网页的信息，不会呈现在网页内容上
        <meta charset="UTF-8">  // 原信息标签(编码)
        <title>Document</title>  // 页面标题
        <script src="main.js"></script>  // 引入js文件
        <link rel="stylesheet" href="style.css"> // 引入css文件
        <meta name="keywords" content="第一天,HTML,mrakdown"> //关键字
    <meta name="description" content="这是我第一天学习了HTML的课程，以及打开网页浏览源代码的方法"> //语句 和关键字一样都是先定义名字再定义它的内容
        <style>  // 内部样式
            head{
                height:100px;
                background: #45fff0;
            }
        </style>
    </head>
    <body>
        
    </body>

</html>
```


# 文本标签

修饰文本（文字）的标签,全是成对出现

    b
    i
    u
    del
    sub
    sup

# 标题

代表标题

    h1 h2 h3 h4 h5 h6

# 段落

    p

段落标签p里面不支持换行，但是段落之间，默认换行

# 换行

    br  自结束标签

常用于文字内部，不产生行距

# 水平线

    hr

# 分区元素

    div     块元素    不相当于文字，“盒”   

        1. 从上往下排列
        2. 高宽可以直接生效
        3. 默认宽度 100%

    span    行内元素  相当于文字

        1. 默认从左往右
        2. 高宽无法直接生效
        3. 默认宽度

# 预格式化

    pre

# 转义字符

    &nbsp;
    &copy;

## 作业

    http://tool.oschina.net/commons?type=2
    
1. 自学常见的转义字符
2. 内联文本语义 标签  https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element
2. 文字排版 http://www.unnuo.com/teach/010101-html.html