const fs=require('fs');

const listOfQuestion=fs.readFileSync('copy2.json','utf-8');
    const data=JSON.parse(listOfQuestion);
// fs.writeFileSync('main.json',JSON.stringify(data)); //!after success in  COPY2.JSON write in main.json
// const we_want=[25,697,526,63,199,319,255,206,338,500,404,200,133,43,138,20,23,98,2];
// const data2=data.map((a)=>{
//     if(we_want.includes(+a[0])){
//         if(a[1].company){
//             console.log(a)
//             //!first change COMPANY name
//              a[1].company.push("MATHWORKS");

//         }else{
//             //!first chabge COMPANY name
//             a[1]['company']=['MATHWORKS'];
//         }

//     }                                                                   
//     return a;
   
// });
// fs.writeFileSync('copy2.json',JSON.stringify(data2));