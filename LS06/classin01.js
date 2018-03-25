//07-JS函数及函数参数
//1、函数的定义与调用

//函数的3种定义方式
//1、通过函数声明的形式来定义（要有函数名）
function max(a,b){
    return a>b?a:b;
}
max(2,3);

//2、通过函数表达式的形式来定义（可以是没有函数名的匿名函数，有名的话方便调用栈追踪）
var max = function (a,b){ 
    return a>b?a:b;
};
max(2,3);
//有函数名字更容易追踪他
var str="return a>b?a:b";
var max=new Function("a","b",str);
//new Function  是非常灵活的，动态生成函数，可以传字符串
//Function 是一个构造函数，用来实例化对象

//3、通过Function构造函数实例化的形式来定义（JS中函数也是对象，函数对象）
var max = new Function("a","b","return a>b?a:b");
max(2,3);

//函数的4中调用方式
//1、作为函数直接调用（非严格模式下this为全局对象，严格模式下为undefined）

//this指的是函数调用的主体就是window
function foo(){
    conaole.log("foo");
}
foo==window.foo;      //函数foo作为window属性存在
//true

//2、作为方法调用（this为调用此方法的对象）

//this指的就是调用函数的主体object
var x=45;
var test=function(){
	console.log("输出:",this.x);
}
var obj={
	x:23
};
obj.test=test;    //添加了一个方法test
obj.test();       //主体就是obj
test();           //主体就是window
// 输出: 23
// 输出: 45

var x=45;
var obj={
    x:23,
	test:function(){
		function foo(){
		console.log(this.x);
     }
	foo();
    }
};
obj.test();
//45

//3、通过call( )和apply( )间接调用（this为函数对象的call/apply方法的首个参数，移花接木）
//call 和 apply
//objA 和objB 要有相似的地方
//定义两个对象，第二个对象可以直接使用另一个对象的方法（移花接木，吸星大法）
var fish = {
    name:"fish",
    swim:function (m,n) {
        console.log("i'm "+this.name+" i cam swim ___",m,n);
    }
};
var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};
var me = {
    name:"ABC"
};
bird.fly(5,6);
fish.swim.call(me,3,4);
bird.fly.call(me,7,8);
bird.fly.apply(me,[7,8]);
//i'm:polly i can fly ___ 5 6
//i'm ABC i cam swim ___ 3 4
//i'm:ABC i can fly ___ 7 8
//i'm:ABC i can fly ___ 7 8

//如果后面有参数，call直接写，apply写成数组

//4、作为构造函数调用（this为实例化出来的对象）
function Person(name){
    this.name = name;
}
Person.prototype.sayHi = function(){
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person("Jack");
p1.sayHi();
//Hi,i'm Jack