//10.JS作用域及执行上下文
//一、作用域及其特点

var a = 10,
    b = 20;
function fn() {
    var a = 100,
        c = 200;
    function bar() {
        var a = 500,
            d = 600;
        console.log(a,b,c,d);
    }
    bar();
}
fn();
//500 20 200 600

var a = 10,
    b = 20;
function fn() {
    var a = 100,
        c = 200;
    function bar() {
        var a = 500,
            d = 600;
        console.log(a,b,c,d);
    }
    bar();
}
fn();
console.log(a,b,c,d);
//500 20 200 600
//报错  c是局部作用域，不可访问

var a = 10,
    b = 20;
function fn() {
    var a = 100,
        c = 200;
    console.log(a,b,c,d);
    function bar() {
        var a = 500,
            d = 600;
        
    }
    bar();
}
fn();
//报错 d不可访问

var a = 10,
    b = 20;
function fn() {
    var a = 100,
        c = 200;
    function bar() {
        var a = 500;
            d = 600;  //全局的，定义到window上
  console.log(a,b,c,d);
    }
    bar();
}
fn();
//500 20 200 600

//JS作用域特点（词法作用域)
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();
//Jack

//通过new Function实例化的函数对象，不一定遵从静态词法作用域
var scope = "g";
function foo(){
	var scope = "l";
	return new Function("console.log(scope);")
}
foo()();
//g

//ES5中无块作用域

//立即执行表达式
(function(){
    if(true){
        userID=234;
    }
}());


//二、JS执行上下文与调用栈（Call Stack）
//三、作用域链与执行上下文

//就是按作用域执行，分清全局变量和局部变量
console.log("小明回家");
var xx = ["书桌","书包","铅笔盒"];
console.log("在家-做作业中 1 ...全局上下文");
function goToStore(){
    var yy = ["文具店老板","出售的文具"];
    console.log("在文具店-买文具中  ...函数1上下文");
    console.log("在文具店-买文具中  ...函数1上下文 发现没带钱");
    goToBank();
    console.log("在文具店-买好文具  ...函数1上下文 返回家");
}
function goToBank(){
    var zz = ["银行职员","柜员机"];
    console.log("在银行-取钱 ...函数2上下文 返回文具店");
}
console.log("在家-做作业中 2 ...全局上下文 发现笔没油了");
goToStore();
console.log("在家-继续做作业...全局上下文");
//小明回家
//在家-做作业中 1 ...全局上下文
//在家-做作业中 2 ...全局上下文 发现笔没油了
//在文具店-买文具中  ...函数1上下文
//在文具店-买文具中  ...函数1上下文 发现没带钱
//在银行-取钱 ...函数2上下文 返回文具店
//在文具店-买好文具  ...函数1上下文 返回家
//在家-继续做作业...全局上下文


//使用Chrome调试，设置断点，一步一步执行，看变量的变化
console.log("全局上下文-start");
var x = 1;
function foo(){
    console.log("foo上下文-start");
    var y = 2;
    function bar(){
        console.log("bar上下文-start");
        var z = 3;
        console.log(x+y+z);
        console.log("bar上下文-end"); 
    }
    bar();
    console.log("foo上下文-end");
}
foo();
console.log("全局上下文-end");
//全局上下文-start
//foo上下文-start
//bar上下文-start
// 6
//bar上下文-end
//foo上下文-end
//全局上下文-end

//使用Chorme查看x，y，z变量的变化情况
console.log("全局上下文-start");
var x = "家中环境-";
function goToStore_A(){
    console.log("goToStore_A 上下文-start");
    var y = "文具店A环境-";
    goToBank_C();
    console.log("goToStore_A 上下文-end");
}
function goToStore_B(){
    console.log("goToStore_B 上下文-start");
    var y = "文具店B环境-";
    goToBank_C();
    console.log("goToStore_B 上下文-end");
}
function goToBank_C(){
    console.log("goToBank_C 上下文-start");
    var z = "银行C环境-";
    //console.log(x+y+z);
    console.log("goToBank_C 上下文-end");
}
function goToBank_D(){
    console.log("goToBank_D 上下文-start");
    var z = "银行D环境-";
    //console.log(x+y+z);
    console.log("goToBank_D 上下文-end");
}
goToStore_A();
console.log("全局上下文-end");
 //全局上下文-start
//oToStore_A 上下文-start
//goToBank_C 上下文-start
//goToBank_C 上下文-end
//goToStore_A 上下文-end
//全局上下文-end