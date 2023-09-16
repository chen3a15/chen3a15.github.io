function loading(){
  let body = document.getElementsByTagName("body")[0]
  let data = getQueryVariable("data")
  if (data.length % 6 != 0){
    let 错误文本框 = document.createElement("span");
    错误文本框.innerHTML = "参数解析错误：长度"
    body.appendChild(错误文本框);
    return false
  }
  if (/[^0-9]/.test(data)){
    let 错误文本框 = document.createElement("span");
    错误文本框.innerHTML = "参数解析错误：包含0-9之外的字符"
    body.appendChild(错误文本框);
    return false
  }
  
  let 参数 = []
  for (let i = 0; i < data.length; i+=6){
    参数.push([data.slice(i, i + 4), data.slice(i + 4, i + 5), data.slice(i + 5, i + 6)])
    if (parseInt(参数[参数.length - 1][1]) + parseInt(参数[参数.length - 1][2]) > 4){
      let 错误文本框 = document.createElement("span");
      错误文本框.innerHTML = "参数第" + (i + 5).toString() + "、" + (i + 6).toString() + "出现意料之外的数字"
      document.getElementsByTagName("body")[0].appendChild(错误文本框);
      return false
    }
  }
  
  let 历史表格 = document.createElement("table");
  历史表格.setAttribute("border", "1");
  body.appendChild(历史表格);
  
  let 一行 = document.createElement("tr");
  let 一行一列 = document.createElement("th");
  一行一列.innerHTML = "玩家";
  一行.appendChild(一行一列);
  let 一行二列 = document.createElement("th");
  一行二列.innerHTML = "系统";
  一行.appendChild(一行二列);
  历史表格.appendChild(一行);
  
  for (let i in 参数){
    let 二行 = document.createElement("tr");
    let 二行一列 = document.createElement("td");
    二行一列.setAttribute("align", "center");
    二行一列.innerHTML = 参数[i][0];
    二行.appendChild(二行一列);
    let 二行二列 = document.createElement("td");
    二行二列.setAttribute("align", "center");
    二行二列.innerHTML = 参数[i][1] + "A" + 参数[i][2] + "B";
    二行.appendChild(二行二列);
    历史表格.appendChild(二行);
  }
  
  let 组合列表 = []
  let b = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  for (let i in b){
    let c = b.concat([]);
    c.splice(parseInt(i), 1)
    for (let j in c){
      let d = c.concat([]);
      d.splice(parseInt(j), 1)
      for (let k in d){
        let e = d.concat([]);
        e.splice(parseInt(k), 1)
        for (let l in e){
          组合列表.push(b[i] + c[j] + d[k] + e[l])
        }
      }
    }
  }
  
  let 筛选列表 = [];
  for (let i in 组合列表){
    let li = true
    for (let j in 参数){
      let a = 0
      let b = 0
      for (let k = 0; k < 4; k++){
       
        if (组合列表[i].slice(k, k + 1) == 参数[j][0].slice(k, k + 1)){
          a = a + 1
        }
        else if (参数[j][0].indexOf(组合列表[i].slice(k, k + 1)) != -1){
          b = b + 1
        }
      }
    if (a != 参数[j][1] || b != 参数[j][2]){
      li = false
    }
    }
    if (li){
      筛选列表.push(组合列表[i])
    }
  }
  
  let 分割线 = document.createElement("hr");
  body.appendChild(分割线);
  
  let 预测位置 = document.createElement("table");
  预测位置.setAttribute("border", "1");
  body.appendChild(预测位置);
  一行 = document.createElement("tr");
  一行一列 = document.createElement("th");
  一行一列.innerHTML = "数字";
  一行.appendChild(一行一列);
  一行二列 = document.createElement("th");
  一行二列.innerHTML = "第一位";
  一行.appendChild(一行二列);
  一行三列 = document.createElement("th");
  一行三列.innerHTML = "第二位";
  一行.appendChild(一行三列);
  一行四列 = document.createElement("th");
  一行四列.innerHTML = "第三位";
  一行.appendChild(一行四列);
  一行五列 = document.createElement("th");
  一行五列.innerHTML = "第四位";
  一行.appendChild(一行五列);
  预测位置.appendChild(一行);
  
  let 数字位置 = []
  for (let i in 筛选列表){
    for (let j = 0; j < 4; j++){
      let a = 筛选列表[i].slice(j, j + 1)
      if (!数字位置[a]){
        数字位置[a] =[]
      }
      数字位置[a].push(j)
    }
  }
  
  for (let i in 数字位置){
    let 二行 = document.createElement("tr");
    let 二行一列 = document.createElement("td");
    二行一列.setAttribute("align", "center");
    二行一列.innerHTML = i;
    二行.appendChild(二行一列);
    console.log(i)
    console.log(数字位置[i])
    for (let j = 0; j < 4; j++){
      let 二行二列 = document.createElement("td");
      二行二列.setAttribute("align", "center");
      二行二列.setAttribute("bgColor", "red");
      二行二列.innerHTML = "╳";
      if (数字位置[i].indexOf(j) != -1){
        二行二列.setAttribute("bgColor", "green");
        二行二列.innerHTML = "✓";
      }
      二行.appendChild(二行二列);
    }
    预测位置.appendChild(二行);
  }
  
  分割线 = document.createElement("hr");
  body.appendChild(分割线);
  
  let 预测表格 = document.createElement("table");
  预测表格.setAttribute("border", "1");
  body.appendChild(预测表格);
  一行 = document.createElement("tr");
  一行一列 = document.createElement("th");
  一行一列.innerHTML = "预测";
  一行.appendChild(一行一列);
  预测表格.appendChild(一行);
  for (let i in 筛选列表){
    let 二行 = document.createElement("tr");
    let 二行一列 = document.createElement("td");
    二行一列.setAttribute("align", "center");
    二行一列.innerHTML = 筛选列表[i];
    二行.appendChild(二行一列);
    预测表格.appendChild(二行);
  }
  
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