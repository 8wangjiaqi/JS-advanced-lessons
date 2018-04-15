//12、JS闭包（closure）
//一、闭包的概念

function f1(){
	var x = 1;
	function f2(){
		return x++;
	}
	return f2();
}
var f3 = f1();
console.log(f3);
console.log(f3);
//1
//1

function f1(){
	var x = 1;
	function f2(){
		return x++;
	}
	return f2;
}
var f3 = f1();
console.log(f3());
console.log(f3());
//1
//2

//概念
//闭包是由函数和与其相关的引用环境组合而成的实体
//闭包是词法作用域中的函数和其相关变量的包裹体
//例一
function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));
console.log(inc(2));
inc = createInc(5);
console.log(inc(1));
//6
//8
//6

//例二
//是两个独立的闭包
function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));
console.log(inc(2));
var inc2 = createInc(5);
console.log(inc(1));
console.log(inc2(1));
//6
//8
//9
//6

//若一个函数离开了它被创建时的作用域，它还是会与这个作用域的变量相关联
//闭包是一个函数外加上该函数创建时所建立的作用域
function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar();
}
foo();
foo();
//1
//1


//二、闭包的常见形式

//1、闭包的常见形式（以函数对象形式返回）
var tmp = 100;//注意：词法作用域,形成的闭包是否包含此行的变量tmp？
function foo(x) {
    var tmp = 3;
    return function (y) {
        console.log(x + y + (++tmp));
    }
}
var fee = foo(2); // fee 形成了一个闭包
fee(10);//16
fee(10);//17
fee(10);//18
//注：如果屏蔽了86行，会输出  113  114 115
//因为词法作用域，形成的闭包包含84行的变量tmp

function foo(x) {
    var tmp = 3;
    return function (y) {
        x.count = x.count ? x.count + 1 : 1;
        console.log(x + y + tmp,x.count);
    }
}
var age = new Number(2);
 //和相关作用域形成了一个闭包
var bar = foo(age);
bar(10);  //15 1
bar(10);  //15 2
bar(10);  //15 3

//2、闭包的常见形式（作为对象的方法返回）
function fn() {
    var max = 10;
    //若屏蔽此行，则输出100
    //因为词法作用域，形成的闭包包含变量max
    return function bar(x) {
        if(x > max){
            console.log(x);
        }else {
            console.log(max);
        }
    }
}
var f1 = fn();
var max = 100;
f1(15);
//15

//3、闭包的常见形式（作为对象的方法返回）
function counter() {
    var n = 0;
    return {
        count:function () {return ++n;},
        reset:function () {n = 0;return n;}
    }
}
var c = counter();
var d = counter();
console.log(c.count());
console.log(d.count());
console.log(c.reset());
console.log(c.count());
console.log(d.count());
//1
//1
//0
//1
//2


//三、闭包的作用及常用场景
//1、闭包作用
//可通过闭包来访问隐藏在函数作用域内的局部变量
//使函数中的变量被保存在内存中不被释放（单例模式）
function f1(){
    var n = 999;
    function f2(){
        console.log(++n);
    }
    return f2;
}
var f = f1();
f();//1000
f();//1001


var n = 10;
function f1(){  //函数f1中的局部变量n一直保存在内存中，并没有在f1调用后被自动清除
    var n=999;
    nAdd=function(){n+=1;};
    function f2(){  //f2被赋给了一个全局变量，全局变量没被释放,f2始终在内存中，而f2和n形成了对应作用域（f1）的闭包
        console.log(n);
    }
    return f2;
}
var result=f1();
result(); 
nAdd();
result();
//999
//1000
