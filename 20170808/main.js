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

setInterval(function(){
    console.log(testDomTop);

    if(upToDown){
        testDomTop+=5;
    }else{
        testDomTop-=5;
    }

    if(testDomTop<0||testDomTop>200){
        upToDown = !upToDown;
    }

    testDom.style.top = testDomTop + "px";
},10)


// if(){

// }else{

// }