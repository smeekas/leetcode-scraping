let QUE_FROM_SERVER;

// const btn = document.getElementById("get-que");
// btn.addEventListener("click", () => {
//   const company = document.getElementById("company_name").value;
//   fetch("/get_que", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       company: company,
//     }),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       QUE_FROM_SERVER = data;
//       showData(data);
//     })
//     .catch((err) => {
//       console.log("fetch");
//     });
// });

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
  for (let i = 0; i < data.length; i++) {
    const tr = document.createElement("tr");
    const cls = data[i][1].diff;
    // console.log(cls)
    const tds = `
            <td>${data[i][0]}</td>
            <td>${data[i][1].accep}</td>
            <td><a href="${data[i][1].link}" target="_blank">${data[i][1].name}</a></td>
            <td  >
            <p class="difflabel ${cls}">${data[i][1].diff}</p>
            
            </td>
        `;
    tr.innerHTML = tds;
    tbody.append(tr);
  }
}

const idth = document.getElementById("ID");
idth.addEventListener("click", () => {
  // console.log(a);
  // console.log(idth);
  const cc = idth.getAttribute("class");
  // console.log(cc);
  if (cc == "asc") {
    const asc_data = QUE_FROM_SERVER.sort((a, b) => {
      return +a[0] - +b[0];
    });
    QUE_FROM_SERVER = asc_data;
    showData(asc_data);
    idth.className = "dsc";
  } else {
    const dsc_data = QUE_FROM_SERVER.sort((a, b) => {
      return +b[0] - +a[0];
    });
    QUE_FROM_SERVER = dsc_data;
    showData(dsc_data);
    idth.className = "asc";
  }
});

const accepth = document.getElementById("ACCEP");
accepth.addEventListener("click", () => {
  // console.log(a);
  // console.log(idth);
  const cc = accepth.getAttribute("class");
  // console.log(cc);
  if (cc == "asc") {
    const asc_data = QUE_FROM_SERVER.sort((a, b) => {
      return +a[1].accep - +b[1].accep;
    });
    QUE_FROM_SERVER = asc_data;
    showData(asc_data);
    accepth.className = "dsc";
  } else {
    const dsc_data = QUE_FROM_SERVER.sort((a, b) => {
      return +b[1].accep - +a[1].accep;
    });
    QUE_FROM_SERVER = dsc_data;
    showData(dsc_data);
    accepth.className = "asc";
  }
});

const diffth = document.getElementById("DIFF");
diffth.addEventListener("click", () => {
  // console.log(a);
  // console.log(idth);
  const cc = diffth.getAttribute("class");
  // console.log(cc);
  if (cc == "asc") {
    const asc_data = QUE_FROM_SERVER.sort((a, b) => {
      return +a[1].diff_rate - +b[1].diff_rate;
    });
    QUE_FROM_SERVER = asc_data;
    showData(asc_data);
    diffth.className = "dsc";
  } else {
    const dsc_data = QUE_FROM_SERVER.sort((a, b) => {
      return +b[1].diff_rate - +a[1].diff_rate;
    });
    QUE_FROM_SERVER = dsc_data;
    showData(dsc_data);
    diffth.className = "asc";
  }
});

document.getElementById("all").addEventListener("click", () => {
  if (document.getElementById("all").checked) {
    document.getElementById("nvidia").checked = false;
    document.getElementById("goldman").checked = false;

    return;
  }
});

const submit_btn = document.getElementById("submit-btn");
submit_btn.addEventListener("click", () => {
  const arr = [];

  let c0 = document.getElementById("all");
  arr.push(c0);
  c0 = document.getElementById("nvidia");
  arr.push(c0);
  c0 = document.getElementById("goldman");
  arr.push(c0);
  c0 = document.getElementById("sap");
  arr.push(c0);
  c0 = document.getElementById("quora");
  arr.push(c0);
  c0 = document.getElementById("mathworks");
  arr.push(c0);

  let data = arr.map((a) => {
    if (a.checked) {
      return a.value;
    }
    return null;
  });
  console.log(data)
  data = data.filter((a) => a !== null);
  // console.log(data);
if(data.length===0){
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
      document.getElementById("total").innerHTML = ``;
      const total = document.getElementById("total");
      const h2 = document.createElement("h2");
      h2.innerText = `total: ${data.length}`;
      total.append(h2);
    })
    .catch((err) => {
      console.log(err);
      console.log("fetch filter");
    });
});
