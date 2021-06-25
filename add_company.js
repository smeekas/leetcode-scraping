
const fs=require('fs');





add=()=>{
    const listOfQuestion=fs.readFileSync('copy2.json','utf-8');
    const data=JSON.parse(listOfQuestion);
const we_want=[146,425,438,23,480,127,128,295,314,126,403,173,56,394,426,160,73,3,450,53,1,102,227,350,273,103,212,380,139,42,45,17,133,200,253,297,29,287,349,79,118,237,21,50,78,189,206,46,33,94,101,141,13,14,121,2,5];
//!FIRST COPANY NAME
const company="ORACLE"; //TODO CAPITAL 
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
main();