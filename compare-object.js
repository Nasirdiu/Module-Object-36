/* const first= {a:1};
const secend={a:1};
const thard =first;
if(first===thard){
    console.log('object are equal');
}
else{
    console.log('object are different');
} */
const first1 = { a: 1,b:1 };
const secend2 = { a: '1', b:2 };
/* console.log(JSON.stringify(first1));
console.log(JSON.stringify(secend2));
if (JSON.stringify(first1) === JSON.stringify(secend2)) */
  function compareObject(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }
    for (const pop in obj1) {
      if (obj1[pop] !== obj2[pop]) {
        return false;
      }
      return true;
    }
  }

const total = compareObject(first1, secend2);
console.log(total);
