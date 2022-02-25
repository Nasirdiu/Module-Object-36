//1
const student={name:'faki bas',age:20,class:'five'}

//2
// const person=new Object();

const person =new Object(student.class);

//3 
// const human= Object.create(null);
const human=Object.create(student);

// 4
// console.log(human.class);

class pepole{
    constructor(name,age){
        this.name=name;
    this.age=age;

    }
}

const result= new pepole('Fakibas',22);
// console.log(result);

//syntactical sugar 
function Manus(name){
    this.name=name;

}
const men=new Manus('kader molla')
console.log(men);