var a=1;
function f1(){
	var b=2;
	function f2(){
		console.log(a,b);
    }
    f2();
}
f1();
//1 2

//this不进行作用域传递
//先调用在栈底，从下到上调用

//给全局对象添加一个自定义的属性
var a=1;
function thisTest(){
	this.a=2;
    delete this.b;
	this.c="5";
}
thisTest();
console.log(a,c);
//2 "5"


function thisTest(){
	a=2;   //没有写var，就是定义到windows上的，定义到全局的
}
thisTest();
console.log(a);
//2


function thisTest(){
	var a=2;   //var a=b=2;  报错， a is not defined
	b=2;
}
thisTest();
console.log(a,b);


var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        this.x = x;
        this.y = y;
    }
};
point.moveTo(1,1);//this绑定到当前对象，即point对象上
console.log(point);
// Object {x: 1, y: 1}


function Person(age){
	this.age=age;
}
var p=new Person(23);

p.age;
//23
var p2=new Person(50);
p2.age;
//50
//this指向的都是实例化出来的对象

var Person=function(name,age){
	this.name=name;
	this.age=age;
	this.showMe=function(){                 //不加this，就会报错，p1.showMe未定义
		console.log(this.name,this.age)
    }
}
var p1=new Person("Mike",23);
var p2=new Person("Lucy",22);
p1.showMe();
p2.showMe();

//私有属性，形成了闭包
var Person=function(namePrivate,agePrivate){
	this.namePrivate=namePrivate;
	this.agePrivate=agePrivate;
	this.showMe=function(){                
		console.log(namePrivate,agePrivate);
    }
}
var p1=new Person("Mike",23);
p1.showMe();
//Mike 23


//间接调用中的this
objA={name:"AA",x:1};
objB={name:"BB",x:5};
function test(){
	console.log(this.name,this.x);
}
objA.fun=test;
objA.fun();
objA.fun.call(objB);
//AA 1
//BB 5


//当函数嵌套时候，this不进行作用域传递
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        //内部嵌套函数
        function moveToX() {
            this.x = x;//this绑定到了哪里？进   //作为一般函数处理
        }
        //内部嵌套函数
        function moveToY() {
            this.y = y;//this绑定到了哪里？
        }
        moveToX();//moveToX.call(this);通过间接调用来解决
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
//console.log(window.x,window.y);  //2 2

//解决方案：
//1
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        var that = this;//关键的一行，软绑定   变量可以进行传递
        //内部嵌套函数
        function moveToX() {
            that.x = x;//this改为that
        }
        //内部嵌套函数
        function moveToY() {
            that.y = y;//this绑定到了哪里？
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
//console.log(window.x,window.y);
//Object {x: 2, y: 2}
console.log(window.x,window.y);
//undefined undefined



function Point(x,y){
	this.x=x;
    this.y=y;
	this.moveXY=function(x,y){
		var that=this;
		function moveX(x){
			that.x+=x;
        }
		function moveY(y){
			that.y+=y;
        }
		moveX.call(this,x);
		moveY.apply(this,[y]);
    }
}
var p=new Point(2,3);
p.moveXY(1,1);
console.log(p);
//-  Point {x: 3, y: 4}