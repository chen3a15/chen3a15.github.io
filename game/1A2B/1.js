function loading(){
  data = getQueryVariable("data")
  if (data.length % 6 != 0 || data.length != parseInt(data).toString().length){
    let a = document.createElement("span");
    a.innerHTML = "参数解析错误"
    document.getElementsByTagName("body")[0].appendChild(a);
    return false
  }
  
  let a = []
  for (let i = 0; i < data.length; i+=6){
    a.push([data.slice(i, i + 4), data.slice(i + 4, i + 5), data.slice(i + 5, i + 6)])
    if (parseInt(a[a.length - 1][1]) + parseInt(a[a.length - 1][2]) > 4){
      a = document.createElement("span");
      a.innerHTML = "参数第" + (i + 5).toString() + "、" + (i + 6).toString() + "出现意料之外的数字"
      document.getElementsByTagName("body")[0].appendChild(a);
      return false
    }
  }
  
  data = a
  
  a = document.createElement("table");
  a.setAttribute("border", "1");
  document.getElementsByTagName("body")[0].appendChild(a);
  let t1 = document.createElement("tr");
  let t1_1 = document.createElement("th");
  t1_1.innerHTML = "玩家";
  t1.appendChild(t1_1);
  let t1_2 = document.createElement("th");
  t1_2.innerHTML = "系统";
  t1.appendChild(t1_2);
  a.appendChild(t1);
  for (let i in data){
    let t2 = document.createElement("tr");
    let t2_1 = document.createElement("td");
    t2_1.innerHTML = data[i][0];
    t2.appendChild(t2_1);
    let t2_2 = document.createElement("td");
    t2_2.innerHTML = data[i][1] + "A" + data[i][2] + "B";
    t2.appendChild(t2_2);
    a.appendChild(t2);
  }
  
  let list = []
  let b = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  for (let i in b){
    let c = b
    c.splice(i, 1)
    for (let j in c){
      let d = c
      d.splice(j, 1)
      for (let k in d){
        let e = d
        e.splice(k, 1)
        for (let l in e){
          list.push(i + j + k + l)
        }
      }
    }
  }
  
  let t3 = document.createElement("tr");
  let t3_1 = document.createElement("thd");
  t3_1.innerHTML = "可能的答案";
  t3.appendChild(t3_1);
  let t3_2 = document.createElement("td");
  t3_2.innerHTML = "";
  t3.appendChild(t3_2);
  a.appendChild(t3);
  
  
  console.log(list.length)
  console.log(list)
}

function getQueryVariable(variable){
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == variable){return pair[1];}
  }
  return("");
}