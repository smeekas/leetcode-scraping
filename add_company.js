
const fs=require('fs');





add=()=>{
    const listOfQuestion=fs.readFileSync('copy2.json','utf-8');
    const data=JSON.parse(listOfQuestion);
const we_want=[741,427,428,986,305,146,528,636,68,227,267,56,332,297,465,166,780,200,359,253,591,1,341,679,655,36,224,354,353,49,658,291,381,126,139,286,212,642,239,640,79,362,42,361,568,772,652,745,329,34,346,542,218,97,399,130,279,460,57,173,490,17,535,128,295,451,135,161,210,207,78,91,243,430,829,301,273,255,418,759,22,289,695,99,815,934,4,336,722,380,773,23,76,621,269,493,37,347,398,468,85,244,262,378,266,65,140,158,53,242,395,698,767,11,122,388,606,895,1011,54,133,208,39,149,189,342,449,518,20,155,41,733,127,211,16,102,287,350,3,10,31,33,229,75,98,103,150,437,2,232,236,844,46,74,977,40,43,153,199,230,70,151,349,12,226,235,21,26,322,5,69,8,19,66,94,141,283,15,206,50];

//!FIRST COPANY NAME
//! add bloomberg
const company="UBER"; //TODO CAPITAL 
const data2=data.map((a)=>{
    if(we_want.includes(+a[0])){
        if(a[1].company){
            console.log(a)
             a[1].company.push(company);

        }else{
            a[1]['company']=[company];
        }

    }                                                                   
    return a;
   
});
fs.writeFileSync('copy2.json',JSON.stringify(data2));
}

main=()=>{
    const listOfQuestion=fs.readFileSync('copy2.json','utf-8');
    const data=JSON.parse(listOfQuestion);
    fs.writeFileSync('main.json',JSON.stringify(data)); //!after success in  COPY2.JSON write in main.json
}
// add();
// main();