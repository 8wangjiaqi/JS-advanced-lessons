//对于&&
//转换后的左操作数若为true，则直接返回原始右操作数，
//若为false则 直接返回原始左操作数
//对于| |
//转换后的左操作数若为true，则直接返回原始左操作数
//若为false则直  接返回原始右操作数  通过短路原则

//&&
console.log(2&&4);
//4
console.log(0&&4);
//0
console.log({x:2}&&{name:"Jack"});
// Object {name: "Jack"}
console.log(null&&"hello");
//null
console.log({}&&"world");
//world

//||
console.log(2||4);
//2
console.log(0||4);
//4
console.log({x:2}||{name:"Jack"});
// Object {x: 2}
console.log(null||"hello");
//hello
console.log({}||"world");
//Object {}



//可以用&&和| |来实现复杂的条件语句来代替if-else
//注：小括号优先级最高
console.log((score>90&&"优")||(score>75&&"良")||(score>60&&"及格")||"不及格");

var sum = function(a,b,c){
    if(b!=false){b = b||4;}//(b!=false)&&(b=b||4);
    if(c!=false){c = c||5;}//(c!=false)&&(c=c||5);
    return a+b+c;
};
console.log(sum(1,2,3));
//6
console.log(sum(1,2));
//8
console.log(sum(1));
//10
console.log(sum(1,0,0));
//1