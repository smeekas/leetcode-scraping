const fs=require('fs');

const listOfQuestion=fs.readFileSync('copy2.json','utf-8');
    const data=JSON.parse(listOfQuestion);
fs.writeFileSync('main.json',JSON.stringify(data)); //!after success in  COPY2.JSON write in main.json
// const we_want=[564,599,347,273,332,528,56,692,380,239,126,253,238,227,139,205,3,22,49,207,349,118,200,14,5,1];
// const data2=data.map((a)=>{
//     if(we_want.includes(+a[0])){
//         if(a[1].company){
//             console.log(a)
//             //!first change COMPANY name
//              a[1].company.push("YELP");

//         }else{
//             //!first chabge COMPANY name
//             a[1]['company']=['YELP'];
//         }

//     }                                                                   
//     return a;
   
// });
// fs.writeFileSync('copy2.json',JSON.stringify(data2));