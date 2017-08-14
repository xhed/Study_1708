# 一切皆数据

* 程序是有数据和方法构成的
* 程序只有数据

# 关键字

    就是这门程序的“语言”
    保留字，是未来可能要用的关键字，为了安全，一定不要使用
    ballTop

# 一切皆对象 (JS)

虽然，基本数据类型中，直接写数字、undefined、null的时候，无法得到任何对象内的键值对

但是在js中，任何数据类型，一旦赋值给变量之后，都是对象

对象的数据，不按书写顺序来

```js
{
    键:值,
    键:值
}

var a = 1;

1               number    Number
"1"             string    String
true            boolean   Boolean
null   
undefined


[1,2,3]         object    Array
{}              object    Object    
```

# Function

    function关键字，声明函数，与var类似
    同样符合“声明提前，赋值留在原地”

```js
var a = function(){
    // 声明变量，赋值一个函数
}

function a(){
    // 声明函数
}

a(); // 函数的调用，执行

// a,b 叫做形参，形式上的参数，形参只有在本函数内部使用
function add(a,b){
    return a+b;
}

// 当函数调用的时候，传入实际的参数，实参
add(1,2);


return //在函数内部，return什么东西，函数调用过程，就完全相等这个东西
```