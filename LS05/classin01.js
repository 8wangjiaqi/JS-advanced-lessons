//JS算术运算符
//"+"转为字符串
a="1"+"2";
console.log(a,typeof a);
//12 string

console.log(1+{}); 
//"1[object Object]"   括号中有没有都一样

a=true+true;
console.log(a,typeof a);
//2 "number"

var obj={x:10,y:20,z:"30"};
var str1=""+obj;
str1;
     //var str=JSON.stringify(obj);   ????
//"[object Object]"   string类型

//"-"转为number
console.log("5"-2); //3   string类型


var  i=1;
var b=++i + ++i + ++i;
b;
//9

//++转为数字
//+和+=转为字符串 ？？
var x = "1";
console.log(++x); 
//2   number类型
var x = "1";
console.log(x+1,typeof(x+1));//11
//11 string
var x = "1";
console.log(x+=1,typeof(x+=1));
//11 string
var x = 1;
console.log(x+=1,typeof(x+=1));
//2 number

//除号转为number类型
var x=1;  //var x="1";
x/=1;
console.log(x,typeof x);
//1 "number"

