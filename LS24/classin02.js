
var temp = new Date();
function f() {
    console.log(temp);
    if(false){
        var temp = "Hi!";  //把这句话提升到了最顶端
    }
}
f();
//等效于
var temp = new Date();
function f() {
    var temp ;
    console.log(temp);
    if(false){
        var temp = "Hi!";  
    }
}
f();

var temp = new Date();
function f() {

    console.log(temp);
    if(false){
       let temp= "Hi!";
    }
}
f();

//let的暂存区锁死特性（暂时性死区特性）
var temp = new Date();
function f() {

    console.log(temp);  //定义之前已经使用
    //if(false){
       let temp= "Hi!";   //把这个{}区域锁死，let不会找到{}之外的
    //}                   //如果加了if，会锁死if之内的，所以temp会找到function之外的new Date()
}
f();  
//报错