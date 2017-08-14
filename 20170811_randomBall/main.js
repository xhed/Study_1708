var Ball = document.getElementById('Ball');
var containerWidth = 800;
var containerHeight = 600;

/**
 * 通过恒定速度，和随机的运动方向，计算出来随机的x轴和y轴随机速度
 * @param {number} v 像各个方向运动时的恒定速度
 */
var randomV = function(v){
    var randomAngle = (Math.PI * 2)*Math.random();
    var vy = v*Math.sin(randomAngle);
    var vx = v*Math.cos(randomAngle);
    return {
        x:vx,
        y:vy
    }
}

var ballTop = 0;
var ballLeft = 0;
var v = randomV(5);
var randomMove = setInterval(function(){

    ballTop += v.y;
    ballLeft += v.x;

    if(ballLeft<0){
        ballLeft = 0;
        v = randomV(5);
    }else if(ballLeft>containerWidth-40){
        ballLeft = containerWidth-40;
        v = randomV(5);
    }else if(ballTop<0){
        ballTop = 0;
        v = randomV(5);     
    }else if(ballTop>containerHeight-40){
        ballTop = containerHeight-40;
        v = randomV(5);     
    }else{

    }

    Ball.style.top = ballTop + "px";
    Ball.style.left = ballLeft + "px";

},10)