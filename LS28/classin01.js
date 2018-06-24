//6.21class
//31、ES6新增数据类型和数据结构
//一、新增数据类型（Symbol）

//------------------part 1-----------------
//属性名冲突
var obj = {
    x:1,
    y:2,
    moveTo:function(x,y){
        this.x = x;
        this.y = y;
    }
}
obj.moveTo = function(x,y){
    console.log("方法被覆盖了");
};
obj.moveTo(0,0);
//方法被覆盖了
console.log(obj);
//Object {x: 1, y: 2}

//Symbol的提出
let v=Symbol;
console.log(typeof v);
//function

let s=Symbol();
console.log(typeof s);
//symbol
var s1=Symbol('foo');
var s2=Symbol('bar');
console.log(s1);
console.log(s2);
// Symbol(foo)
// Symbol(bar)

//------------------part 2-----------------
//相同参数的Symbol函数的返回值是不相等的
var s1 = Symbol();
var s2 = Symbol();
s1 === s2 // false

var s1 = Symbol("foo");
var s2 = Symbol("foo");
s1 === s2 // false

//Symbol变量不能与其他值进行运算
var sym = Symbol('My symbol');
"your symbol is " + sym;//报错
//Symbol值可以显式转为字符串
var sym = Symbol('My symbol');
String(sym); 
//"Symbol(My symbol)"
sym.toString(); // 'Symbol(My symbol)'

//类型
var sym = Symbol('My symbol');
String(sym);
typeof(sym);
"symbol"
typeof(String(sym));
"string"

//如果 Symbol 的参数是一个对象(obj)，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值
//toString方法就是把各种类型转换为字符串类型
var num = 15;
var n = num.toString();
n
//"15"
typeof(n);
//"string"

const obj = {
    toString() {
        return 'abc';
    }
};
const sym = Symbol(obj);
sym // Symbol(abc)

const obj = {

    to() {
        return 'abc';
    }
};
const sym = Symbol(obj);
sym
//Symbol([object Object])

var a=4;
const obj = {

    toString() {
        return a;
    }
};
const sym = Symbol(obj);
sym;
//Symbol(4)
typeof a;
//"number"


//------------------part 3-----------------
//Symbol的三种写法
var mySymbol = Symbol();
// 第一种写法
var a = {};
a[mySymbol] = 'Hello!';//注：中括号内不要加引号
// 第二种写法
var a = {
    [mySymbol]: 'Hello!'
};
// 第三种写法
var a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

a[mySymbol] // 三种写法结果都为："Hello!"


var aSymbol = Symbol("abc");
var obj = {
    [aSymbol]: 'Hello!'
};
Object.defineProperty(obj, Symbol("abc"), { value: 'World!' });
console.log(obj);//obj对象有两个属性
//Object {Symbol(abc): "Hello!", Symbol(abc): "World!"}

//！！！！注
var mySymbol=Symbol();
var a={};
a.mySymbol='Hello';
console.log(a[mySymbol]);//undefined
console.log(a['mySymbol']);//Hello
//点运算符后面总是字符串，不会读取mySymbol作为标识名所指代的那个值
//导致a的属性名实际上是一个字符串，而不是一个Symbol值


var myS1 = Symbol("xx");
var myS2 = "xx";
var obj={};
var obj = {
    [myS1]:123,
    [myS2]:456
};
console.log(obj[myS1],obj[Symbol("xx")]);// 123 undefined
console.log(obj[myS2],obj["xx"]);// 456 456

//使用Symbol值定义属性时，Symbol值须放在方括号之中
let s = Symbol();
let obj = {
    [s]: function (arg) {console.log("xx");}
};
obj[s](123);
//xx

//------------------part 4-----------------
//作为属性名的Symbol的遍历特性
var sy1=Symbol("xx");
var sy2=Symbol("xx");
var st1="xx";
var st2="xx";
var obj={};
obj[sy1]="12";
obj[sy2]="34";
obj[st1]="56";
obj[st2]="78";
obj;
//Object {xx: "78", Symbol(xx): "12", Symbol(xx): "34"}


var obj={};
var s1=Symbol();
var s2=Symbol();
obj[s1]=123;
obj[s2]=345;
obj["s1"]=678;
obj.s2=910;
for(var k in obj){
	console.log(k,typeof k);
}
//s1 string
//s2 string
Object.getOwnPropertySymbols(obj);
//[Symbol(), Symbol()]


var obj ={}
var s1=Symbol();
var s2=Symbol();
obj[s1]=123;
obj[s2]=345;
obj["s1"]=678;
obj.s2=910;
Object.getOwnPropertySymbols(obj).forEach(function(v){
console.log(obj[v])});
//123
// 345

//箭头函数
var obj ={}
var s1=Symbol();
var s2=Symbol();
obj[s1]=123;
obj[s2]=345;
obj["s1"]=678;
obj.s2=910;
Object.getOwnPropertySymbols(obj).forEach((v)=>{
console.log(obj[v])});
//123
// 345


//二、新增数据结构(set)
//ES6提供了新的数据结构Set
var s1 = new Set([1,2,3,4,5,5,6,2,2]);
console.log(s1);

var s2 = new Set();
[2, 3, 5, 4, 5, 2, 2].map(x => s2.add(x));
for (var i of s2) {
    console.log(i);
}
//Set {1, 2, 3, 4, 5…}
// 2 3 5 4