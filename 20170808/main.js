var testDom = document.getElementById("Test");
var testDomTop = 0;
var testDomLeft = 0;
var upToDown = true; // true 代表从上往下运动，false代表从下网上
var leftToRight = true;
var time = 0;       // 每次运动的当前时间
var height = 670;   // 下落的具体高度
var interval = 5; // 多久运动一次 ms
var g = 9.87*160;
var maxV = 0;

var randomBgColor = function(dom){
    var r = Math.round(Math.random()*100+100);
    var g = Math.round(Math.random()*100+100);
    var b = Math.round(Math.random()*100+100);
    console.log("rgb("+r+","+g+","+b+")")
    dom.style.backgroundColor = "rgb("+r+","+g+","+b+")";
}

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
        randomBgColor(testDom);
            
        maxV = (time/1000)*g;
        console.log(maxV);
        time = 0;
        upToDown = !upToDown;
    }

    if(testDomTop<0){
        randomBgColor(testDom);
        // console.log(maxV);
        
        time = 0;
        upToDown = !upToDown;
    }

    if(leftToRight){
        testDomLeft++;
    }else{
        testDomLeft--;
    }

    if(testDomLeft<0||testDomLeft>800){
        randomBgColor(testDom);
        leftToRight = !leftToRight;
        // testDom.style.backgroundColor = "rgb(12,23,111)";
    }

    testDom.style.top = testDomTop + "px";
    testDom.style.left = testDomLeft + "px";

},interval)