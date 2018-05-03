//4.28class
//17、深入理解JS的继承方式
//JS对象-对象原型继承

//JavaScript的原型继承是对象-对象的继承
//每个对象都有一个原型对象，最原始的是null
var superObj = {
    x:1,
    y:2
};
var subObj_First = Object.create(superObj);
var subObj_Second = Object.create(superObj);
subObj_First.__proto__.x = 5;
console.log(subObj_Second.x);
//5
undefined
var superObj = {
    x:1,
    y:2
};
var subObj_First = Object.create(superObj);
var subObj_Second = Object.create(superObj);
subObj_First.x = 5;
console.log(subObj_Second.x);
// 1
subObj_First.x=5;   //是给自身添加了一个属性 5
//访问先访问自身，如果没有，就到原型找

var superObj = {
    show :function(){console.log(this.x,this.y);}
 };
 var subObj_First = Object.create(superObj);  //创建了一个对象，原型是superObj
 subObj_First.x=1;
 subObj_First.y=2;
 subObj_First.show();
 //1  2


function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){console.log(this.name);};
function Student(name,age,id){
    Person.call(this,name,age);    //this.name=name;
                                   //this.age=agr;
    this.id = id;
}
Student.prototype.__proto__ = Person.prototype;
var s1 = new Student("xxx",22,2017001);    //name添加到自身
var s2 = new Student("www",23,2017002);
//Object {}

//通过构造函数创建的对象的原型共享问题
function Person(name){
    this.name = name;
}
Person.prototype.age = 22;
Person.prototype.showName = function(){console.log(this.name);};
function Student(id){
    this.id = id;
}
//var p1 = new Person("Mike");Student.prototype = p1;
Student.prototype = new Person("Mike");
var s1 = new Student(2017001);
var s2 = new Student(2017002);
//Person {name: "Mike"}


//二、通过构造函数模拟类-类的继承
//JS实现继承的形式 一
function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){console.log(this.name);};
function Student(name,age,id){
    Person.call(this,name,age);
    this.id = id;
}
Student.prototype.__proto__ = Person.prototype;
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);
//bject {}

//JS实现继承的形式 二
function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){
    console.log(this.name);
};
function Student(name,age,id){
    Person.call(this,name,age);
    this.id = id;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);
// 

//三、JS继承补充部分
// 1 确定对象的构造函数名
function Foo() {}
var f = new Foo();
console.log(f.constructor.name);
//Foo

// 2 创建相似对象
function Constr(name) {
    this.name = name;
}
var x = new Constr("Jack");
var y = new x.constructor("Mike");
console.log(y);
console.log(y instanceof Constr);
//Constr {name: "Mike"}
//true

// 3 constructor可用于指定构造函数
function Person(area){
    this.type = 'person';
    this.area = area;
}
Person.prototype.sayArea = function(){
    console.log(this.area);
};
var Father = function(age){
    this.age = age;
};
Father.prototype = new Person('Beijin');
console.log(Person.prototype.constructor); 
console.log(Father.prototype.constructor); 
Father.prototype.constructor = Father;     
console.log(Father.prototype.constructor);
var one = new Father(25);
// function Person(area){
//     this.type = 'person';
//     this.area = area;
// }
// function Person(area){
//     this.type = 'person';
//     this.area = area;
// }
//  function (age){
//     this.age = age;
// }


var BaseClass = function() {};
BaseClass.prototype.f2 = function () {
    console.log("This is a prototype method ");
};
BaseClass.f1 = function(){//定义静态方法
    console.log("This is a static method ");
};
BaseClass.f1();//This is a static method
var instance1 = new BaseClass();
instance1.f2();//This is a prototype method
//This is a static method 
//This is a prototype method 


//静态方法与原型方法的区别
//静态方法是构造器函数对象（类）的方法
//原型方法是实例化对象（对象）的原型的方法
