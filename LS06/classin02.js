//2、函数参数的数量问题
function test() {
    console.log(arguments);
    console.log(test.arguments==arguments,arguments);
    console.log(arguments.length);
	// console.log(typeof arguments);
	// console.log(arguments instanceof Array);
	// console.log(arguments instanceof Object);
    console.log(Array.prototype.slice.call(arguments));
    var s = "";
    for (var i = 0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
}
test("hello,", "world!");
//["hello,", "world!"]
//false ["hello,", "world!"]
//2
//["hello,", "world!"]
//"hello,world!"

//实参数小于形参数
var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));
//6
console.log(sum(1,2));
//8
console.log(sum(1));
//10


//类数组对象
var arr=[1,2,3,4,5];
arr instanceof Array;
arr.x=6;
console.log(arr);
console.log(Array.prototype.slice.call(arr));
//[1, 2, 3, 4, 5, x: 6]
//[1, 2, 3, 4, 5]