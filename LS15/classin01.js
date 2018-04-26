//4.23class
//15、JS原型继承
//一、JS对象及继承方式综述

//创建对象的三种方法

//a.通过字面量创建JS对象
var obj1={x:11};
//通过Object工场创建JS对象
var obj2=Object.create(obj1);
obj2.y=2;

var empty = {};
var obj2 = Object.create(empty,{
   x:{value:1}, y:{value:2,enumerable:true}
});
console.log(obj2);
console.log(obj2.hasOwnProperty("x"));
//Object {y: 2, x: 1}
//true
undefined
for(var k in obj2){
	console.log(k,obj2[k]);
}

//y 2
//构造函数的方式创建JS对象(实际开发中使用较多)
var Obj3=function(){
}
var obj3=new Obj3();
obj3;

var Person=function(name){
    this.name = name;
}
var p=new Person("abc");
console.log(p.name);
//abc

var Person=function(name){
    this.name = name;
}
var p1=new Person("abc");
var p2=new Person("def");
console.log(p.name,p2.name);
//abc def

//检测是否为Person类型
p1 instanceof Person;  //一看见大写的就是类或者构造函数（一个意思）
//true


var obj1={x:1};
var obj2=Object.create(obj1);
obj2.y=2;
var obj3=Object.create(obj1);
obj3.y=3;
3
console.log(obj1,obj2,obj3);
//Object {x: 1} Object {y: 2} Object {y: 3}

obj2.x;
//1
obj3.x;
//1
obj2.__proto__.x=5;
//5
obj2.x;
//5
obj3.x;
//5  共享



function Person(){
	this.name="xinxin";
	console.log("hi");
}
var p=new Person();
console.log(p);
//hi
//Person {name: "xinxin"}
Person();
//hi


function Person(name,age){
	this.name=name;
	this.age=age;
}  //把共性的方法提出来，放到原型上，这样可以优化内存
Person.prototype.sayHi=function(){
	console.log(this.name,this.age);
}
var p=new Person("Mike",23);
p.sayHi();
//Mike 23
p.__proto__==Person.prototype;
//true
Person.__proto__==Object.prototype;
//false
Person.__proto__===Function.prototype;
//true


function MyObj() { }
MyObj.prototype.z = 3;
var obj = new MyObj();
obj.x = 1;
obj.y = 2;
console.log(obj.x);
console.log(obj.y);
console.log(obj.z);
console.log("z" in obj);
console.log(obj.hasOwnProperty("z"));
//1
//2
//3
//true
//false
