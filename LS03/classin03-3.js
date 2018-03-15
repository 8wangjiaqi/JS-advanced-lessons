//反写

var a=2;
if(2==a){    //反写
    console.log("输出")
}
//输出

var a=2;
if(a=3){    //赋值了，找不到错了
    console.log("输出")
}
//输出

var a=2;
if(3==a){
    console.log("输出")
}
//undefined

var a=2;
if(3=a){
    console.log("输出")
}
//报错了  可以避免因疏忽而产生错误
