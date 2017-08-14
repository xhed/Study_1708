<!-- TOC -->

- [1. Array](#1-array)
- [2. 对象](#2-对象)
- [3. 作用域](#3-作用域)
- [遍历](#遍历)
- [while / do while](#while--do-while)

<!-- /TOC -->
# 1. Array

    数组　在Js中，数组本质上是一种特殊的对象

    而数组，对象，都是"引用类型"

```js
    var arrMonth = ["白羊座","金牛座","双子座","巨蟹座","狮子座","处女座","天秤座","天蝎座","射手座","摩羯座","水瓶座","双鱼座"];

    console.log(arrMonth[2]);

    console.log(arrMonth.length);

    var a = 1;
    var b = a;
    b++;
    console.log(a);

    var a = [1];
    var b = a;
    b[0]++;
    console.log(a[0]);

    // 如何把数组，赋值给另外一个数组，并且相互独立。
```

# 2. 对象

以键值对的方式存储

```js
var Jack = {
    name:"Jack Smith",
    age:19,
    address:"New York",
    say:function(){
        console.log(Jack.name);
    }
}
// 对象可以存储任何东西    1  
Jack.age  // 对象默认的取值方式就是 .   2

var arrObj = {
    a:1,
    b:2,
    c:3
}

var a = "b";
arrObj[a];  // 这种取值方法，a是一个变量
arrObj.a   // 取arrObj对象里面,键名 叫 a 的那一条数据   3

// 在一个对象里面使用this，就是指该对象   4


```
* 代码，分为数据和方法
* 代码，只有数据


# 3. 作用域
```js
var obj1 = {
    a:1,
    say:function(){
        console.log(this.a)
    },
    obj2:{
        a:2,
        say:function(){
            console.log(this.a)
        },
        obj3:{
            a:3,
            say:function(){
                console.log(this.a)
            }
        }
    }
}
```

```js
//var a = 1;
//for(var i=0;i<5;i++){
//    var a = 2;
//}
//console.log(a);

var test = function(){
    var a = 1;
}

console.log(a);


```

# 遍历
```js
for(var i=0;i<arr.length;i++){
    // 此方法可以遍历数组
}


var jack = {
    name:"jack smith",
    age:19,
    address:"NewYork",
    father:"old smith",
    brother:"david smith"
}

for(key in obj){
    var value = obj[key];
}

for(k in jack){
    console.log("jack's "+k+" is "+jack[k]);
}
```

# while / do while
