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
//TODO MORE FRONTEND COMPANY SELECTION
//TODO MORE BACKEND FILTRING ACCORDING TO RECEIVED COMPANY
//TODO ADD COMPANIES TO DATA(JSON) MANUALLY😥

app.post("/get_que", (req, res, next) => {
  const company = req.body.company || "google";
  console.log(company);
  const listOfQuestion = fs.readFileSync("copy2.json", "utf-8");
  const data = JSON.parse(listOfQuestion);
  const response = data.filter((a) => {
    if (a[1].company) {
      return a[1].company.includes(company);
    }
    return false;
  });
  // console.log(response)
  res.json(response);
  // JSON.stringify
});
app.listen(7000, () => {
  console.log("connected...");
});
