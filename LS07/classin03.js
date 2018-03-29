//三、高阶函数
//函数作为参数被传递（最常见的形式：回调函数）
// 函数作为返回值输出（与闭包有紧密联系）

function add(x, y, f) {
    return f(x) + f(y);
}
add(2,3,function(z){return z*z;});
add(2,-3,Math.abs);
add(2,3,Math.sqrt);
//3.1462643699419726


//函数复用，高阶函数实现下列公式
//z = 2*(x+1)-3*y*y;
//c = 2*a*a-3*(b-1);
//k = 2*(i+1)-3(j-1);
function foo(x,y,c1,c2){
	return 2*c1(x)-3*c2(y);
}
function f1(x){
	return x+1;
}
function f2(x){
	return x-1;
}
function f3(x){
	return x*x;
}
foo(1,1,f1,f3);
//1
foo(1,1,f3,f2);
//2
foo(1,1,f1,f2);
//4