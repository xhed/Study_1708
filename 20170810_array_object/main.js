// var a = [1,2,3,19,5,12,6,3,4];
// var b = [];

// b = b.concat(a);

// var sortNumber = function(m,m) {
//     return n-m;
// }

// var b = a.slice(1);
// var b = a.sort(sortNumber);

// b[1]++;

// console.log(a,b);

// b[0]++;
// console.log

// 输出九九乘法表

// for循环
// 字符串拼接
// 转义

/**
 * row 代表行数
 * col 代表列数
 * 每一个，都显示，列数 * 行数
 */
// var line = "";
// for(var row=1;row<10;row++){
//     for(var col=1;col<=row;col++){
//         line += col +"x"+row+"="+col * row+"\t";
//     }
//     line += "\n";
// }
// console.log(line);

// var Cont = document.getElementById("Container");

// for(var r=0;r<256;r+=50){
//     for(var b=0;b<256;b+=50){
//         for(var g=0;g<256;g+=50){
//             var color = "rgb("+r+","+g+","+b+")";
//             var tmpElement = document.createElement('div');
//             tmpElement.style.width = "20px";
//             tmpElement.style.height = "20px";
//             tmpElement.style.background = color;
//             tmpElement.style.float = "left";
//             Cont.appendChild(tmpElement);
//         }
//     }
// }

// var a = document.createElement('div');  // 1
// a.style.width = "4px";
// a.style.height = "4px";
// a.style.background="rgb(19,100,89)";

// Cont.appendChild(a); // 2


var r = [24,99,128,78,89];
var g = [89,32,200];
var b = [8,178,89];

for(var ri=0;ri<r.length;ri++){
    for(var gi = 0;gi<g.length;gi++){
        for(var bi=0;bi<b.length;bi++){
            var color = "rgb("+r[ri]+","+g[gi]+","+b[bi]+")";
            var el = document.createElement('div');
            el.style.width="15px";
            el.style.height = "15px";
            el.style.background= color;
            el.style.float = "left";
            document.body.appendChild(el);
        }
    }
}
