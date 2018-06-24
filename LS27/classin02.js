//二、ES6 对函数参数默认值的扩展

//ES5函数参数默认值的实现方法
//未传实参的话，形参初始为undefined，
//undefined转为布尔类型为false，根据||短路原则直接返回右操作数，相当于给参数指定了默认值
var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));//1+2+3  6
console.log(sum(1,2));//1+2+5   8
console.log(sum(1));//1+4+5     10
console.log(sum(1,0,0));//本应为1+0+0  1  ；但此处为1+4+5， 10   0转换为了布尔类型false

//代码有问题需优化
//优化改造版本
var sum = function(a,b,c){
    if(b!=false){b = b||4;}//(b!=false)&&(b=b||4);
    if(c!=false){c = c||5;}//(c!=false)&&(c=c||5);
    return a+b+c;
};
console.log(sum(1,2,3));//1+2+3
console.log(sum(1,2));//1+2+5
console.log(sum(1));//1+4+5
console.log(sum(1,0,0));//1+0+0

//ES6允许为函数的参数设置默认值
var sum=function(a,b=5,c=4){
return a+b+c;
};
console.log(sum(1));
// 10
console.log(sum(1,2,3));
// 6

//注意事项
function foo(x=5){
    var x = 3;
    return x;
}
foo();
//3
foo(6);
//3

//默认值顺序，有默认值的参数应该是尾参数，在最后
function f(x,y = 1) {
    return [x,y];
}
f();//[undefined, 1]
f(2);//[2, 1] 


//三、ES6 中的Rest与Spread操作符

//...Rest操作符
// ES5中 实参数大于形参数量时，可以通过arguments来获得所有参数
function test() {
    console.log(arguments);//console.log(test.arguments);
}
test("a","b","c");
//["a", "b", "c"]

//...Rest 相当于合并若干参数为一个数组，
function f(...y){
    console.log(y);
}
f("a","b","c");
// ["a","b","c"]

  function add(...values) {
    let sum = 0;
    console.log(values); //[2, 5, 3]
    for (var val of values) {
      sum += val;
    }
    return sum;
  }
  add(2, 5, 3) // 10

  //既然valuse是一个数组，为什么不可以这样写？？？
  function add(...values) {
    let sum = 0;
    for (var i=0;i<10;i++ ) {
      sum += values[i];
    }
    return sum;
  }
  add(2, 5, 3) 
//NaN

function add(...values) {
    let sum = 0;
  console.log(values)
    for (var val of values) {
      sum += val;
    }
  
    return sum;
  }
let sun=[1,2,3,4,5,6,7,8,9,20]
  let b = [0, ...sun, 4]; 
 add(...b);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 4]
//69

//更加灵活
function f(x,...y){
    console.log(x,y);
}
f("a","b","c","d");//"a",["b","c","d"]
f("a");//"a",[]
f();//输出 undefined,[]
//思考function f(x,...y，z){console.log(y);}//此时y输出是什么

function f(x,...y){
    console.log(x,y);
}
f("a","b","c","d");
f("a");
f();
//a ["b", "c", "d"]
// a []
// undefined []

function f(x,...y,z){console.log(y);}
//Uncaught SyntaxError: Rest parameter must be last formal parameter
//REST参数必须是最后的形式参数
function f(x,z,...y){console.log(y);}
f(2,3);
// []
f(2,4,5,7,9);
// [5, 7, 9]

//...Spread 扩展操作符 

function f(...y){
    console.log(y);
}
f("a",...["b","c"]);
f("a",...["f","b","r"]);
//["a", "b", "c"]
// ["a", "f", "b", "r"]


function f(x,...y){
    console.log(x,y);
}
f("a",...["b","c"]);//等价于f("a","b","c");
//a ["b", "c"]
f("a");//a []
f();//undefined []
f("a",...["b","c","g","d"]);//a ["b", "c", "g", "d"]


//在call和apply的转换过程中十分有用
function abc(...v){
    console.log(v)
}
o1 = {};
abc.call(o1,...[1,2,3]);//等效于 abc.apply(o1,[1,2,3]);
//[1, 2, 3]

//单独使用：
function f(x,y){
    console.log(x,y);
}
f("a",...["b","c"]);
f("a",...["f","b","r"]);
//a b
//a f