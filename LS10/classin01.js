//11JS中的IIFE模式
//一、什么是IIFE以及其使用方式

//普通函数调用使用
function min(x,y){
	return x<y?x:y;
}
min(2,3)
//2

//立即执行表达式，不需要再次调用函数，就可以立即返回结果
//两种写法
(function min(x,y){
	return x<y?x:y;
}(2,3));
//2
(function min(x,y){
	return x<y?x:y;
})(2,3);
//2

//立即执行表达式可以匿名调用函数
(function (x,y){
	return x<y?x:y;
}(2,3));
//2    

//与运算符结合的写法  先进行短路原则的判断
true && function(a,b){
    return a>b?a:b;
}(5,9);
//9

0 && function(a,b){
    return a>b?a:b;    //false 直接返回左操作数
}(5,9);
//0

//立即执行后还会进行一个逻辑运算
!function(x,y){
    return x==y?true:false;  //双等进行了类型转换，true ——>!——>false
}("5",5);
//false
!function(x,y){
    return x===y?true:false;  //双等进行了类型转换，true ——>!——>false
}("5",5);
//true

//注：立即执行表达式必须要用（）括起来
//function(x,y){
//    return x==y?true:false; 
//}("5",5);
//报错
var i = function(){
    return 10;
}(); //i为10
//undefined
var i = function(){
    return 10;
}(i); //i为10
//undefined
var i = function(){
    return 10;
}(5); //i为10
//undefined
i
10
var i = function(){
    return 10;
}; //i为10
//undefined
i
//function (){
 //   return 10;
//}

//注：
(function(){
    console.log("111");
})();    //一定要加“；”，因为是一个立即执行还是一个表达式，不是独立分割语句
(function(){
    console.log("222");
})();


//二、通过IIFE来解决的问题（JS缺陷）

//避免文件之间的全局污染
//(function () {  
var x = 10;
document.onclick = function () {
    // console.log("x = ",x);
    alert("x = "+x);
};
//})();
//function () {
    // console.log("x = ",x);
  //  alert("x = "+x);
//}

(function () {  
var x = 10;
document.onclick = function () {
    // console.log("x = ",x);
    alert("x = "+x);
};
})();    
//undefined

//引用立即执行表达式，防止受到污染
//把函数封装到立即执行表达式中，不会受到污染

function f(){
    var getNumFuncs = [];
    for(var i=0;i<10;i++){
		(function(j){   
        	getNumFuncs[j] = function(){
            	return j;
        };
    }(i));
    }
    return getNumFuncs;
}
var tmp = f();
tmp[0]();
//0
tmp[1]();
//1
tmp[2]();
//2
//十个函数作用域，每一个都是独立的，相当于调用了十次循环

//每个元素都是一个函数对象，有10个元素，没有块作用域，只创建了一个
//解决：添加了一个立即执行表达式，创建10次函数作用域，每个开辟一个空间存变量，把i赋给对应的变量
function f(){
    var getNumFuncs = [];
    var j;
    for(var i=0;i<10;i++){
        j = i;
        getNumFuncs[i] = function(){
            return j;
        };
    }
    return getNumFuncs;
}
var tmp = f();
tmp[3]();
//9
tmp[4]();
//9
