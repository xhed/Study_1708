var img = document.querySelector("img")
var buttonRight = document.querySelector("#b.right");
var imgWidth = Img.clientWidth;
var imgheight = img.clientweight;
var imgleft = 0; //信号量

img.style.position = "relative";


bottonRight.onclick = function(){
    imgleft+=imgWidth;
    img.style.left = imgleft + "px";
}