var obj1={x:2,y:[1],z:false};
var obj2={x:2,y:[1],z:new Boolean(true)};
console.log(obj1.x===obj2.x);
//true
console.log(obj1.y===obj2.y);
//false
console.log(obj1.z===obj2.z);
//false
console.log(obj1.x==obj2.x);
//true
console.log(obj1.y==obj2.y);
//false
console.log(obj1.z==obj2.z);
//false

var obj1={x:2,y:[1],z:false};
var obj2={x:2,y:[1],z:(new Boolean(true))};
//z:(new Boolean(true))   二义性
console.log(obj1.z==obj2.z);
//false

var zz=new Boolean(false);
var obj1={x:2,y:[1],z:false};
var obj2={x:2,y:[1],z:zz};
console.log(obj1.z==obj2.z);
//true

