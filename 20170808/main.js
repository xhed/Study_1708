var bridgeWidth = prompt('请输入弦长');
var bridgeHeight = prompt('请输入拱高');

var topAngle = Math.atan((bridgeWidth/2)/bridgeHeight);
var centerAngle = Math.PI - (topAngle*2);
var R = (bridgeWidth/2) / Math.sin(centerAngle);

var bridgeLength = centerAngle * R * 2;

alert('您输入的弦长是：'+bridgeWidth+'米; 拱高是：'+bridgeHeight+'米;最终计算得到的桥面长：'+bridgeLength);