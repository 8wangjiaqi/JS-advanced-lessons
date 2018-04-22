//14、JS对象属性特性
//一、对象属性特性简介

//三种定义对象的方法
var obj1={x:1};
var obj2=Object.create(obj1);
obj2.y=2;

var Obj3=function(){this.z=3;}
var obj3=new  Obj3();
console.log(obj1,obj2,obj3);
//Object {x: 1} Object {y: 2} Obj3 {z: 3}


var objProto = {
    z:3
};

var obj = Object.create(objProto);
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3
object.toString();

obj.toString();
//"[object Object]"//说明原型上肯定有这个方法，才能调用成功

for(var k in obj){//通过for...in遍历所有原型链上的属性
    console.log(k,obj[k]);//是否能遍历到toString？
}
//遍历原型上所有属性的方法

//所有的属性都有一定的特性


//Object的静态方法Object.defineProperty，为了保护一些
var obj={
    x:1,
    y:2
};
for(var k in obj){
    console.log(k,obj[k]);
}
//x 1
//y 2

var obj={
    x:1,
    y:2
};
Object.defineProperty(obj,"x",{enumerable:false});  //如果为true，就可以访问得到
for(var k in obj){
    console.log(k,obj[k]);
}
//y 2
//x不可遍历得到，保证了代码的相对安全



//二、对象属性（数据属性）的特性
//JS对象属性（数据属性）的特性
//1、可枚举特性（[[enumerable]]），属性是否可枚举
    //所有的属性都有一定的特性
//Object的静态方法Object.defineProperty，为了保护一些
var obj={
    x:1,
    y:2
};
for(var k in obj){
    console.log(k,obj[k]);
}
//x 1
//y 2

var obj={
    x:1,
    y:2
};
Object.defineProperty(obj,"x",{enumerable:false});  //如果为true，就可以访问得到
for(var k in obj){
    console.log(k,obj[k]);
}
//y 2
//x不可遍历得到，保证了代码的相对安全

//2、属性的值（[[value]]）,对应属性的值
//可写特性（[[writable]]），确定属性是否可写性
//可配置特性（[[configurable]]），确定属性是否能删除和其他特性是否可配置
var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,   //改为true 输出  //Mike  Lucy  Lucy
    configurable:false,
    enumerable:true,
    value:"Mike"
});
console.log(person.name);
person.name = "Lucy";
console.log(person.name);
delete person.name;
console.log(person.name);
//Mike
//Mike
// Mike

var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:true,
    configurable:true,
    enumerable:true,
    value:"Mike"
});
console.log(person.name);
person.name = "Lucy";
console.log(person.name);
delete person.name;
console.log(person.name);
//Mike
//Lucy
//undefined

var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,
    configurable:false,
    enumerable:false,
    value:"Mike"
});
console.log(person.name);
person.name = "Lucy";
console.log(person.name);
delete person.name;
console.log(person.name);
//Mike
//Mike
//Mike

var obj = {
    x:1,
    y:2
};
//直接添加的属性，其所有特性默认都是true
obj.z = 3;

//通过Object.defineProperty方法添加的属性，除了手动修改，其所有特性默认都是false
Object.defineProperty(obj,"w",{value:456,configurable:true});//writable,enumerable没有指定，所以默认为false
for(var k in obj){
    console.log(k,obj[k]);
}
obj.w=789;  //静默的失败
//789
obj.w;
//456

//手动改为可读写，便可更改其属性值
Object.defineProperty(obj,"w",{write:true});
//Object {x: 1, y: 2, z: 3, w: 456}
obj.w=789;
//789
obj.w;
//456

var obj1={
    _name:"Lucy",
    get name(){return this._name;}
};
obj1.name;
//"Lucy"

var obj={x:1};
undefined
Object.defineProperty(obj,"y",
                        {value:2,writable:false});
var xDex=Object.getOwnPropertyDescriptor(obj,"x");
var yDex=Object.getOwnPropertyDescriptor(obj,"y");
console.log(xDex,yDex);
//Object {value: 1, writable: true, enumerable: true, configurable: true} 
//Object {value: 2, writable: false, enumerable: false, configurable: false}


var obj2=Object.create({x:1});
obj2.y=2;
Object.keys(obj2);
["y"]
Object.defineProperty(obj2,"z",{value:3});
//Object {y: 2, z: 3}
obj2.z;
//3
obj2.z;
//3
Object.getOwnPropertyDescriptors(obj2,"z");
//Object {y: Object, z: Object}y: Objectz: Object__proto__: Object
Object.keys(obj2);
["y"]
//Object.getOwnPropertyNames(obj2);
["y", "z"]
Object.getOwnPropertyDescriptor(obj2,"z");
//Object {value: 3, writable: false, enumerable: false, configurable: false}


//密封的一定是不可扩展的，不可以添加或者删除属性
//想要变为冻结的，freeze，把writable变为false
