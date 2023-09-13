console.log = (function (oriLogFunc) {
  return function () {
    //判断配置文件是否开启日志调试
    if (true) {
      try{
        oriLogFunc.call(console, ...arguments);
      }catch(e){
        console.error('console.log error', e);
      }
    }
  }
})(console.log);

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
    a.setAttribute("onclick", "start('" + i + "')");
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

function start(id){
  selectBorder(id)
  a = document.getElementById("window_" + id);
  if (a){
    a.style.display = "";
    return true;
  }
  console.log("加载" + id);
  a = document.getElementsByTagName("body")[0];
  b = document.createElement("div");
  b.setAttribute("class", "window");
  b.setAttribute("id", "window_" + id);
  e = document.createElement("div");
  e.setAttribute("class", "title");
  f = document.createElement("span");
  f.innerHTML = id;
  e.appendChild(f);
  d = document.createElement("span");
  d.setAttribute("class", "close");
  d.setAttribute("onclick", "document.getElementById('window_" + id + "').style.display = 'none';");
  d.innerHTML = "╳";
  e.appendChild(d);
  b.appendChild(e);
  c = document.createElement("iframe");
  c.setAttribute("src", "./app/" + id + "/index.html");
  c.setAttribute("frameborder", "0");
  c.style.height = appList[id]["height"];
  c.style.width = appList[id]["width"];
  b.appendChild(c);
  a.appendChild(b);
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