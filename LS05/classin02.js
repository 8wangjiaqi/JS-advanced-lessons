//关系运算符
//1、==与===

//== （如果类型不同，先转换再比较，注：引用类型到基本类型的转换方向）
//=== （若类型不同则false，若类型相同则判断同 ==）

//注：三等先看类型，类型不一样，肯定是false
console.log(3==new String(3));
//true
console.log(3===new String(3));
//false

var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"===obj1);
//false
console.log("xyz"==obj1);
//true
console.log(obj1 == obj2);
//false
console.log(obj1 === obj2);
//false
console.log(obj1 == new String("xyz"));
//false

//几个特例：
NaN==NaN   
//false
NaN==NaN
//false
//{}=={}          false
//{}==={}         false

var obj1 = new String("xyz");
var obj2 =obj1;
console.log(obj1==obj2);
///true
console.log(obj1===obj2);
//true


//2、！=与！==
//！=（相当于==的逆运算）
//！==（先判断类型，若类型不同则返回true，相当于===的逆运算）

var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"!=obj1);
//false
console.log(obj1 !== obj2);
//true
console.log(obj1 != obj2);
//true
console.log(obj1 != new String("xyz"));
//true


console.log(2 == 2);
//true
console.log(new Number(2) == new Number(2));
//false
console.log(2 == new Number(2));
//true