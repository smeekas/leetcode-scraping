const cheerio = require("cheerio");
const fs = require("fs");
const data = cheerio.load(fs.readFileSync("scrap.html"));
const list = {};
const dd = data('tbody[class="reactable-data"]')
  .children("tr")
  .each((i, ele) => {
    const dummy = {};
    const tds0 = data(ele).children("td")[1]; // 2nd td id
    const ID = Number(data(tds0).text());

    const tds1 = data(ele).children("td")[2]; //third td name and link

    const name = data(tds1).children().children("a").text().split('\n');
    const link = data(tds1).children().children("a").attr('href');
    dummy["link"]=`https://leetcode.com${link}`;
    if(name.length==1){
        // dummy["name"] = data(tds1).children().children("a").text();
        dummy["name"] = name[0];
        
    }else{
        const final_name=name[0]+" "+name[1].trim();
        dummy["name"]=final_name;
    }
    
    const tds2 = data(ele).children("td")[4]; // 4th td acceptance
    dummy["accep"] = Number(data(tds2).text().trim().slice(0,4));

    const tds3 = data(ele).children("td")[5]; //5th td difficulty
    dummy["diff"] = data(tds3).children("span").text();
    list[ID]=dummy;
    // list.push(dummy);
  });
  const for_sorting=[];
  for(key in list){
    for_sorting.push([key,list[key]])
  }
  // list.sort((a, b) => {
  //     return +a.accep - +b.accep;
  //   });
  for_sorting.sort((a,b)=>{
    return b[1].accep-a[1].accep;
  })
    console.log(for_sorting);

fs.writeFileSync('fun.json',JSON.stringify(for_sorting));
// const we_want = [100,200,300];
// console.log(list.filter((a) => we_want.includes(+a.id)));




















/*
const trs=data('tbody[class="reactable-data"]').children('tr')[0];  //first tr

const tds0=data(trs).children('td')[1]; // 2nd td id
console.log(data(tds0).text())

const tds1=data(trs).children('td')[2]; //third td name
console.log(data(tds1).children().children('a').text());

const tds2=data(trs).children('td')[4]; // 4th td acceptance
console.log(data(tds2).text().trim());

const tds3=data(trs).children('td')[5]; //5th td difficulty

console.log(data(tds3).children('span').text())
*/
