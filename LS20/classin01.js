//5.10class
//20、RegExp正则表达式

//一、正则表达式简介及正则对象
//正则表达式：通过字符串匹配进行替换等操作
var reg1 = /[bcf]at/gi;
//gi是修饰符，写了g就是全局匹配，i是忽略大小写


//split进行字符串分割，返回的是数组形式
var str="xx-xxy-xx";
var a=str.split("-");
console.log(a);
//["xx", "xxy", "xx"]

//使用正则表达式进行分割
var str="xx-x*y-xx";
var a=str.split(/[-*]/gi);
console.log(a);
//["xx", "x", "y", "xx"]



//正则表达式的相关字符
//repalce
"a2d5".replace(/\w/gi,"x");     // \w替换所有字符（数字、字母等）
//"xxxx"
"a2d5".replace(/\W/gi,"x");     // \W替换非字符
//"a2d5"
"a2d5".replace(/\d/gi,"x");     // \d替换数字
//"axdx"
"a2d5".replace(/\D/gi,"x");     // \D替换非数字
//"x2x5"
"a2 d5".replace(/\s/gi,"x");    // \s替换空格
//"a2xd5"
"a2 d5".replace(/\S/gi,"x");    // \S替换非空格    
//"xx xx"
"a2 d5".replace(/\b/gi,"x");    // \b在开头结尾加
//"xa2x xd5x"
"a2 d5".replace(/\B/gi,"x");    // \B在中间插进去
//"ax2 dx5" 
"aet2 detr5".replace(/\B/gi,"x");
//"axextx2 dxextxrx5"


console.log(/oo/.test("moon"));
//true
console.log(/oo\b/.test("moon"));   //表示oo右边是一个边界（后面没有了）
//false
console.log(/oo\B/.test("moon")); 
//true    表示oo右边不是一个边界
console.log(/oon\b/.test("moon"));
//true
console.log(/\boo/.test("moon"));   //左边是否为边界
//false

console.log("123123 123".replace(/\b123/g,"*"));
//*123 *


//量词，可以重复元字符？


//正则表达式默认为贪婪模式，尽可能匹配多的字符
"12345678".replace(/\d{3,6}/,'X');//默认为贪婪模式  X78
//"X78"
"12345678".replace(/\d{3,6}?/,'X');//设置为非贪婪模式 在量词后加？X45678
//"X45678"
"12345678".replace(/\d{3,6}?/g,'X');
//"XX78"


//正则表达式的分组
console.log("NameNameNameeee_11111".replace(/Name{3}/,"X"));
//NameNameXe_11111
console.log("NameNameName_11111".replace(/(Name){3}/,"X"));
//X_11111
console.log("NameNameName_11111".replace(/Name{3}/,"X"));
//NameNameName_11111

//分组的 反向引用
//如何将2017-10-23转成10/23/2017
"2017-10-23".replace(/(\d{4})-(\d{2})-(\d{2})/,"$2/$3/$1");
//"10/23/2017"

//分组的 忽略分组 （？：）
"2017-10-23".replace(/(?:\d{4})-(\d{2})-(\d{2})/,"$2/$3/$1");


//test检测正则对对象是否能匹配到字符串
//正则表达式RegExp原型方法（exec），可获得详细信息
