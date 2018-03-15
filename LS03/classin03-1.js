//在js中函数就是对象
function foo(){}
foo instanceof Object;
//true
//函数也是对象（可执行的对象），也有属性和方法


//包装对象
//js中一切都是对象
//对象是属性的集合（包括方法）

//临时包装对象并不影响原始值
//基本数据类型    临时包装对象
var str="abcdef";
str.length;  //6  临时包装成了String对象
str.length=1;    //进行了装箱，拆箱
console.log(str,str.length);   //基本类型其属性不能被改变，返回的还是原始值
//abcdef 6

//引用数据类型
var arr=[1,2,3,4,5];
arr.length=1;
console.log(arr,arr.length);    //引用数据类型可以被改变原始值
//[1]  1

