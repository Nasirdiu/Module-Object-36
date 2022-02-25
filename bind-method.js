const kudu={
    Id:101,
    name:'Kudu',
    mony:2000,
        treatDey :function(expensive){
            this.mony=this.mony-expensive;
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

kudu.treatDey(100);

const hreoFirst=kudu.treatDey.bind(heroAlom);
hreoFirst(500);
hreoFirst(200);
hreoFirst(300);

kudu.treatDey(400);
const alomDey=kudu.treatDey.bind(alomvai);
alomDey(700);
