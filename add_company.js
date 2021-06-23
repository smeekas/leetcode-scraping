const fs=require('fs');

const listOfQuestion=fs.readFileSync('copy2.json','utf-8');
    const data=JSON.parse(listOfQuestion);
// fs.writeFileSync('main.json',JSON.stringify(data)); //!after success in  COPY2.JSON write in main.json
// const we_want=[713,974,884,295,451,20,138,235,33,973,45,96,242,88,238,32,73,41,200,127,152,560,12,146,160,167,198,215,3,1,53,121,206];
// const company="EXPEDIA"; //TODO CAPITAL
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