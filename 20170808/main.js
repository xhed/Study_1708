var testDom1 = document.getElementById("Test1");
var testDom2 = document.getElementById("Test2");
var testDom3 = document.getElementById("Test3");
var testDom4 = document.getElementById("Test4");
var testDom5 = document.getElementById("Test5");
var testDom6 = document.getElementById("Test6");
var g = 9.87*160;

var randomBgColor = function(dom){
    var r = Math.round(Math.random()*100+100);
    var g = Math.round(Math.random()*100+100);
    var b = Math.round(Math.random()*100+100);
    dom.style.backgroundColor = "rgb("+r+","+g+","+b+")";
}

var bindBall = function(dom,g,vx){

    var domTop = 0;
    var domLeft = 0;
    var upToDown = true; // true 代表从上往下运动，false代表从下网上
    var leftToRight = true;
    var time = 0;       // 每次运动的当前时间
    var height = 665;   // 下落的具体高度
    var width = 1230;
    var interval = 5; // 多久运动一次 ms
    var maxV = 0;
    randomBgColor(dom);

    setInterval(function(){
        time+=interval;

        if(upToDown){
            domTop = 0.5*g*Math.pow(time/1000,2);
        }else{
            domTop = height - (maxV*time/1000 - 0.5*g*Math.pow(time/1000,2));
        }

        if(domTop>height){
            // randomBgColor(dom);
                
            maxV = (time/1000)*g;
            console.log(maxV);
            time = 0;
            upToDown = !upToDown;
        }

        if(domTop<0){
            // randomBgColor(dom);
            // console.log(maxV);
            
            time = 0;
            upToDown = !upToDown;
        }

        if(leftToRight){
            domLeft+=vx;
        }else{
            domLeft-=vx;
        }

        if(domLeft<0||domLeft>width){
            // randomBgColor(dom);
            leftToRight = !leftToRight;
        }

        dom.style.top = domTop + "px";
        dom.style.left = domLeft + "px";

    },interval)
}

bindBall(testDom1,g,1)
bindBall(testDom2,g,2)
bindBall(testDom3,g,3)
bindBall(testDom4,g,4)
bindBall(testDom5,g,5)
bindBall(testDom6,g,6)