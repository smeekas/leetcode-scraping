const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const fs = require("fs");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "");

app.use(express.static(path.join(__dirname)));
app.use(express.json());
app.get("/", (req, res, next) => {
  res.render("index.ejs");
});

//TODO add done que ID and display it (can store on DB or LS)
//TODO ADD COMPANIES TO DATA(JSON) MANUALLY😥

app.post("/get_que", (req, res, next) => {
  const company = req.body.company;
  console.log(company);
  // if(company[0]==='ALL'){

  // }
  const listOfQuestion = fs.readFileSync("main.json", "utf-8");
  const data = JSON.parse(listOfQuestion);
  // if(!company){
  //   return res.json(data);//!Company will be there due to frontend checking
  // }
  if (company[0] === "MOST-ASKED") {
    // return res.json(data);
    let response = data.filter((a) => {
      if (a[1].company) {
        return true;
      } else {
        return false;
      }
    });
    response=response.sort((a,b)=>{
      return b[1].company.length-a[1].company.length;
    })
    response=response.map(a=>{
      // a[1].name=a[1].name+`(${a[1].company})`
      a[1].name=[a[1].name,a[1].company];
      return a;
    })
    return res.json(response);
  }




  if (company[0] === "ALL") {
    return res.json(data);
  }
  const response = data.filter((a) => {
   
    if (a[1].company) {
      return check_for_all(a[1].company, company);
    }
    return false;
  });
  res.json(response);
  // JSON.stringify
});

// app.post('/keyword',(req,res,next)=>{
//   const keyword=req.body.keyword;
//   const listOfQuestion = fs.readFileSync("main.json", "utf-8");
//   const data = JSON.parse(listOfQuestion);
//   const response=data.filter((a)=>{
//     return a[1].name.toLowerCase().includes(keyword.toLowerCase());
//   });
//   return res.json(response);
// })

app.listen(7000, () => {
  console.log("connected...");
});
function check_for_all(main, tobe) {
  return tobe.every(function (v) {
    return main.includes(v);
  });
}
