let QUE_FROM_SERVER;

(() => {
  const companies = document.getElementById("companies");
  // <div>
  //             <input type="checkbox" name="all" id="all" value="ALL" />
  //             <label for="all">all</label>
  //           </div>
const tags=['all','most-asked','goldman','nvidia','sap','quora','mathworks','tencent','indeed','snapchat','baidu','yelp','pinterest','zillow','paypal','ebay','lyft','expedia','airbnb','cisco','twitter','salesforce','vmware','alibaba','walmart','oracle','yahoo','linkedin','adobe','apple','bloomberg','uber','microsoft','facebook','amazon'];
for(let i=0;i<tags.length;i++){

  const div = document.createElement("div");
  const input = document.createElement("input");
  const label = document.createElement("label");
  input.type="checkbox";
  input.name=tags[i];
  input.name=tags[i];
  input.id=tags[i];
  input.value=tags[i].toUpperCase();
  label.setAttribute("for",tags[i]);
  label.innerText=tags[i];
  div.append(input);
  div.append(label);
  companies.append(div);
}
  
})();

function showData(data) {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = ``;
  if (data.length < 1) {
    const tr = document.createElement("tr");
    // console.log(cls)
    const tds = `
            <td></td>
            <td></td>
            <td></td>
            <td ></td>
        `;
    tr.innerHTML = tds;
    tbody.append(tr);
  }
  document.getElementById("total").innerHTML = ``;
  const total = document.getElementById("total");
  const h2 = document.createElement("h2");
  h2.innerText = `total: ${data.length}`;
  total.append(h2);
  for (let i = 0; i < data.length; i++) {
    const tr = document.createElement("tr");
    const cls = data[i][1].diff;
    let tds;
    if (data[i][1].name.length === 2) {
      //?most asked
      data[i][1].name[1]=data[i][1].name[1].map(a=>{
        return ' '+a;
      });
      tds = `
      
            <td>${data[i][0]}</td>
            <td  >${data[i][1].accep}</td>
            <td style="max-width:600px; word-wrap: break-word; " >
 
            <a href="${data[i][1].link}" target="_blank">${data[i][1].name[0]}</a>
            <h3 class="h3_hover">${data[i][1].name[1]}<h3/>
       
            </td>
            
            <td  >
            <p class="difflabel ${cls}">${data[i][1].diff}</p>
            
            </td>
        `;
    } else {
      tds = `
     
  <td>${data[i][0]}</td>
  <td  >${data[i][1].accep}</td>
  <td  ><a href="${data[i][1].link}" target="_blank">${data[i][1].name}</a></td>
  <td  >
  <p class="difflabel ${cls}">${data[i][1].diff}</p>
  
  </td>
`;
    }
    // console.log(cls)

    tr.innerHTML = tds;
    // console.log(tr);
    tbody.append(tr);
  }
}

const idth = document.getElementById("ID");
idth.addEventListener("click", () => {
  // console.log(a);
  // console.log(idth);
  const cc = idth.classList;
  // console.log(cc);
  if(cc.contains('asc')){
    const asc_data = QUE_FROM_SERVER.sort((a, b) => {
      return +a[0] - +b[0];
    });
    QUE_FROM_SERVER = asc_data;
    showData(asc_data);
    cc.replace("asc","dsc")
    idth.classList = cc;
  }else{
        const dsc_data = QUE_FROM_SERVER.sort((a, b) => {
      return +b[0] - +a[0];
    });
    QUE_FROM_SERVER = dsc_data;
    showData(dsc_data);
    cc.replace("dsc","asc")
    idth.classList = cc;
  }

});

const accepth = document.getElementById("ACCEP");
accepth.addEventListener("click", () => {
  // console.log(a);
  // console.log(idth);
  const cc = accepth.classList;
  // console.log(cc);
  if (cc.contains("asc")) {
    const asc_data = QUE_FROM_SERVER.sort((a, b) => {
      return +a[1].accep - +b[1].accep;
    });
    QUE_FROM_SERVER = asc_data;
    showData(asc_data);
    cc.replace("asc","dsc")
    accepth.className = cc;
  } else {
    const dsc_data = QUE_FROM_SERVER.sort((a, b) => {
      return +b[1].accep - +a[1].accep;
    });
    QUE_FROM_SERVER = dsc_data;
    showData(dsc_data);
    cc.replace("dsc","asc")
    accepth.className = cc;
  }
});

const diffth = document.getElementById("DIFF");
diffth.addEventListener("click", () => {
  // console.log(a);
  // console.log(idth);
  const cc = diffth.classList;
  // console.log(cc);
  if (cc.contains("asc")) {
    const asc_data = QUE_FROM_SERVER.sort((a, b) => {
      return +a[1].diff_rate - +b[1].diff_rate;
    });
    QUE_FROM_SERVER = asc_data;
    showData(asc_data);
    cc.replace("asc","dsc")
    diffth.className = cc;
  } else {
    const dsc_data = QUE_FROM_SERVER.sort((a, b) => {
      return +b[1].diff_rate - +a[1].diff_rate;
    });
    QUE_FROM_SERVER = dsc_data;
    showData(dsc_data);
    cc.replace("dsc","asc")
    diffth.className = cc;
  }
});

document.getElementById("all").addEventListener("click", () => {
  if (document.getElementById("all").checked) {
    let c0 = document.getElementById("companies").children;
    for (let i = 1; i < c0.length; i++) {
      c0[i].children[0].checked = false;
    }
  }
});

document.getElementById("most-asked").addEventListener("click", () => {
  if (document.getElementById("most-asked").checked) {
    let c0 = document.getElementById("companies").children;
    for (let i = 2; i < c0.length; i++) {
      c0[i].children[0].checked = false;
    }
    c0[0].children[0].checked = false;
  }
});

const submit_btn = document.getElementById("submit-btn");
submit_btn.addEventListener("click", () => {
  const arr = [];

  let c0 = document.getElementById("companies").children;
  for (let i = 0; i < c0.length; i++) {
    arr.push(c0[i].children[0]);
  }
  // console.log(arr);
  // let c0 = document.getElementById("all");
  // arr.push(c0);
  // c0 = document.getElementById("nvidia");
  // arr.push(c0);
  // c0 = document.getElementById("goldman");
  // arr.push(c0);
  // c0 = document.getElementById("sap");
  // arr.push(c0);
  // c0 = document.getElementById("quora");
  // arr.push(c0);
  // c0 = document.getElementById("mathworks");
  // arr.push(c0);

  let data = arr.map((a) => {
    if (a.checked) {
      return a.value;
    }
    return null;
  });
  // console.log(data)
  data = data.filter((a) => a !== null);
  // console.log(data);
  // return;
  if (data.length === 0) {
    return;
  }
  fetch("/get_que", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      company: data,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      QUE_FROM_SERVER = data;
      showData(data);
    })
    .catch((err) => {
      console.log(err);
      console.log("fetch filter");
    });
});
let extraSaved=[];
const search = document.getElementById("search");
search.addEventListener("keyup", (e) => {
  const word = search.value.toLowerCase();
  console.log(word);
  
  let dump = QUE_FROM_SERVER.filter((a) => {
    if (a[1].name.length===2) {
      // console.log(a[1].name[1]);
      return a[1].name[0].toLowerCase().includes(word);
      
    } else {
      // console.log(a[1].name);
      return a[1].name.toLowerCase().includes(word);
    }
  });
  // QUE_FROM_SERVER=dump;
 
  console.log(dump)
  showData(dump);
});

const clear_btn = document.getElementById("clear_btn");
clear_btn.addEventListener("click", () => {
  search.value = ``;
  // QUE_FROM_SERVER=extraSaved;
  search.dispatchEvent(new KeyboardEvent("keyup", { key: "Backspace" }));
});
