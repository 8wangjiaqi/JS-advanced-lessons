//类型转换

//!!value进行了一次类型转换

//转布尔时任何对象都是true
if (new Boolean(false)){
    console.log("执行");
}
//执行

///???????
console.log(Boolean(undefined));  
//false
console.log(Boolean(null));
//false
console.log(Boolean(0));
//false
console.log(Boolean(NaN));
//false
console.log(Boolean(1));
//true
console.log(Boolean(""));
//false
console.log(Boolean("abc"));
//true
console.log(Boolean({}));
//true



///????
console.log(Number(undefined));
//NaN
console.log(Number(null));
//0
console.log(Number(true));
//1
console.log(Number(false));
//0
console.log(Number(""));
//0
console.log(Number("abc"));
//NaN
console.log(Number("123.345xx"));
//NaN
console.log(Number("32343,345xx"));
//NaN
console.log(Number({x:1,y:2}));
//NaN



//转换为字符串
var temp="23"-1;
typeof temp;
//"number"
var temp="23"+1;
typeof temp;
//"string"
var temp=-1;
typeof temp;
//"number"
var temp=+1;
typeof temp;
//"number"
 
var a1=2;
var b1=new Number(2);
a1==b1;
//true

