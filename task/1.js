function loadAPP(){
  console.log("开始加载桌面图标");
  var xhr = new XMLHttpRequest();
  xhr.open(method="get", url="./list.json", async=false);
  xhr.send(null);
  appList = JSON.parse(xhr.responseText);
  console.log("开始填充桌面图标");
  desktop = document.getElementById("desktop");
  for (i in appList){
    let a = document.createElement("div");
    a.setAttribute("id", "icon_" + i);
    a.setAttribute("onclick", "ready('" + i + "')");
    a.setAttribute("ondblclick", "start('" + i + "')");
    a.setAttribute("title", appList[i]["description"]);
    let b = document.createElement("img");
    b.setAttribute("src", appList[i]["icon"]);
    a.appendChild(b);
    let c = document.createElement("br");
    a.appendChild(c);
    let d = document.createElement("span");
    d.innerHTML = i;
    a.appendChild(d);
    desktop.appendChild(a);
  }
}

function ready(id){
  selectBorder(id)
  a = document.getElementById("window_" + id);
  if (a){
    return true;
  }
  console.log("加载" + id);
  a = document.getElementsByTagName("body")[0];
  b = document.createElement("div");
  b.setAttribute("class", "window");
  b.setAttribute("id", "window_" + id);
  c = document.createElement("iframe");
  c.setAttribute("src", "./" + id + "/index.html");
  c.setAttribute("frameborder", "0");
  b.appendChild(c);
  a.appendChild(b);
}

function start(id){
  console.log("启动" + id);
}

function selectBorder(id){
  a = document.getElementById("desktop").childNodes;
  for (i in a){
    if (a[i].nodeName != "DIV") continue
    if (a[i].id == "icon_" + id){
      a[i].setAttribute("style", "border-color: #999999;");
    } else {
      a[i].setAttribute("style", "border-color: #666666;");
    }
  }
}