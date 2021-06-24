const fs=require('fs');

const listOfQuestion=fs.readFileSync('copy2.json','utf-8');
    const data=JSON.parse(listOfQuestion);
fs.writeFileSync('main.json',JSON.stringify(data)); //!after success in  COPY2.JSON write in main.json
// const we_want=[143,146,33,92,605,384,1,253,628,56,151,206,235,200,81,189,88,116,8,20,173,138,110,412,2,21,53,54,144,46,3,19,26,344,5,7,102];
// const company="CISCO"; //TODO CAPITAL
// const data2=data.map((a)=>{
//     if(we_want.includes(+a[0])){
//         if(a[1].company){
//             console.log(a)
//             //!first change COMPANY name
//              a[1].company.push(company);

//         }else{
//             //!first chabge COMPANY name
//             a[1]['company']=[company];
//         }

//     }                                                                   
//     return a;
   
// });
// fs.writeFileSync('copy2.json',JSON.stringify(data2));