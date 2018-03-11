//引用数据类型
var obj1={"key":2};
var obj2=obj1;
obj2.key=3;
console.log(obj1.key);
//3

//基本数据类型
var a=2;
var b=a;
a=3;
console.log(b);
//2

//基本数据类型   ==  值相等
//引用          ==   内存等（指的是不是一块内存）
var a=[1,2];
var b=[1,2];
console.log(a==b);  //false
console.log(a===b);  //false

b=a;//b也指向了a的内存
console.log(a==b);   //true
console.log(a===b); //true

var a=123;
var b=new Number(123);
console.log(a==b); //true
console.log(a===b);   //false