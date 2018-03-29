//二、函数对象的属性及方法


//函数对象属性之arguments 实参集合（类似数组的一个对象）
var foo = function (a,b){
    console.log(arguments);
    console.log(arguments === test.arguments);

    console.log(arguments.length);
    var args = Array.prototype.splice.call(arguments,0);
    console.log(args);
};
foo(1,2,3,4);
//[1, 2, 3, 4]
//报错


function foo(x,y,z){};
console.log(foo.length);
//3
//length 指的是形参的数目
//arguments.length 实参的数目


//caller函数对象属性之caller 获取调用当前函数的函数
var obj = {
    foo1:function(){
        console.log(this.foo1.caller);
    },
    foo2:function abc(){
        this.foo1();
    }
};
obj.foo1();
obj.foo2();
//null
//function abc(){
//       this.foo1();
//   }

//callee  指的就是调用的函数
//arguments.callee（匿名可以使用）
(function(n){
    if (n <= 0)
        return 1;
    else
        return n * arguments.callee(n - 1);
}(4));           //(4)实现了匿名调用
//24

//Object:标准内置对象，也是构造函数
//Object   instanceof   Function

//__proto__ 原型    prototype   属性
var o={};
o.__proto__==Object.prototype;
//true  
new Obiect;

var arr=[];
arr.__proto__===Array.prototype;
//true

Object.__proto__===Function.prototype;
//true

//bind  强制绑定
var x = 45;
var obj = {
    x:23,
    test:function(){
		function foo(){
			console.log(this.x);
		}
		foo.bind(this)();//var fee = foo.bind(this); fee();
		foo();
    }
};
obj.test();
// 23   45
//this指的就是obj
//foo.bind(this)  返回一个函数对象，强制绑定到obj上
//函数的绑定方法最终返回的都是一个函数变量
