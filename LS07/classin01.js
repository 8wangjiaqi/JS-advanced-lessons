//08、JS函数对象
//一、函数对象
//JS中一切都是对象
//Array、Function 作为构造函数使用
//new Array、new Function 可以用来实例化对象，用来创建数组对象，函数对象，日期对象
//Function:用来实例化函数对象的构造函数
//Array用来实例化数组对象的构造函数


//instanceof
//判断其左边对象是否为其右边的实例，返回值为boolean类型（判断左边为否为右边的类型）
function foo(){}
console.log(foo); 
//function foo(){}
console.log(typeof foo); 
//function
console.log(foo instanceof Object); 
//true
console.log(foo instanceof Function); 
//true
console.log(foo === window.foo); 
//true

//Math JSON(标准内置函数)  --作为对象来使用  没有new Math····
console.log(typeof Function);
//function
console.log(typeof Array);	 
//function
console.log(typeof Date);	 
//function
console.log(typeof Error); 	 
//function
console.log(typeof Math);	 
//object
console.log(typeof JSON);	 
//object


var a=new Array(5);
//创建了一个5个元素的数组
console.log(a);
//Array[5]
//length: 5

var b=new Array("5");
//一个数组元素
console.log(b);
//Array[1] 
//length: 1

var Person =function(name){
	this.name=name;
}
console.log(Person instanceof Object);
console.log(Person instanceof Function);
var p=new Person("Jack");
console.log(p instanceof Object);
console.log(p instanceof Function);
var q=new p;
//true
//true
//true
//false
//报错  p不是一个constructor（构造器）


console.log(typeof new Function());
//创建出来的是函数
//Array()创建出来的是数组对象
console.log(typeof new new Function());
//object
//一个对象不能再实例化出另一个对象，但是函数可以，因为函数本来就是对象


