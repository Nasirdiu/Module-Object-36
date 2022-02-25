const kudu={
    Id:101,
    name:'Kudu',
    mony:2000,
        treatDey :function(expensive,boksis,tax){
            this.mony=this.mony-expensive-boksis-tax;
            console.log('Hero call hose',this);
            return this.mony;

        }
};

const heroAlom={
        id:102,
        name:'Hero alom',
        mony:2000,
}
const alomvai={
        id:103,
        name:'Alom Vai',
        mony:7000,
}
//call

 kudu.treatDey.call(alomvai,5000,300,100)
 kudu.treatDey.call(heroAlom,1000,300,100)

//apply
kudu.treatDey.apply(alomvai,[5000,500,100])
kudu.treatDey.apply(heroAlom,[1000,100,100])
