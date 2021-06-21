let QUE_FROM_SERVER;

const btn = document.getElementById("get-que");
btn.addEventListener("click", () => {
  const company = document.getElementById("company_name").value;
  fetch("/get_que", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      company: company,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      QUE_FROM_SERVER=data;
      showData(data);;
    })
    .catch((err) => {
      console.log("fetch");
    });
});

function showData(data){
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = ``;
  for (let i = 0; i < data.length; i++) {
    const tr = document.createElement("tr");
    const cls = data[i].diff;
    const tds = `
            <td>${data[i][0]}</td>
            <td>${data[i][1].accep}</td>
            <td><a href="${data[i][1].link}" target="_blank">${data[i][1].name}</a></td>
            <td class=${cls} >${data[i][1].diff}</td>
        `;
    tr.innerHTML = tds;
    tbody.append(tr);
  }
}

const idth=document.getElementById('ID');
idth.addEventListener('click',()=>{
  // console.log(a);
  // console.log(idth);
  const cc=idth.getAttribute('class');
  // console.log(cc);
  if(cc=='asc'){
    const asc_data=QUE_FROM_SERVER.sort((a,b)=>{
       return +a[0]- +b[0];
    })
    QUE_FROM_SERVER=asc_data;
    showData(asc_data);
    idth.className='dsc';
  }else{
    const dsc_data=QUE_FROM_SERVER.sort((a,b)=>{
       return +b[0]- +a[0];
    })
    QUE_FROM_SERVER=dsc_data;
    showData(dsc_data);
    idth.className='asc';
  }
});


const accepth=document.getElementById('ACCEP');
accepth.addEventListener('click',()=>{
  // console.log(a);
  // console.log(idth);
  const cc=accepth.getAttribute('class');
  // console.log(cc);
  if(cc=='asc'){
    const asc_data=QUE_FROM_SERVER.sort((a,b)=>{
       return +a[1].accep- +b[1].accep;
    })
    QUE_FROM_SERVER=asc_data;
    showData(asc_data);
    accepth.className='dsc';
  }else{
    const dsc_data=QUE_FROM_SERVER.sort((a,b)=>{
       return +b[1].accep- +a[1].accep;
    })
    QUE_FROM_SERVER=dsc_data;
    showData(dsc_data);
    accepth.className='asc';
  }
});


const diffth=document.getElementById('DIFF');
diffth.addEventListener('click',()=>{
  // console.log(a);
  // console.log(idth);
  const cc=diffth.getAttribute('class');
  // console.log(cc);
  if(cc=='asc'){
    const asc_data=QUE_FROM_SERVER.sort((a,b)=>{
       return +a[1].diff_rate- +b[1].diff_rate;
    })
    QUE_FROM_SERVER=asc_data;
    showData(asc_data);
    diffth.className='dsc';
  }else{
    const dsc_data=QUE_FROM_SERVER.sort((a,b)=>{
       return +b[1].diff_rate- +a[1].diff_rate;
    })
    QUE_FROM_SERVER=dsc_data;
    showData(dsc_data);
    diffth.className='asc';
  }
});