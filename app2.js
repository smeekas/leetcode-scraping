// // const cheerio = require("cheerio");
// const fs = require("fs");
// const pdf = require("pdf2json");
// // const data = cheerio.load(fs.readFileSync("scrap.html"));

// // const list = [];
// // const dd = data('tbody[class="reactable-data"]').children("tr").get(0);

// // console.log(data(dd).children()) //tds
// // // fs.writeFileSync('app2-result.txt',data(dd).text());
// // const parser=new pdf();
// // const data=fs.readFileSync('C:/Users/LENOVO/Documents/Node/scraping/goldman.pdf');

// // parser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
// //    parser.on("pdfParser_dataReady", data => {
// //         fs.writeFileSync("pdf.json", JSON.stringify(data));
// //     });

// //     parser.loadPDF("goldman.pdf");


// let gold=fs.readFileSync('pdf.json','utf-8');
// gold=JSON.parse(gold);
// // console.log( gold);
// const len=JSON.stringify(gold['formImage']['Pages'][0]['Texts']).length;
// // console.log(len)

// let i=0;
// // console.log( gold['formImage']['Pages'][0]['Texts'][32]['R'][0]['T'])
// let count=0;
// while(i++<105){ 
//     if(!isNaN(gold['formImage']['Pages'][1]['Texts'][i]['R'][0]['T'])){
//         count++;
//         console.log(gold['formImage']['Pages'][1]['Texts'][i]["R"][0]["T"])
//     }
// }
// console.log("COUNT IS :"+count)
// // console.log( gold['formImage']['Pages'][0]['Texts']);
// // console.log(parser.parseBuffer(data));