//5.24class
//25、JS事件及事件流


// window.onload=function(){   //onload在图像和页面加载完成后执行
//     console.log("window onload");
//     var div1=document.getElementById("div1");
//     div1.onclick=function(){
//         console.log("div1.onclick");
//     }
// }

window.onload = function () {
    console.log("window onload");
    var div2 = document.getElementById("div2");
    div2.onmouseover = function () {
        console.log("div2 mouseover");
    }
    // function div1click() {    //只有在window.onload回调函数外才会执行
    //     console.log("div1 click");
    // }
}
function div1click() {
    console.log("div1 click");
}


// window.onclick= function () {
//     console.log("window onload");
//     var div1 = document.getElementById("div1");   //点击第一次的时候只是绑定了，但没有执行，第二次才会执行接下来的
//     div1.onclick=function(){
//         console.log("div1.onclick");
//     }
    
// }

// window.onload=function(e){
//     console.log(e.target);
//     console.log(this);
//     var div1=document.getElementById("div1");
//     div1.onclick=function(e){

//         //console.log(e.clientX,e.clientY,e.ctrlKey);
//         //console.log(e);
//         console.log(e.type,e.target);
//         console.log(e.target,this);   //this是指监听到的事件

// console.log(e);
    // console.log(e.__proto__);
    // console.log(e.__proto__.__proto__);
    // console.log(e.__proto__.__proto__.__proto__);
    // console.log(e.__proto__.__proto__.__proto__.__proto__);


        // for(var k in e){
        //     console.log(k,e[k]);
        // }
        // for(var k in e.__proto__){
        //     console.log(k);
        // }
        // for(var k in e.__proto__.__proto__){
        //     console.log(k);
        // }
        // for(var k in e.__proto__.__proto__.__proto__){
        //     console.log(k);
        // }

//自定义事件
    // //document去监听这个事件
    // document.addEventListener("xx",function(){console.log("11")});   //某一个结点捕获这个事件
    // //一旦监听到这个事件，分发事件
    // document.dispatchEvent(new Event("xx"));

//     document.addEventListener("myclick",function(e){console.log(e.type)}); 
//     document.dispatchEvent(new Event("myclick"));

//     } 
// }


//二、JS事件响应
//  window.onload=function(e){
//         var div1=document.getElementById("div1");
//  }


// window.onload=function(e){
//     var div1=document.getElementById("div1");
//     var div2=document.getElementById("div2");
//     function clickHandler(e){
//         console.log(e.target);
//     }

//     // div1.onclick=clickHandler;
//     // div1.onclick=function(){
//     //     console.log("xx");   //只输出这句话   覆盖掉console.log(e.target);
//     // }
//     // div2.onclick=clickHandler;
//     // div2.onclick=null;

//     div1.addEventListener("click",clickHandler);
//     //div1.removeEventListener("click",clickHandler);
    
//     console.log(div1.__proto__.__proto__);
//     console.log(div1.__proto__);
//     console.log(div1.__proto__.__proto__.__proto__);
//     console.log(div1.__proto__.__proto__.__proto__.__proto__);
//     console.log(div1.__proto__.__proto__.__proto__.__proto__);
//     console.log(div1.__proto__.__proto__.__proto__.__proto__.__proto__);

// }
// // function div2click(e){
// //     console.log("xxx");
// // }