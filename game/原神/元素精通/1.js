function loading(){
  var xhr = new XMLHttpRequest();
  xhr.open(method="get", url="./1.json", async=false);
  xhr.send(null);
  元素精通 = JSON.parse(xhr.responseText);
  console.log(元素精通);
}