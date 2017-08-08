/**
 * 
 */
// var bridgeWidth = prompt('请输入弦长');
// var bridgeHeight = prompt('请输入拱高');

// var topAngle = Math.atan((bridgeWidth/2)/bridgeHeight);
// var centerAngle = Math.PI - (topAngle*2);
// var R = (bridgeWidth/2) / Math.sin(centerAngle);

// var bridgeLength = centerAngle * R * 2;

// alert('您输入的弦长是：'+bridgeWidth+'米; 拱高是：'+bridgeHeight+'米;最终计算得到的桥面长：'+bridgeLength);


var testDom = document.getElementById("Test");
var testDomTop = 0;
var upToDown = true; // true 代表从上往下运动，false代表从下网上
var time = 0;       // 每次运动的当前时间
var height = 400;   // 下落的具体高度
var interval = 10; // 多久运动一次 ms
var g = 9.87*160;
var maxV = 0;

setInterval(function(){
    // console.log(testDomTop);
    time+=interval;

    if(upToDown){
        // testDomTop+=5;
        testDomTop = 0.5*g*Math.pow(time/1000,2);
    }else{
        // testDomTop-=5;
        // console.log(maxV*time/1000);
        // console.log(0.5*g*Math.pow(time/1000,2))
        testDomTop = height - (maxV*time/1000 - 0.5*g*Math.pow(time/1000,2));
    }

    if(testDomTop>height){
        maxV = (time/1000)*g;
        console.log(maxV);
        time = 0;
        upToDown = !upToDown;
    }

    if(testDomTop<0){
        // console.log(maxV);
        time = 0;
        upToDown = !upToDown;
    }


    testDom.style.top = testDomTop + "px";

},interval)