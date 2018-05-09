//2018.5.7class
//19、Date日期

//一、Date简介及创建Date对象

//通过构造函数创建Date对象的4种形式
//new Date(year,month,date?,hours?,minutes?,seconds?,milliseconds?) 注意起始索引 
//new Date(dateTimeStr)  参数为字符串类型，注意格式，参见日期格式章节
//new Date(timeValue)      参数为数字类型，以毫秒为单位
//new Date( ) //返回当前时间

var date1 = new Date(2017,9,18,12,34,1);   //9代表10月
//注：月是0-11，9是10月
console.log(date1);
//Wed Oct 18 2017 12:34:01 GMT+0800 (中国标准时间)

var date2 = new Date(17,9,18,12,34,1);
//若years为2位的话自动加1900
console.log(date2);
//Thu Oct 18 1917 12:34:01 GMT+0800 (中国标准时间)

var date3 = new Date("2017-08-09");
//注意日期的格式 此处的08代表8月还是9月，对比上一个创建形式
console.log(date3);
//Wed Aug 09 2017 08:00:00 GMT+0800 (中国标准时间)

var date5 = new Date();//new Date(Date.now());
console.log(date5);
//Wed May 09 2018 16:56:51 GMT+0800 (中国标准时间)


//有无new的区别
var d1 = new Date();
var d2 = Date();
console.log(d1,typeof d1);//object
console.log(d2,typeof d2);//string
//Wed May 09 2018 16:57:26 GMT+0800 (中国标准时间) "object"
//Wed May 09 2018 16:57:26 GMT+0800 (中国标准时间) string

//二、Date方法（静态方法、原型方法）

//1、静态方法（构造器函数对象的方法）
console.log(Date.now());
//以毫秒为单位返回当前时间（从1970年1月1日00:00:00开始计算）
console.log((new Date()).getTime());
//1525856468246
//1525856468247

console.log(Date.UTC(2017,9,1));
//1506816000000
console.log(Date.UTC(1970,0,1));
//0  月份是从0开始算的

//月份索引从0开始
var today=new Date();
today.setMonth(6);
console.log(today);
console.log(today.getDay());
//Mon Jul 09 2018 17:04:39 GMT+0800 (中国标准时间)
//1

//2、Date原型方法 getter和setter相关
var d = new Date("1978-11-25");
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
console.log(d.getTimezoneOffset());
//1978 10 6 25 8
//-480


//三、日期和时间格式
console.log(Date.parse("2010-01-01 11:12:23.111"));
console.log(new Date("2010-01-01 11:12:23.111"));
console.log(new Date().toISOString());
//1262315543111
//Fri Jan 01 2010 11:12:23 GMT+0800 (中国标准时间)
//2018-05-09T09:07:17.422Z

console.log(new Date("2001"));
console.log(new Date("2001-02"));
console.log(new Date("2001-02-22"));
// Mon Jan 01 2001 08:00:00 GMT+0800 (中国标准时间)
// Thu Feb 01 2001 08:00:00 GMT+0800 (中国标准时间)
// Thu Feb 22 2001 08:00:00 GMT+0800 (中国标准时间)


//正则表达式
//1、通过字面量直接创建
//2、通过RegExp构造函数来实例化正则对象
var str="a fAt bat,a faT cat";
var reg1=/[bc]at/gi;
str.replace(reg1,"xx");
//"a fAt xx,a faT xx"
var str="a fAt bat,a faT cat";
var reg2=new RegExp(/[bc]at/gi);
str.replace(reg2,"xx");
//"a fAt xx,a faT xx"