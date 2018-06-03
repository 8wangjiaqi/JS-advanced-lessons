function Student(name,age,id) {
    this.name = name;
    this.age = age;
    this.id=id;
}
Student.prototype.show = function(){   //给原型上定义一个函数show,Studentde的对象可以调用
    console.log("i'm",this.name,",i'm ",this.age,"years old!","My id is",this.id)
}
module.exports = Student; //把Student导出