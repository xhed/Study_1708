<!-- TOC -->

- [1. JS基础语法](#1-js基础语法)
- [2. JS 基本数据类型(5)](#2-js-基本数据类型5)

<!-- /TOC -->
# 1. JS基础语法

```javascript

var a = 1;

//var a;
//a = 1;

var b = 2.3;

var c = a + b;

```

# 2. JS 基本数据类型(5)

undefined

    一种特殊数据类型，表示已经声明，但是"没有值"

    并不是真的没有值，只是，值是undefined，类型也是undefined

null

    空对象
    没有值，类型是object

数字型

    包括整数、浮点数

    123456

    + - * /
    % 模运算 取余

    
    NaN Not a Number, 一个特殊数字,表示不是一个数字

        NaN != NaN

    Infinity ，一个特殊数字，不是一个确切数字，而是无穷大

        Infinity == Infinity

字符串型

    "123456"

    + 字符串加上任何数据类型，都是字符串，这里的加号，其实是字符串连接符号
    
    - * / 就不一样，尝试类型转换（隐式类型转换） 

    注意：+ - * / 遇到字符串的时候，都是尝试转换类型，但是方向不同

布尔型

    true false

<!-- # JS输入输出
输出
```js
document.write() // 把内容写到页面上
alert() // 挑出一个提醒框
console.log() // 在控制台输出
```
```js
document.write(a + prompt());
``` -->