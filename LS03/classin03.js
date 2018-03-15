//{x:1}=={x:1}
//false  引用数据类型   为什么{x:1}=={x:1}不是一个语句块？
//一个特例
NaN==NaN
//false   注：不可加“；”


//区分方法和函数
//方法是可以执行的属性
//函数作为一个对象的属相叫方法（可以通过对象直接调拥函数）


//slice截取
//从下标为n的开始
str.slice(2,5);
//"c_d"


//split 分隔符   返回的是数组
var str="abc_def_ghi_jkl_mn";
str.split("_");
//["abc", "def", "ghi", "jkl", "mn"]
str.split("_",2);
//["abc", "def"]

//substr 与 substring
var str="abc_def_ghi_jkl_mn";
str.substr(4,7);  //7代表的是长度
//"def_ghi"
str.substring(4,7)
//def   substring是下标从4到6；

//indeOf
var str11 = "abcdefabcdef";
str11.indexOf("d",1);
//3
str11.indexOf("d",4);  //从第4个开始找
//9


var n1 = 12345.6789;
//toFixed(小数留几位)
console.log(n1.toFixed(2));  
//12345.68

//toPrecision   留几位（科学计数法表示）一共留几位
console.log(n1.toPrecision(2));   
//1.2e+4

console.log(n1.toString());
//12345.6789
//toExponential  (科学计数法表示，小数点后留几位)
console.log(n1.toExponential(2));
//1.23e+4


