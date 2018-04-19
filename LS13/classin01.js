//2018年4.16class
//13、JS对象综述

//一、JS对象简介
//定义一个对象
var xinxin={
	name:"xinxin",
    age:3,
    show:function(){
        console.log("我是"+this.name+"今年"+this.age+"岁");
    }
}
xinxin.show();
//我是xinxin今年3岁

Person=function(name){
	this.name=name;
}
var p=new Person("unkown");

// function (name){
// 	this.name=name;
// }
p.name;
// "unkown"
p instanceof Person;
// true
//注：JS中对象的key值一定是字符串类型

console.log(typeof Array);
console.log(typeof Math);
console.log(typeof Date);
console.log(typeof Function);
//function
//object
//function
//function
console.log(typeof JSON);
//object

//JS对象分类
//1、内置对象（native object）由ECMAScript规范定义的对象或构造器对象（数组、函数等）
//2、宿主对象（host object）由JS解析器所嵌入的宿主环境定义的（如：window、document）
//3、自定义对象（user-defined object）运行中的用户自定义JS代码创建的对象

var i = new String("str");          // String Object
var h = new Number(1);              // Number Object
var g = new Boolean(true);          // Boolean Object
var j = new Object({name : "Tom"}); // Object Object
var k = new Array([1, 2, 3, 4]);    // Array Object
var l = new Date();                 // Date Object
var m = new Error();
var n = new Function();
var o = new RegExp("\\d");
//构造函数是函数，也是对象
String instanceof Object;
//true
String instanceof Function;
//true
String instanceof Number;
//false
Math instanceof Function;
//false
Math instanceof Object;
//true


console.log(new Function() instanceof Function);
//true
//相当于实例化出一个函数，是Function
console.log(new Function() instanceof Object);
//true
console.log((new(new Function())) instanceof Function);
//false
console.log((new(new Function())) instanceof Object);
//true
//new Function()实例化出一个函数，然后再new一下就是实例化出一个对象了



//二、JS对象的属性
var o = {
    _x:1.0,//如果都写成x会怎样
    get x(){
        return this._x;//如果都写成x会怎样
    },
    set x(val){
        this._x = val;//如果都写成x会怎样
    }
};
console.log(o.x);//1
o.x = 2;
console.log(o.x,o._x);//2 2
//o.hasOwnProperty("x");//访问器属性
//o.hasOwnProperty("_x");//数据属性


//一切对象的源头都是none

//访问器属性（accessor，或称为访问器），访问属性的方法，注意：访问和设置时不加括号
//JS解析器中{}为一个的代码块，加一个小括号({})就是一个对象了
var o = {
    _x:1.0,
    get x(){
        return this._x;
    },
    set x(val){
        this._x = val;   //如果改为x 结果为  1  
                                        //1 1
    }
};
console.log(o.x);//1
o.x = 2;
console.log(o.x,o._x);//2 2
//访问器属性
o.hasOwnProperty("x"); //true
//数据属性
o.hasOwnProperty("_x"); //true


var Person =function(name){
    this.name=name;
}
var p=new Person("abc");
p.__proto===Person.prototype;
//false
Person.__proto__===Function.prototype
//true

//访问对象的属性
var obj={
	x:12
}
obj.x;
//12
obj["x"];  //必须是字符串类型
//12



var obj={
    x1:12,
    x2:23,
    x3:34
}
for(var i=0;i<4;i++) //只有数组和字符串可以用length
{
    console.log(obj["x"+i]);
}


//三、JS对象相关操作
//1、通过字面量的方式创建 JS对象
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.num);//10
console.log(obj.str);//Hi
console.log(obj.show());//Hi
console.log(obj.__proto__);//Object {}
console.log(obj.__proto__ === Object.prototype);//true



//2、通过Object工场方法创建JS对象,
//注：JS对象是通过原型链的方式实现的对象继承
var newObj = Object.create(obj);//newObj的原型是obj
newObj.age = 23;
console.log(newObj.num);
console.log(newObj.str);
console.log(newObj.show());
console.log(newObj.age);//自有属性
console.log(newObj.__proto__);
console.log(newObj.__proto__ === obj);


//对象属性的增删改查
//1、添加和删除自有属性
//2、访问和修改自有属性
//3、通过点与中括号访问属性的区别
var obj = {};
obj.x = 2;//直接添加属性
console.log(obj.x);//通过.访问属性
obj.x = 5;//设置属性
console.log(obj["x"]);//通过[]访问属性
delete obj.x;//删除属性
console.log(obj.x);
//2 
//5
