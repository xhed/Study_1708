# JS
## 书写位置

    任何位置

    默认，代码只按照从上到下的顺序执行

## 输出
```js
document.write(''); // 往网页body里面插入内容,位置根据js的位置来计算
alert('');  
console.log("");

// 一切皆对象

window.document.write('');
window.alert('');
window.console.log("");
```

    网页，渲染出来后，仍然可以插入标签

## 输入

    promt(); 获取到的内容是字符串

## 数据类型-数字

    字面量与进制
    var a = 10;

    var b = 012;
    var b = 0o12;

    var c = 0x26;

    科学记数法
    5e+3
    2e-4
    -5e-3


面试题
```js
var e = 10;
console.log(5e+10);
```

## 字符串

    var a = "123213123"

### 引号嵌套
```js
    var a = 5;
    var b = "1'+a+'1";
    var c = "1"+a+"1";
    var color = "rgb("+r+","+g+","+b+")";

    /*
        输出 "今天是2017年8月7日"
    */
```

### 转义

    在html中，使用 &nbsp; 这种风格的转义
    但是在js中，使用 \n 这种风格的转义


# 声明提升

    默认的情况下，我们的变量，一定要先声明，再使用

    声明会提前，赋值留在原地
