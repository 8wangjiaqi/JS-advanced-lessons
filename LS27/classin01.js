//6.14class
//30、ES6对函数的扩展
//一、ES6 新增的箭头函数

//-----------------part 1-----------------
//ES5的写法
var max=function(a,b){
    return a>b?a:b;
};
max(2,3);//3

//ES6的箭头函数
var max=(a,b) => {return a>b?a:b;};
//var max=(a,b) =>  a>b?a:b;
max(2,3);//3

//注：单参数可以不用（），单语句可以不用return关键字
//写了大括号必选写return；
var f=a=>{a+1};
f(2);
//undefined

var f=a=>{return a+1};
f(2);
//3


//箭头函数可以与变量解构结合使用
//ES5
function full({ first, last }) {
    return last + ' ' + first;
  }
  full({first:"Ming",last:"Li"});
//必须加{}；

//ES6
const full = ({ first, last }) => last + ' ' + first;
full({first:"Ming",last:"Li"});

//-----------------part 2-----------------
//方法中的函数嵌套 this缺陷，无法修改point的值
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        function moveToX() {
            this.x = x;//this绑定到了window上，无法改变其值
        }
        function moveToY() {
            this.y = y;//this绑定到了window上，无法改变其值
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
console.log(window.x,window.y);
// Object {x: 0, y: 0}
//2 2

//ES5通过 软绑定 解决this缺陷
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        var that = this;//软绑定

        function moveToX() {
            that.x = x;//this改为that,这时this绑定到了point上，可以修改point的值
        }
        function moveToY() {
            that.y = y;//this绑定到了point上
        }
        //不写这两行仍然是0；函数必选要调用才能执行
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
console.log(window.x,window.y);
//Object {x: 2, y: 2}
//undefined undefined

//箭头函数导致this总是指向函数定义生效时所在的对象
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        var moveToX = ()=>this.x=x;//this绑定到了point上
        var moveToY = ()=>this.y=y;//this绑定到了point上
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
console.log(window.x,window.y);
//Object {x: 2, y: 2}
//undefined undefined

function foo() {
    setTimeout(function(){
        console.log('id:', this.id);
    }, 100);
}
var id = 21;
foo.call({ id: 42 });// id: 21
//undefined
//id: 21

function foo() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}
var id = 21;
foo.call({ id: 42 });// id: 42
window.id;
//21
//箭头函数导致this总是指向函数定义生效时所在的对象（本例是{id: 42}），所以输出的是42


//其实箭头函数里面没有自己的this，而是引用外层的this
//由于箭头函数没有自己的this，所以当然也就不能用call()、apply()、bind()这些方法去改变this的指向
function foo() {
    return () => {
        return () => {
            return () => {
                console.log('id:', this.id);
            };
        };
    };
}
var f = foo.call({id: 1});
var t1 = f.call({id: 2})()(); // id: 1
var t2 = f().call({id: 3})(); // id: 1
var t3 = f()().call({id: 4}); // id: 1

//由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上小括号
var getTempItem = itemId => ( //!!!小括号
    { id: itemId, name: "Temp" }
);
getTempItem(23);

//等效于
var getTempItem = function (itemId) {
    return { id: itemId, name: "Temp" }
};
getTempItem(23);
//Object {id: 23, name: "Temp"}

