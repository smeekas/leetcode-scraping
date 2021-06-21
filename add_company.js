const fs=require('fs');

const listOfQuestion=fs.readFileSync('copy2.json','utf-8');
    const data=JSON.parse(listOfQuestion);

// const we_want=[722,42,688,862,443,209,4,706,387,49,153,931,11,70,121,8,166,141,1010,311,33,657,64,56,218,62,146,78,240,628,51,207,138,200,344,45,155,295,746,206,215,1,63,142,151,204,13,118,9,50,167,322,122,98,15,53,2,3,20];
const data2=data.map((a)=>{
    // if(we_want.includes(+a[0])){
    //     if(a[1].company){
    //         console.log(a)
    //          a[1].company.push("GOLDMAN");

    //     }else{
    //         a[1]['company']=['GOLDMAN'];
    //     }

    // }

    // return a;
    // if(a[1].diff==='Easy'){
    //     a[1]['diff_rate']=1;
    // }else if(a[1].diff==='Medium'){
    //     a[1]['diff_rate']=2;
    // }else{
    //     a[1]['diff_rate']=3;
    // }
    // return a;
});
// fs.writeFileSync('copy2.json',JSON.stringify(data2));