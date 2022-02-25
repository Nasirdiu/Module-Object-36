const boltte={
    color:'yellow',head:'water',price:100,
    isCland:true
};

// use loop 
/* for(let i=0;i<10;i++){}
for(const num of number){} Array
for (const prop in student) object  */

for(const pop in boltte){
    // console.log(pop,boltte[pop]);
}

//keyes
const keyes =Object.keys(boltte);
for(const pop of keyes){
    // console.log(pop,boltte[pop]);
}

for(const [keye,value] of Object.entries(boltte)){
    console.log(keye,value);
}

