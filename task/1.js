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
    a.innerHTML = i;
    desktop.appendChild(a);
    console.log(appList[i]);
  }
}