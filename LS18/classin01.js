//5.3class
//18、Array数组
//一、数组的创建和基本操作（增删改查）

//创建数组的不同方法
var arr2=new Array(5);
console.log(arr2);
VM107:2 []
//undefined

var arr2=new Array("5");
console.log(arr2);
//["5"]

//异步执行，如果一个数组直接添加一个元素
var arr=[];
arr[4]=2;
arr;
//第五个添加一个2
//前面四个都是空
var base=1024;
var table=[base,base+1,base+2,base+3];
table;
//[1024, 1025, 1026, 1027]

//回顾引用数据类型
var a1=[1,2,3];
var a2=a1;
a2.length=0;    //a1,a2指向同一块空间，a2变化，a1也会变    
console.log(a1,a2);
//[] []

var a3=[1,2,3];   //对象，作为引用数据类型来判断
var a4=a3;
a4=[];
console.log(a3,a4);
//[1, 2, 3] []

var arr22=[];
for(var i=0;i<5;i++){
	document.onclick=function(){
		arr22[i]=i;
    }
}
// function (){
// 		arr22[i]=i;
//     }


//数组的基本操作，增删改查

//删除可以改长度   或者使用pop
var arr=[1,2,3];
arr.length=2;
console.log(arr);
// [1, 2]

var i=2,b=[];
b[i]=3;
b[i+1]="YY";
b[b[i]] = b[0];
console.log(b);
//[2: 3, 3: undefined]


var arr=[];
arr[-1.23]="xx";
"xx"
arr[-1.23];
"xx"      
arr["-1.23"];
"xx"    //进行了类型转换
arr.hasOwnProperty("-1.23");
true     //当成一个属性
arr;
// Array[0]
//   -1.23: "xx"
//   length: 0
//   __proto__: Array[0]


var arr=[];
arr[-1.23]="xx";
arr["20"]="yy";  //进行隐式类型转换，转换为数字
"yy"  


var arr=[];
arr[-1.23]="xx";
arr["5"]="yy";
arr;
//[undefined × 5, "yy"]
console.log(arr);
// [5: "yy", -1.23: "xx"]

function f(){
	console.log(arguments);
}
f(1,2,3,"x");
//[1, 2, 3, "x"]


var arr=[,,];
arr;
//[undefined × 2]

//稀疏数组遍历时可能遍历不到
var a1 = [,"abc"];
console.log(a1.length);
for(var i in a1){
    console.log(i,a1[i]);
}
console.log(0 in a1,1 in a1);
//2
//1 abc
//false true



var a=Array.of(7);
var b=Array.of(1,2,3);
console.log(a,b);
//[7] [1, 2, 3]


function f(){
	console.log(Array.isArray(arguments));   //公用的属于类的方法，不需要实例化对象
}
f(1,2,3,"x");
//false

//arguments 类数组对象

function f(){
    arguments.pop();   //报错，pop不是一个函数， arguments是一个普通的对象，不是继承于数组
    //数组一定有pop方法
}
f(1,2,3,"x");

function f(){
    console.log(arguments);
    Array.prototype.pop.call(arguments);
    console.log(arguments);

}
f(1,2,3,"x");
// [1, 2, 3, "x"]
// [1, 2, 3]

//典型的切割，原数组会被影响，所以是破坏性的
//splice 从start开始，移除deleteCount个元素，并插入给定的元素
var arr5 = ["a","b","c","d"];
var spliceElements = arr5.splice(1,2,"x");//返回切掉的数组
console.log(spliceElements,arr5);
// ["b", "c"] ["a", "x", "d"]


//排序
var arr3 = [-1,-20,7,50];
arr3.sort();
console.log(arr3);//结果是否是预计结果,如何解决

//sort传递的函数对象
//传递一个回调函数
arr3.sort(function (a,b) {return a-b;});//对于数字类型，大于0则交换，冒泡排序
//arr3.sort(function (a,b) {return a>b;});//对于布尔类型，true则交换，冒泡排序
// [-1, -20, 50, 7]
// [-20, -1, 7, 50]


var arr1=[2,5,8];
arr1.forEach(function(a){
	console.log(a,this);   //this表示window
});
console.log(this);

var arr1=[2,5,8];
var arr2=[1,6,7];
arr1.forEach(function(a){
	console.log(a,this);  //此时this代表的是arr2
},arr2);
console.log(this);
// 2 [1, 6, 7]
// 5 [1, 6, 7]
// 8 [1, 6, 7]

var arr1=[2,5,8];
var arr2=[1,6,7];
arr1.forEach(function(a,i){
	console.log(a,i,this);
},arr2);
console.log(this);
//2 0 [1, 6, 7]
//5 1 [1, 6, 7]
//8 2 [1, 6, 7]


var arr1=[2,5,8];
var arr2=[1,6,7];
var arr3=[];
arr1.forEach(function(a,i){
	arr3[i]=a>arr2[i]?a:arr2[i];
	//console.log(a,i,this);z
},arr2);
console.log(arr3);
//[2, 6, 8]

//returnValue判断有没有偶数
var arr2=[5,3,9];
var returnValue = arr2.some(function (a) {/
    console.log(a);
    return a%2===0;
});
console.log(returnValue);
//5
//3
//9
//false

var arr2=[5,4,6];
var returnValue = arr2.some(function (a) {
    console.log(a);
    return a%2===0;
});
console.log(returnValue);
//5
//4
//true