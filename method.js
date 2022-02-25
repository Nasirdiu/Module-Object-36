const student={
    ID:101,
    name:'fakibas',
    mony:2000,
    najor:'computer Science',
    subject:['math','graphice','photo graphice','algorthdom'],
    bestFriend:{
        name:'jalto',
        age:25,
        choce:'programming'

    },
    takeExam:function(){
        console.log(this.name,'taking exam programming');
    } ,
        treatDey :function(expensive){
            this.mony=this.mony-expensive;
            return this.mony;

        }
}

student .takeExam();
const reaming=student.treatDey(900);
const reaming1=student.treatDey(100);
console.log(reaming,reaming1);