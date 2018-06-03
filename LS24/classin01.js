//26、JS异步与网络数据交互
//5.28class  5.31class
//一、JS异步相关概念
//每一个人就是一个线程
//进程可能就是一些资源，可能包含一些线程
//一个车间，每个人可以共享工具去干活  一个人就是一个线程，而车间是进程

//实例
//1、（后端的是单线程异步事件驱动的形式）
// 业务员1 -- |处理业务1-----|
// 业务员2 --  |处理业务2-----|
// 业务员3 --   |处理业务3-----|

//2、（后端是同步处理多线程情况下，线程是有限的）
// 专员1 -- |处理业务1-----|  |处理业务3-----|
// 专员2 --    |处理业务2-----|



//二、JS异步的几种形式
//1、回调函数
var arr1= [1,3,5,7,9];
console.log("arr1:",arr1);
//map()把每个元素通过函数传递到当前匹配集合中,对于获得或设置元素集的值特别有用
var newArray1 = arr1.map(function (a) {
    return a*a;
});
console.log("newArray1:",newArray1);
// arr1: [1, 3, 5, 7, 9]
// newArray1: [1, 9, 25, 49, 81]

var arr2= [1,3,5,7,9];
console.log("arr2:",arr2);
//filter()产生新数组，新数组的元素是返回为true的那些元素
var newArray2 = arr2.filter(function (a) {
    return (a>2&&a<8)?true:false;
});
console.log("newArray2:",newArray2);
// arr2: [1, 3, 5, 7, 9]
// newArray2: [3, 5, 7]

//2、事件监听机制
document.onclick = function () {
    console.log("document 被点击了！");
};
// function () {
//     console.log("document 被点击了！");
// }

//3、发布订阅（观察者模式）
var Subject = function(){
    var _observer = [];
    this.attach = function(observer){
        _observer.push(observer);
    };
    this.detach = function(){
        _observer.pop();
    };
    this.notify = function(msg){
        for(var i=0;i<_observer.length;i++){
            _observer[i].update(msg);
        }
    };
    this.print = function(){
        console.log(_observer.length);
        console.log(_observer);
    };
};
var Observer = function(name){
    this.update = function(msg){
        console.log('i am '+name+',and i get the message: '+msg);
    };
};
var sub = new Subject()
sub.attach(new Observer('a'));
sub.attach(new Observer('b'));
sub.notify('hello');
// i am a,and i get the message: hello
// i am b,and i get the message: hello

//4、Promise


//三、JS异步与数据交互案例

