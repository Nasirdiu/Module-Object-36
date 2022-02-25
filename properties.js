const boltte={
    color:'yellow',head:'water',price:100,
    isCland:true
};
//all propertices sudu asbe
const keye=Object.keys(boltte);
// console.log(keye);
//properties er value gula asbe sudu.
const value =Object.values(boltte);
// console.log(value);

//all arry system output

const entries=Object.entries(boltte);
// console.log(entries);
//delete properti


//seal use korle delte korle o delete hba na. properti add kora jabe delete kora jabe na.
// Object.seal(boltte);
Object.freeze(boltte); // freeaz use korle delete add kisu hba na borof hoye jabo.
boltte.price=500;
delete boltte.color;
console.log(boltte);