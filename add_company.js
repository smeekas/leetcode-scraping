
const fs=require('fs');





add=()=>{
    const listOfQuestion=fs.readFileSync('copy2.json','utf-8');
    const data=JSON.parse(listOfQuestion);
const we_want=[
];

//!FIRST COPANY NAME
const company="GOOGLE"; //TODO CAPITAL 
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