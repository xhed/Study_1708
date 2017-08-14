var Img = document.querySelector("img");
var buttonRight = document.querySelector("#b-right");
var buttonLeft = document.querySelector('#b-left');
var imgWidth = Img.clientWidth;
var imgHeight = Img.clientHeight;
var imgLeft = 0; // 信号量
var Movetime = 1.4;  // 控制总时间 
var zhenlv = 60;     // frame per second  帧率
var InterTime = 1000/zhenlv;  

Img.style.position = "relative";

buttonRight.onclick = function(){
    imgLeft += imgWidth;

    var v = imgLeft*InterTime / (Movetime*1000);

    var i = 0;
    
    var intervalRight = setInterval(function(){
        i+=v; // !
        if(i<=imgLeft){
            Img.style.left = i + 'px';
        }else{
            Img.style.left = imgLeft + "px";
            clearInterval(intervalRight);
        }

        console.log(i);

    },InterTime)
}

buttonLeft.onclick = function(){
    imgLeft -= imgWidth;
    Img.style.left = imgLeft + "px";
}