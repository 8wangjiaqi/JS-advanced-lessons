//6.7class
//28、ES6中变量的解构赋值

//一、数组、对象的解构赋值
//数组的解构赋值
let [a,b,[c],d]=[2,3,[true],"ab"];
console.log(a,b,c,d);
//2 3 true "ab"

var [foo2]=[];
var [bar2,fee2]=[1];
console.log(foo2,fee2);
//undefined undefined

[x3, y3 = 'b'] = ['a']; 
[x4, y4 = 'b'] = ['a',undefined];
console.log(x3,y3);
console.log(x4,y4);
//a b
//a b

function f2() {
    return 2;
}
let [x7 = f2()] = [1];
console.log(x7);
//1

var [m4=n4,n4=1]=[];
console.log(m4,n4);
//undefined 1

let a = [];
let b=[2,3,4];
[a[0],a[1],a[2]] = b;
console.log(a,b);
console.log(a == b);//false or true
//[2, 3, 4] [2, 3, 4]
//false

let a=[];
let b=[1,2,3,4,5];
[a[0],,a[1],,a[2]]=b;
console.log(a);
//[1, 3, 5]

//对象的解构赋值
let obj1 = { first: 'hello', last: 'world' };

let { first: f, last: l } = obj1;
console.log(f,l);//注意和下边写法的区别
//hello world

let obj1 = { first: 'hello', last: 'world' };
let { first, last } = obj1;
//let { first:first, last:last } = obj1;
console.log(first,last);


var obj2={
	p:[
		'Hello',
        {y:'World'}
]
};
var {p:p}=obj2;
//var {p}=obj2;
console.log(p);
//["Hello", Object]
