//var a = 1;
//for(var i=0;i<5;i++){
//    var a = 2;
//}
//console.log(a);
// var a = 2

// var test = function(){
//     a = 1;
// }
// test();

// console.log(a);

// var a 声明变量;
// a  调用变量;
// a=1;
// console.log(a);

// var jack = {
//     name:"jack smith",
//     age:19,
//     address:"NewYork",
//     father:"old smith",
//     brother:"david smith"
// }

// for(key in obj){
//     var value = obj[key];
// }

// for(k in jack){
//     console.log("jack's "+k+" is "+jack[k]);
// }


// var n = 3;
// var i = 0;

// while(i<n){
//     console.log(i);
//     i++;
// }

// var i=4;
// var n=3;
// do{
//     console.log(i)
//     i++;
// }while(i<n) // 0 1 2



// var guessNumber = 67;
// do{
//     var a;
    
//     if(a!=undefined&&a!=0){

//         if(a>guessNumber){
//             a = prompt("数字"+a+"太大");
//         }else{
//             a = prompt("数字"+a+"太小");
//         }

//     }else{
//         a = prompt("请输入一个非零数字");
//     }

// }while(a!=guessNumber)

// alert("恭喜你，答对了，数字是："+guessNumber);

// var guessNumber = 67;
// while(true){
//     var a;
//     if(a==undefined){
//         a = prompt("请输入第一次猜数")
//     }else if(a>guessNumber){
//         a = prompt(a+"太大了");
//     }else if(a<guessNumber){
//         a = prompt(a+"太小了");        
//     }else{
//         alert('你对了，就是'+a);
//         break; // 跳出本循环体
//     }
// }

for(var i=0;i<1000;i++){
    if(i==0) continue; // continue 跳出本次循环 ，继续下一次
    i+=100;
    console.log(i);
}

// 1-9之间，不是5的所有数乘法



//输出，rgb 都大于50和小于200的颜色组合，并且，rgb三个值中，不能出现两个值一样的

// 网页打开，小球像随机方向运动
// 速度为 5px / 10ms
// 运动了100次之后，换随机方向

// 不能出边界